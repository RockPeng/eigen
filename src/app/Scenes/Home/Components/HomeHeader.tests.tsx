import { __globalStoreTestUtils__ } from "app/store/GlobalStore"
import { renderWithWrappers } from "app/utils/tests/renderWithWrappers"
import { HomeHeader } from "./HomeHeader"


describe("HomeHeader", () => {
  const TestRenderer: React.FC = () => {
    return <HomeHeader />
  }

  describe("Activity", () => {
    it("should NOT render unread indicator when there are no unread notifications", async () => {
      __globalStoreTestUtils__?.injectState({
        bottomTabs: {
          sessionState: { unreadCounts: { unreadActivityPanelNotifications: 0 } },
        },
      })

      const { queryByLabelText } = renderWithWrappers(<TestRenderer />)

      const indicator = queryByLabelText("Unread Activities Indicator")
      expect(indicator).toBeNull()
    })

    it("should render unread indicator when there are unread notifications", async () => {
      __globalStoreTestUtils__?.injectState({
        bottomTabs: {
          sessionState: { unreadCounts: { unreadActivityPanelNotifications: 1 } },
        },
      })

      const { getByLabelText } = renderWithWrappers(<TestRenderer />)

      const indicator = getByLabelText("Unread Activities Indicator")
      expect(indicator).toBeTruthy()
    })
  })
})
