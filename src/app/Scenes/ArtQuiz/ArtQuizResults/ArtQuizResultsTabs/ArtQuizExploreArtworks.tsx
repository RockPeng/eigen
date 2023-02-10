import { useSpace } from "@artsy/palette-mobile"
import { ArtQuizExploreArtworksQuery } from "__generated__/ArtQuizExploreArtworksQuery.graphql"
import { ArtQuizResultsTabs_me$data } from "__generated__/ArtQuizResultsTabs_me.graphql"
import GenericGrid from "app/Components/ArtworkGrids/GenericGrid"
import { StickyTabPageScrollView } from "app/Components/StickyTabPage/StickyTabPageScrollView"
import { extractNodes } from "app/utils/extractNodes"
import { uniqBy } from "lodash"
import { useMemo } from "react"
import { graphql, useLazyLoadQuery } from "react-relay"
import { useScreenDimensions } from "shared/hooks"

export const ArtQuizExploreArtworks = ({
  savedArtworks,
}: {
  savedArtworks: ArtQuizResultsTabs_me$data["quiz"]["savedArtworks"]
}) => {
  const space = useSpace()
  const dimensions = useScreenDimensions()

  const limit = useMemo(() => {
    if (savedArtworks.length <= 1) return 100
    if (savedArtworks.length <= 3) return 8
    return 4
  }, [savedArtworks.length])

  const queryResult = useLazyLoadQuery<ArtQuizExploreArtworksQuery>(artQuizExploreArtworksQuery, {
    limit,
  })

  const artworks = uniqBy(
    queryResult.me?.quiz.savedArtworks.flatMap((artwork) => {
      if (!artwork.layer) return []
      return extractNodes(artwork.layer.artworksConnection)
    }),
    "internalID"
  )

  console.log("Check :: ", artworks)

  return (
    <StickyTabPageScrollView
      contentContainerStyle={{
        paddingVertical: space(2),
      }}
    >
      <GenericGrid
        artworks={artworks}
        width={dimensions.width - space(2)}
        hidePartner
        artistNamesTextStyle={{ weight: "regular" }}
        saleInfoTextStyle={{ weight: "medium", color: "black100" }}
      />
    </StickyTabPageScrollView>
  )
}

const artQuizExploreArtworksQuery = graphql`
  query ArtQuizExploreArtworksQuery($limit: Int) {
    me {
      quiz {
        savedArtworks {
          layer(id: "main") {
            artworksConnection(first: $limit) {
              edges {
                node {
                  internalID
                  ...GenericGrid_artworks
                }
              }
            }
          }
        }
      }
    }
  }
`
