import { ArtistInsightsAuctionResults_artist } from "__generated__/ArtistInsightsAuctionResults_artist.graphql"
import Spinner from "lib/Components/Spinner"
import { PAGE_SIZE } from "lib/data/constants"
import { extractNodes } from "lib/utils/extractNodes"
import { Flex, Separator, Text } from "palette"
import React, { useState } from "react"
import { FlatList } from "react-native"
import { createPaginationContainer, graphql, RelayPaginationProp } from "react-relay"
import { useScreenDimensions } from "../../../utils/useScreenDimensions"
import { ArtistInsightsAuctionResultFragmentContainer } from "./ArtistInsightsAuctionResult"

interface Props {
  artist: ArtistInsightsAuctionResults_artist
  relay: RelayPaginationProp
}

const ArtistInsightsAuctionResults: React.FC<Props> = ({ artist, relay }) => {
  const auctionResults = extractNodes(artist.auctionResultsConnection)
  const [loadingMoreData, setLoadingMoreData] = useState(false)

  const loadMoreAuctionResults = () => {
    if (!relay.hasMore() || relay.isLoading()) {
      return
    }
    setLoadingMoreData(true)
    relay.loadMore(PAGE_SIZE, (error) => {
      if (error) {
        console.log(error.message)
      }
      setLoadingMoreData(false)
    })
  }

  return (
    <FlatList
      data={auctionResults}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ArtistInsightsAuctionResultFragmentContainer auctionResult={item} />}
      ListHeaderComponent={() => (
        <Flex px={2}>
          <Text variant="title">Auction results</Text>
          <Text variant="small" color="black60">
            Sorted by most recent sale date
          </Text>
          <Separator mt="2" />
        </Flex>
      )}
      ItemSeparatorComponent={() => <Separator />}
      style={{ width: useScreenDimensions().width, left: -20 }}
      onEndReached={loadMoreAuctionResults}
      ListFooterComponent={loadingMoreData ? <Spinner style={{ marginTop: 20, marginBottom: 20 }} /> : null}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  )
}

export const ArtistInsightsAuctionResultsPaginationContainer = createPaginationContainer(
  ArtistInsightsAuctionResults,
  {
    artist: graphql`
      fragment ArtistInsightsAuctionResults_artist on Artist
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 10 }
        cursor: { type: "String" }
        sort: { type: "AuctionResultSorts", defaultValue: DATE_DESC }
      ) {
        auctionResultsConnection(first: $count, after: $cursor, sort: $sort)
          @connection(key: "artist_auctionResultsConnection") {
          edges {
            node {
              id
              ...ArtistInsightsAuctionResult_auctionResult
            }
          }
        }
      }
    `,
  },
  {
    getConnectionFromProps(props) {
      return props?.artist.auctionResultsConnection
    },
    getVariables(_props, { count, cursor }, fragmentVariables) {
      return {
        ...fragmentVariables,
        cursor,
        count,
      }
    },
    query: graphql`
      query ArtistInsightsAuctionResultsQuery(
        $count: Int!
        $cursor: String
        $sort: AuctionResultSorts
        $artistID: String!
      ) {
        artist(id: $artistID) {
          ...ArtistInsightsAuctionResults_artist @arguments(count: $count, cursor: $cursor, sort: $sort)
        }
      }
    `,
  }
)
