import { aggregationForFilter, Aggregations, FilterParamName } from "lib/Components/ArtworkFilter/ArtworkFilterHelpers"
import { ArtworkFiltersState, ArtworkFiltersStoreProvider } from "lib/Components/ArtworkFilter/ArtworkFilterStore"
import { renderWithWrappers } from "lib/tests/renderWithWrappers"
import React from "react"
import { act, ReactTestRenderer } from "react-test-renderer"
import { ColorsOptionsScreen } from "../ColorsOptions"
import { ColorsSwatch } from "../ColorsSwatch"
import { getEssentialProps } from "./helper"

describe("Colors options screen", () => {
  const mockAggregations: Aggregations = [
    {
      slice: "COLOR",
      counts: [
        {
          name: "Black and white",
          count: 2956,
          value: "black-and-white",
        },
        {
          name: "Dark orange",
          count: 513,
          value: "darkorange",
        },
        {
          name: "Light blue",
          count: 277,
          value: "lightblue",
        },
        {
          name: "Yellow",
          count: 149,
          value: "yellow",
        },
        {
          name: "Violet",
          count: 145,
          value: "violet",
        },
      ],
    },
  ]

  const initialState: ArtworkFiltersState = {
    selectedFilters: [],
    appliedFilters: [],
    previouslyAppliedFilters: [],
    applyFilters: false,
    aggregations: mockAggregations,
    filterType: "artwork",
    counts: {
      total: null,
      followedArtists: null,
    },
  }

  const selectedColorOptions = (componentTree: ReactTestRenderer) => {
    const colorSwatches = componentTree.root.findAllByType(ColorsSwatch)
    const selectedOption = colorSwatches.filter((item) => item.props.selected)
    return selectedOption
  }

  const MockColorScreen = ({ initialData = initialState }: { initialData?: ArtworkFiltersState }) => {
    return (
      <ArtworkFiltersStoreProvider initialData={initialData}>
        <ColorsOptionsScreen {...getEssentialProps()} />
      </ArtworkFiltersStoreProvider>
    )
  }

  const aggregation = aggregationForFilter(FilterParamName.color, mockAggregations)

  it("shows the correct number of color options", () => {
    const tree = renderWithWrappers(
      <MockColorScreen aggregations={mockAggregations} {...getEssentialProps()} initialData={initialState} />
    )

    expect(tree.root.findAllByType(ColorsSwatch)).toHaveLength(aggregation!.counts.length)
  })

  describe("selecting a color filter", () => {
    it("displays a color filter option when selected", () => {
      const injectedState: ArtworkFiltersState = {
        selectedFilters: [
          {
            paramName: FilterParamName.colors,
            paramValue: [aggregation!.counts[0].value],
            displayText: aggregation!.counts[0].name,
          },
        ],
        appliedFilters: [],
        previouslyAppliedFilters: [],
        applyFilters: false,
        aggregations: mockAggregations,
        filterType: "artwork",
        counts: {
          total: null,
          followedArtists: null,
        },
      }

      const component = renderWithWrappers(<MockColorScreen {...getEssentialProps()} initialData={injectedState} />)

      const selectedOption = selectedColorOptions(component)[0]
      expect(selectedOption.props.name).toMatch(aggregation!.counts[0].name)
    })

    it("allows multiple color options to be selected when several are tapped", () => {
      const injectedState: ArtworkFiltersState = {
        selectedFilters: [
          {
            paramName: FilterParamName.colors,
            paramValue: aggregation!.counts[0].value,
            displayText: aggregation!.counts[0].name,
          },
        ],
        appliedFilters: [],
        previouslyAppliedFilters: [],
        applyFilters: false,
        aggregations: mockAggregations,
        filterType: "artwork",
        counts: {
          total: null,
          followedArtists: null,
        },
      }

      const tree = renderWithWrappers(<MockColorScreen {...getEssentialProps()} initialData={injectedState} />)

      const firstOptionInstance = tree.root.findAllByType(ColorsSwatch)[0]
      const secondOptionInstance = tree.root.findAllByType(ColorsSwatch)[1]
      const thirdOptionInstance = tree.root.findAllByType(ColorsSwatch)[2]

      act(() => firstOptionInstance.props.onPress())
      act(() => secondOptionInstance.props.onPress())
      act(() => thirdOptionInstance.props.onPress())

      const selectedOptions = selectedColorOptions(tree)
      expect(selectedOptions).toHaveLength(3)
      expect(selectedOptions.map((option) => option.props.name)).toEqual([
        aggregation!.counts[0].name,
        aggregation!.counts[3].name,
        aggregation!.counts[4].name,
      ])
    })

    it("deselects color option on second tap", () => {
      const injectedState: ArtworkFiltersState = {
        selectedFilters: [],
        appliedFilters: [],
        previouslyAppliedFilters: [],
        applyFilters: false,
        aggregations: mockAggregations,
        filterType: "artwork",
        counts: {
          total: null,
          followedArtists: null,
        },
      }

      const tree = renderWithWrappers(<MockColorScreen {...getEssentialProps()} initialData={injectedState} />)

      const secondOptionInstance = tree.root.findAllByType(ColorsSwatch)[1]

      act(() => secondOptionInstance.props.onPress())

      const selectedOptions = selectedColorOptions(tree)
      expect(selectedOptions).toHaveLength(1)
      expect(selectedOptions[0].props.name).toMatch(aggregation!.counts[3].name)

      act(() => secondOptionInstance.props.onPress())

      const afterSecondTapOptions = selectedColorOptions(tree)
      expect(afterSecondTapOptions).toHaveLength(0)
    })
  })
})
