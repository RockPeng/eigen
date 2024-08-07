import {
  Box,
  Checkbox,
  Flex,
  InfoCircleIcon,
  Input,
  Join,
  Separator,
  Spacer,
  Text,
  useTheme,
} from "@artsy/palette-mobile"
import { InquiryModal_artwork$key } from "__generated__/InquiryModal_artwork.graphql"
import { InquiryQuestionInput } from "__generated__/useSubmitInquiryRequestMutation.graphql"
import { FancyModal } from "app/Components/FancyModal/FancyModal"
import { FancyModalHeader } from "app/Components/FancyModal/FancyModalHeader"
import ChevronIcon from "app/Components/Icons/ChevronIcon"
import { AUTOMATED_MESSAGES } from "app/Scenes/Artwork/Components/CommercialButtons/constants"
import { useSubmitInquiryRequest } from "app/Scenes/Artwork/Components/CommercialButtons/useSubmitInquiryRequest"
import { navigate } from "app/system/navigation/navigate"
import { ArtworkInquiryContext } from "app/utils/ArtworkInquiry/ArtworkInquiryStore"
import { InquiryQuestionIDs } from "app/utils/ArtworkInquiry/ArtworkInquiryTypes"
import { LocationWithDetails } from "app/utils/googleMaps"
import { Schema } from "app/utils/track"
import React, { useCallback, useContext, useEffect, useRef, useState } from "react"
import { LayoutAnimation, ScrollView, TouchableOpacity } from "react-native"
import { graphql, useFragment } from "react-relay"
import { useTracking } from "react-tracking"
import styled from "styled-components/native"
import { CollapsibleArtworkDetailsFragmentContainer } from "./CollapsibleArtworkDetails"
import { ShippingModal } from "./ShippingModal"

interface InquiryModalProps {
  artwork: InquiryModal_artwork$key
  toggleVisibility: () => void
  modalIsVisible: boolean
  onMutationSuccessful: (state: boolean) => void
}

const ErrorMessageFlex = styled(Flex)`
  position: absolute;
  top: 60px;
  width: 100%;
  z-index: 5;
`

const InquiryQuestionOption: React.FC<{
  id: string
  question: string
  setShippingModalVisibility?: (isVisible: boolean) => void
}> = ({ id, question, setShippingModalVisibility }) => {
  const { color, space } = useTheme()
  const { state, dispatch } = useContext(ArtworkInquiryContext)
  const isShipping = id === InquiryQuestionIDs.Shipping

  const questionSelected = Boolean(
    state.inquiryQuestions.find((iq) => {
      return iq.questionID === id
    })
  )

  const maybeRegisterAnimation = () => {
    if (isShipping) {
      LayoutAnimation.configureNext({
        ...LayoutAnimation.Presets.linear,
        duration: 200,
      })
    }
  }

  React.useLayoutEffect(maybeRegisterAnimation, [questionSelected])

  const setSelection = () => {
    dispatch({
      type: "selectInquiryQuestion",
      payload: {
        questionID: id,
        details: isShipping ? state.shippingLocation?.name : null,
        isChecked: !questionSelected,
      },
    })
  }

  return (
    <React.Fragment>
      <TouchableOpacity onPress={setSelection}>
        <Flex
          style={{
            borderColor: questionSelected ? color("black100") : color("black10"),
            borderWidth: 1,
            borderRadius: 5,
            flexDirection: "column",
            marginTop: space(1),
            padding: space(2),
          }}
        >
          <Flex flexDirection="row" justifyContent="space-between">
            <Flex flexDirection="row">
              <Join separator={<Spacer x={4} />}>
                <Checkbox
                  testID={`checkbox-${id}`}
                  checked={questionSelected}
                  onPress={setSelection}
                />
                <Text variant="sm">{question}</Text>
              </Join>
            </Flex>
          </Flex>

          {!!isShipping && !!questionSelected && (
            <>
              <Separator my={2} />

              <TouchableOpacity
                testID="toggle-shipping-modal"
                onPress={() => {
                  if (typeof setShippingModalVisibility === "function") {
                    setShippingModalVisibility(true)
                  }
                }}
              >
                <Flex flexDirection="row" justifyContent="space-between" alignItems="center">
                  {!state.shippingLocation ? (
                    <>
                      <Text variant="sm" color="black60">
                        Add your location
                      </Text>
                      <Box>
                        <ChevronIcon color="black60" />
                      </Box>
                    </>
                  ) : (
                    <>
                      <Text variant="sm" color="black100" style={{ width: "70%" }}>
                        {state.shippingLocation.name}
                      </Text>
                      <Text variant="sm" color="blue100">
                        Edit
                      </Text>
                    </>
                  )}
                </Flex>
              </TouchableOpacity>
            </>
          )}
        </Flex>
      </TouchableOpacity>
    </React.Fragment>
  )
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ artwork, ...props }) => {
  const { toggleVisibility, modalIsVisible, onMutationSuccessful } = props

  const artworkData = useFragment(artworkFragmentQuery, artwork)

  const questions = artworkData?.inquiryQuestions
  const partnerName = artworkData?.partner?.name
  const scrollViewRef = useRef<ScrollView>(null)
  const tracking = useTracking()
  const [addMessageYCoordinate, setAddMessageYCoordinate] = useState<number>(0)

  const { state, dispatch } = useContext(ArtworkInquiryContext)
  const [shippingModalVisibility, setShippingModalVisibility] = useState(false)
  const [mutationError, setMutationError] = useState(false)
  const [loading, setLoading] = useState(false)

  const selectShippingLocation = (locationDetails: LocationWithDetails) =>
    dispatch({ type: "selectShippingLocation", payload: locationDetails })
  const setMessage = useCallback(
    (message: string) => dispatch({ type: "setMessage", payload: message }),
    [dispatch]
  )
  const [mutationSuccessful, setMutationSuccessful] = useState(false)

  const [commit] = useSubmitInquiryRequest()

  const getAutomatedMessages = () => {
    return AUTOMATED_MESSAGES[Math.floor(Math.random() * AUTOMATED_MESSAGES.length)]
  }

  const resetAndExit = () => {
    dispatch({ type: "resetForm", payload: null })
    setMessage(getAutomatedMessages())
    toggleVisibility()
  }

  const scrollToInput = useCallback(() => {
    scrollViewRef.current?.scrollTo({ y: addMessageYCoordinate })
  }, [addMessageYCoordinate])

  const handleErrorTracking = () => {
    tracking.trackEvent({
      action_type: Schema.ActionTypes.Fail,
      action_name: Schema.ActionNames.InquirySend,
      owner_type: Schema.OwnerEntityTypes.Artwork,
      owner_id: artworkData.internalID,
      owner_slug: artworkData.slug,
    })
  }

  useEffect(() => {
    setMessage(getAutomatedMessages())
  }, [setMessage])

  useEffect(() => {
    if (mutationSuccessful) {
      resetAndExit()

      tracking.trackEvent({
        action_type: Schema.ActionTypes.Success,
        action_name: Schema.ActionNames.InquirySend,
        owner_type: Schema.OwnerEntityTypes.Artwork,
        owner_id: artworkData.internalID,
        owner_slug: artworkData.slug,
      })

      const delayNotification = setTimeout(() => {
        onMutationSuccessful(true)
        setMutationSuccessful(false)
      }, 500)
      return () => {
        clearTimeout(delayNotification)
      }
    }
  }, [mutationSuccessful])

  useEffect(() => {
    if (mutationSuccessful || mutationError) {
      setLoading(false)
    }
  }, [mutationSuccessful, mutationError])

  const sendInquiry = () => {
    if (loading) {
      return
    }
    setLoading(true)
    tracking.trackEvent({
      action_type: Schema.ActionTypes.Tap,
      action_name: Schema.ActionNames.InquirySend,
      owner_type: Schema.OwnerEntityTypes.Artwork,
      owner_id: artworkData.internalID,
      owner_slug: artworkData.slug,
    })

    commit({
      variables: {
        input: {
          inquireableID: artworkData.internalID,
          inquireableType: "Artwork",
          questions: state.inquiryQuestions.map((q: InquiryQuestionInput) => {
            /**
             * If the user selected the shipping question and has a location, add the location
             * details that are stored in the state.
             */
            if (q.questionID === "shipping_quote" && state.shippingLocation) {
              const details = JSON.stringify({
                city: state.shippingLocation.city,
                coordinates: state.shippingLocation.coordinates,
                country: state.shippingLocation.country,
                postal_code: state.shippingLocation.postalCode,
                state: state.shippingLocation.state,
                state_code: state.shippingLocation.stateCode,
              })
              return { ...q, details }
            } else {
              return q
            }
          }),
          message: state.message?.trim(),
        },
      },
      onError: () => {
        handleErrorTracking()
        setMutationError(true)
      },
      onCompleted: () => {
        setMutationSuccessful(true)
      },
    })
  }

  const handleSettingsPress = () => {
    navigate("my-profile/edit")
    resetAndExit()
  }

  return (
    <FancyModal
      visible={modalIsVisible}
      onBackgroundPressed={() => resetAndExit()}
      testID="inquiry-modal"
    >
      <FancyModalHeader
        leftButtonText="Cancel"
        onLeftButtonPress={() => {
          tracking.trackEvent({
            action_type: Schema.ActionTypes.Tap,
            action_name: Schema.ActionNames.InquiryCancel,
            owner_type: Schema.OwnerEntityTypes.Artwork,
            owner_id: artworkData.internalID,
            owner_slug: artworkData.slug,
          })
          resetAndExit()
        }}
        rightButtonText="Send"
        rightButtonDisabled={state.inquiryQuestions.length === 0}
        onRightButtonPress={sendInquiry}
      >
        Contact Gallery
      </FancyModalHeader>
      {!!mutationError && (
        <ErrorMessageFlex bg="red100" py={1} alignItems="center">
          <Text variant="xs" color="white">
            Sorry, we were unable to send this message. Please try again.
          </Text>
        </ErrorMessageFlex>
      )}
      <ScrollView ref={scrollViewRef}>
        <CollapsibleArtworkDetailsFragmentContainer artwork={artworkData} />
        <Box px={2}>
          <Box my={2}>
            <Text variant="sm">What information are you looking for?</Text>
            {questions?.map((inquiryQuestion) => {
              if (!inquiryQuestion) {
                return false
              }
              const { internalID: id, question } = inquiryQuestion
              return id === InquiryQuestionIDs.Shipping ? (
                <InquiryQuestionOption
                  key={id}
                  id={id}
                  question={question}
                  setShippingModalVisibility={setShippingModalVisibility}
                />
              ) : (
                <InquiryQuestionOption key={id} id={id} question={question} />
              )
            })}
          </Box>
          <Box
            mb={4}
            onLayout={({ nativeEvent }) => {
              setAddMessageYCoordinate(nativeEvent.layout.y)
            }}
          >
            <Input
              multiline
              placeholder="Add a custom note..."
              title="Add message"
              value={state.message ? state.message : ""}
              onChangeText={setMessage}
              onFocus={scrollToInput}
              style={{ justifyContent: "flex-start" }}
              testID="add-message-input"
            />
          </Box>
          <Box flexDirection="row">
            <InfoCircleIcon mr={0.5} style={{ marginTop: 2 }} />
            <Box flex={1}>
              <Text variant="xs" color="black60">
                By clicking send, we will share your profile with {partnerName}. Update your profile
                at any time in{" "}
                <Text variant="xs" onPress={handleSettingsPress}>
                  Settings
                </Text>
                .
              </Text>
            </Box>
          </Box>
        </Box>
      </ScrollView>

      <ShippingModal
        toggleVisibility={() => setShippingModalVisibility(!shippingModalVisibility)}
        modalIsVisible={shippingModalVisibility}
        setLocation={selectShippingLocation}
        location={state.shippingLocation}
      />
    </FancyModal>
  )
}

const artworkFragmentQuery = graphql`
  fragment InquiryModal_artwork on Artwork {
    ...CollapsibleArtworkDetails_artwork
    internalID
    slug
    inquiryQuestions {
      internalID
      question
    }
    partner {
      name
    }
  }
`
