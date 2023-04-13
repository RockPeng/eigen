import { act, fireEvent } from "@testing-library/react-native"
import { ArtistAutosuggestResultsPaginationQuery } from "__generated__/ArtistAutosuggestResultsPaginationQuery.graphql"
import { navigate } from "app/system/navigation/navigate"
import { defaultEnvironment } from "app/system/relay/createEnvironment"
import { mockTrackEvent } from "app/utils/tests/globallyMockedStuff"
import { renderWithHookWrappersTL, renderWithWrappers } from "app/utils/tests/renderWithWrappers"
import { createMockEnvironment } from "relay-test-utils"
import { PriceDatabase } from "./PriceDatabase"

const mockEnvironment = defaultEnvironment as ReturnType<typeof createMockEnvironment>

describe(PriceDatabase, () => {
  it("renders the price database", () => {
    const { getByText } = renderWithHookWrappersTL(<PriceDatabase />, mockEnvironment)

    expect(getByText("Artsy Price")).toBeTruthy()
    expect(getByText("Database")).toBeTruthy()

    expect(
      getByText("Unlimited access to millions of auction results and art market data — for free.")
    ).toBeTruthy()
  })

  it("renders the price database benefits", () => {
    const { getByText } = renderWithHookWrappersTL(<PriceDatabase />, mockEnvironment)

    expect(getByText("Get in-depth art market data")).toBeTruthy()
    expect(
      getByText(
        "Browse millions of current and historical results from leading auction houses across the globe."
      )
    ).toBeTruthy()

    expect(getByText("Research and validate prices")).toBeTruthy()
    expect(
      getByText(
        "Access the data you need to make the right decisions for your collection, whether you’re researching, buying, or selling."
      )
    ).toBeTruthy()

    expect(getByText("Search for free")).toBeTruthy()
    expect(
      getByText(
        "The Artsy Price Database is for every collector—with no search limits, no subscriptions, and no obligations. A more open art world starts here."
      )
    ).toBeTruthy()
  })

  describe("Search", () => {
    it("searches for artist's auction results without filters", async () => {
      const { getByText, getByTestId, getByPlaceholderText } = renderWithWrappers(<PriceDatabase />)

      fireEvent.changeText(getByPlaceholderText("Search by artist name"), "andy-warhol")

      act(() =>
        mockEnvironment.mock.resolveMostRecentOperation({
          errors: [],
          data: mockArtistSearchResult,
        })
      )

      // Select artist

      fireEvent.press(getByText("Andy Warhol"))

      // Select medium

      fireEvent.press(getByText("Medium"))

      fireEvent.press(getByText("Painting"))
      fireEvent.press(getByText("Work on paper"))

      fireEvent.press(getByTestId("artwork-filter-header-back-button"))

      // Select sizes

      fireEvent.press(getByText("Size"))

      fireEvent.press(getByText("Small (under 16in)"))
      fireEvent.press(getByText("Medium (16 – 40in)"))
      fireEvent.press(getByText("Large (over 40in)"))

      fireEvent.press(getByTestId("artwork-filter-header-back-button"))

      fireEvent.press(getByText("Search"))

      expect(navigate).toHaveBeenCalledWith(
        "/artist/andy-warhol/auction-results?categories=Painting&categories=Work%20on%20Paper&sizes=&scroll_to_market_signals=true"
      )

      expect(mockTrackEvent).toHaveBeenCalledWith({
        action: "searchedPriceDatabase",
        context_module: "priceDatabaseLanding",
        context_owner_type: "priceDatabase",
        destination_owner_slug: "andy-warhol",
        destination_owner_type: "artistAuctionResults",
        destination_path:
          "/artist/andy-warhol/auction-results?categories=Painting&categories=Work%20on%20Paper&sizes=&scroll_to_market_signals=true",
        filters: '{"categories":["Painting","Work on Paper"],"sizes":[null]}',
        query: "categories=Painting&categories=Work%20on%20Paper&sizes=",
      })
    })

    it("searches for artist's auction results with filters", async () => {
      const { getByText, getByPlaceholderText, getByTestId } = renderWithWrappers(<PriceDatabase />)

      fireEvent.changeText(getByPlaceholderText("Search by artist name"), "andy-warhol")

      act(() =>
        mockEnvironment.mock.resolveMostRecentOperation({
          errors: [],
          data: mockArtistSearchResult,
        })
      )

      // Select artist

      fireEvent.press(getByText("Andy Warhol"))

      // Select medium

      fireEvent.press(getByText("Medium"))

      fireEvent.press(getByText("Painting"))
      fireEvent.press(getByText("Work on paper"))

      fireEvent.press(getByTestId("artwork-filter-header-back-button"))

      // Select sizes

      fireEvent.press(getByText("Size"))

      fireEvent.press(getByText("Small (under 16in)"))
      fireEvent.press(getByText("Medium (16 – 40in)"))
      fireEvent.press(getByText("Large (over 40in)"))

      fireEvent.press(getByTestId("artwork-filter-header-back-button"))

      fireEvent.press(getByText("Search"))

      expect(navigate).toHaveBeenCalledWith(
        "/artist/andy-warhol/auction-results?categories=Painting&categories=Work%20on%20Paper&sizes=&scroll_to_market_signals=true"
      )

      expect(mockTrackEvent).toHaveBeenCalledWith({
        action: "searchedPriceDatabase",
        context_module: "priceDatabaseLanding",
        context_owner_type: "priceDatabase",
        destination_owner_slug: "andy-warhol",
        destination_owner_type: "artistAuctionResults",
        destination_path:
          "/artist/andy-warhol/auction-results?categories=Painting&categories=Work%20on%20Paper&sizes=&scroll_to_market_signals=true",
        filters: '{"categories":["Painting","Work on Paper"],"sizes":[null]}',
        query: "categories=Painting&categories=Work%20on%20Paper&sizes=",
      })
    })

    describe("when no artist is selected", () => {
      it("disables the search button", async () => {
        const { getByText } = renderWithWrappers(<PriceDatabase />)

        fireEvent.press(getByText("Search"))

        expect(navigate).not.toHaveBeenCalled()
      })
    })
  })
})

const mockArtistSearchResult: ArtistAutosuggestResultsPaginationQuery["rawResponse"] = {
  results: {
    edges: [
      {
        node: {
          imageUrl: "https://d32dm0rphc51dk.cloudfront.net/X9vVvod7QY73ZwLDSZzljw/square.jpg",
          href: "/artist/andy-warhol",
          displayLabel: "Andy Warhol",
          __typename: "Artist",
          internalID: "4dd1584de0091e000100207c",
          formattedNationalityAndBirthday: "British, b. 1974",
          slug: "andy-warhol",
          statuses: { artworks: true, auctionLots: true },
          __isNode: "Artist",
          id: "QXJ0aXN0OjRkZDE1ODRkZTAwOTFlMDAwMTAwMjA3Yw==",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjU=",
      },
    ],
    pageInfo: { endCursor: "YXJyYXljb25uZWN0aW9uOjMx", hasNextPage: true },
  },
}