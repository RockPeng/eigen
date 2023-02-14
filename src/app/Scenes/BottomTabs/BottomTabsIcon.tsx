import { useColor } from "@artsy/palette-mobile"
import Svg, { Path } from "react-native-svg"
import { BottomTabType } from "./BottomTabType"

export const ICON_WIDTH = 56
export const ICON_HEIGHT = 52

// need to bring the icons up a smidge because of the way they were exported
const yOffset = 2

export const BottomTabsIcon: React.FC<{ tab: BottomTabType; state: "active" | "inactive" }> = ({
  tab,
  state,
}) => {
  const color = useColor()

  return (
    <Svg
      width={ICON_WIDTH}
      height={ICON_HEIGHT}
      viewBox={`0 ${yOffset} ${ICON_WIDTH} ${ICON_HEIGHT + yOffset}`}
      fill={state === "active" ? color("appBackground") : color("appForeground")}
    >
      {ICONS[tab][state]}
    </Svg>
  )
}

const ICONS: Record<BottomTabType, { active: JSX.Element; inactive: JSX.Element }> = {
  home: {
    active: (
      <>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.0268 17.7002C27.4488 17.3968 28.0171 17.3968 28.4391 17.7002L38.5094 24.9272C38.9294 25.1439 39.2329 25.5519 39.2329 26.0492V39.1416C39.2329 39.8109 38.6909 40.3535 38.0224 40.3535H30.2909C30.0147 40.3535 29.7909 40.1296 29.7909 39.8535L29.7908 32.7382C29.7908 32.4621 29.5669 32.2382 29.2908 32.2382H26.175C25.8989 32.2382 25.675 32.4621 25.675 32.7382L25.6751 39.8535C25.6751 40.1296 25.4512 40.3535 25.1751 40.3535H17.4434C16.7749 40.3535 16.2329 39.8109 16.2329 39.1416V26.0492C16.2329 25.5518 16.5355 25.1734 16.9233 24.8988L27.0268 17.7002ZM17.8066 26.2688V38.7781L24.1013 38.7781V31.8747C24.1013 31.2054 24.6433 30.6628 25.3119 30.6628H30.154C30.8225 30.6628 31.3645 31.2054 31.3645 31.8747V38.7781L37.6592 38.7781V26.2688L27.7329 19.1321L17.8066 26.2688Z"
          fill="black"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.0268 17.7002C27.4488 17.3968 28.0171 17.3968 28.4391 17.7002L38.5094 24.9272C38.9294 25.1439 39.2329 25.5519 39.2329 26.0492V39.1416C39.2329 39.8109 38.6909 40.3535 38.0224 40.3535H30.2909C30.0147 40.3535 29.7909 40.1296 29.7909 39.8535L29.7908 32.7382C29.7908 32.4621 29.5669 32.2382 29.2908 32.2382H26.175C25.8989 32.2382 25.675 32.4621 25.675 32.7382L25.6751 39.8535C25.6751 40.1296 25.4512 40.3535 25.1751 40.3535H17.4434C16.7749 40.3535 16.2329 39.8109 16.2329 39.1416V26.0492C16.2329 25.5518 16.5355 25.1734 16.9233 24.8988L27.0268 17.7002Z"
          fill="black"
        />
      </>
    ),
    inactive: (
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.0268 18.1401C27.4488 17.8367 28.0171 17.8368 28.4391 18.1401L38.5094 25.3672C38.9294 25.5839 39.2329 25.9918 39.2329 26.4891V39.5816C39.2329 40.2509 38.6909 40.7934 38.0224 40.7934H30.2909C30.0147 40.7934 29.7909 40.5696 29.7909 40.2934L29.7908 33.1782C29.7908 32.902 29.5669 32.6782 29.2908 32.6782H26.175C25.8989 32.6782 25.675 32.902 25.675 33.1782L25.6751 40.2934C25.6751 40.5696 25.4512 40.7934 25.1751 40.7934H17.4434C16.7749 40.7934 16.2329 40.2509 16.2329 39.5816V26.4891C16.2329 25.9918 16.5355 25.6133 16.9233 25.3388L27.0268 18.1401ZM17.8066 26.7088V39.218L24.1013 39.218V32.3146C24.1013 31.6453 24.6433 31.1028 25.3119 31.1028H30.154C30.8225 31.1028 31.3645 31.6453 31.3645 32.3146V39.218L37.6592 39.218V26.7087L27.7329 19.5721L17.8066 26.7088Z"
      />
    ),
  },
  search: {
    active: (
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9111 26.4607C15.9111 20.9172 20.4551 16.4434 26.0354 16.4434C31.6158 16.4434 36.1597 20.9172 36.1597 26.4607C36.1597 28.773 35.367 30.9025 34.0389 32.5963L38.4939 36.9991C39.2444 37.7408 39.2444 38.9483 38.4939 39.69C37.7499 40.4252 36.5486 40.4252 35.8046 39.69L31.1612 35.101C29.6568 35.9764 27.9039 36.4781 26.0354 36.4781C20.4551 36.4781 15.9111 32.0042 15.9111 26.4607ZM26.0354 20.2371C22.5397 20.2371 19.7261 23.0346 19.7261 26.4607C19.7261 29.8868 22.5397 32.6843 26.0354 32.6843C29.5311 32.6843 32.3447 29.8869 32.3447 26.4607C32.3447 23.0346 29.5311 20.2371 26.0354 20.2371Z"
        fill="black"
      />
    ),
    inactive: (
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.2967 34.2689C29.8099 35.3077 27.9948 35.918 26.0354 35.918C20.9962 35.918 16.9111 31.8808 16.9111 26.9007C16.9111 21.9205 20.9962 17.8833 26.0354 17.8833C31.0746 17.8833 35.1597 21.9205 35.1597 26.9007C35.1597 29.2971 34.2138 31.4752 32.6708 33.0902L37.7909 38.1503C38.1453 38.5006 38.1453 39.0684 37.7909 39.4187C37.4365 39.7689 36.8619 39.7689 36.5075 39.4187L31.2967 34.2689ZM33.3447 26.9007C33.3447 30.8902 30.0722 34.1243 26.0354 34.1243C21.9986 34.1243 18.7261 30.8902 18.7261 26.9007C18.7261 22.9112 21.9986 19.677 26.0354 19.677C30.0722 19.677 33.3447 22.9112 33.3447 26.9007Z"
      />
    ),
  },
  inbox: {
    active: (
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.8464 35.2559C33.1054 34.8845 33.5245 34.6638 33.9712 34.6638H38.4678C39.6114 34.6638 40.5384 33.7175 40.5384 32.5502V19.5597C40.5384 18.3923 39.6114 17.446 38.4678 17.446H17.9979C16.8543 17.446 15.9272 18.3923 15.9272 19.5597V32.5502C15.9272 33.7175 16.8543 34.6638 17.9979 34.6638H22.4937C22.9404 34.6638 23.3595 34.8845 23.6184 35.2559L26.8265 39.8577C27.5145 40.8445 28.9504 40.8445 29.6384 39.8577L32.8464 35.2559Z"
        fill="black"
      />
    ),
    inactive: (
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.3464 35.587C32.6054 35.2155 33.0245 34.9949 33.4712 34.9949H37.9678C39.1114 34.9949 40.0384 34.0486 40.0384 32.8813V19.8907C40.0384 18.7234 39.1114 17.7771 37.9678 17.7771H17.4979C16.3543 17.7771 15.4272 18.7234 15.4272 19.8907V32.8813C15.4272 34.0486 16.3543 34.9949 17.4979 34.9949H21.9937C22.4404 34.9949 22.8595 35.2155 23.1184 35.587L26.3265 40.1887C27.0145 41.1756 28.4504 41.1756 29.1384 40.1887L32.3464 35.587ZM37.9678 19.5384H17.4979C17.3073 19.5384 17.1528 19.6962 17.1528 19.8907V32.8813C17.1528 33.0758 17.3073 33.2335 17.4979 33.2335H22.8839C23.3301 33.2335 23.7488 33.4538 24.0079 33.8247L24.8252 34.9949H24.8231L27.7324 39.1675L30.6423 34.9951L31.4535 33.8276C31.7124 33.4551 32.132 33.2337 32.5795 33.2337L37.9678 33.2335C38.1584 33.2335 38.3129 33.0758 38.3129 32.8813V19.8907C38.3129 19.6962 38.1584 19.5384 37.9678 19.5384Z"
      />
    ),
  },
  sell: {
    active: (
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.8559 29.4484C40.1995 29.1049 40.376 28.6285 40.3393 28.144L39.6905 19.5714C39.6282 18.748 38.9724 18.0944 38.1487 18.0348L29.6124 17.4174C29.1297 17.3825 28.6557 17.5591 28.3135 17.9013L16.2211 29.9937C15.5702 30.6446 15.5702 31.7 16.2211 32.3509L25.4087 41.5385C26.0596 42.1894 27.1149 42.1894 27.7658 41.5385L39.8559 29.4484ZM30.1794 25.3985C30.1794 24.1926 31.157 23.215 32.3629 23.215C33.5689 23.215 34.5464 24.1926 34.5464 25.3985C34.5464 26.6044 33.5689 27.582 32.3629 27.582C31.157 27.582 30.1794 26.6044 30.1794 25.3985Z"
        fill="black"
      />
    ),
    inactive: (
      <>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.9418 27.7577C28.8812 26.6972 28.8812 24.9777 29.9418 23.9171C31.0023 22.8566 32.7218 22.8566 33.7824 23.9171C34.8429 24.9777 34.8429 26.6972 33.7824 27.7577C32.7218 28.8183 31.0023 28.8183 29.9418 27.7577ZM31.1203 26.5792C30.7107 26.1695 30.7107 25.5054 31.1203 25.0957C31.53 24.6861 32.1942 24.6861 32.6038 25.0957C33.0135 25.5054 33.0135 26.1695 32.6038 26.5792C32.1942 26.9888 31.53 26.9888 31.1203 26.5792Z"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.8393 28.584C39.876 29.0685 39.6995 29.5448 39.3559 29.8884L27.2658 41.9784C26.6149 42.6293 25.5596 42.6293 24.9087 41.9784L15.7211 32.7908C15.0702 32.1399 15.0702 31.0846 15.7211 30.4337L27.8135 18.3412C28.1557 17.999 28.6297 17.8225 29.1124 17.8574L37.6487 18.4748C38.4724 18.5343 39.1282 19.188 39.1905 20.0114L39.8393 28.584ZM38.1773 28.7098L26.0873 40.7998L16.8997 31.6122L28.9921 19.5198L37.5285 20.1372L38.1773 28.7098Z"
        />
      </>
    ),
  },
  profile: {
    active: (
      <>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.2329 17.3746C25.8913 17.3746 23.7806 18.7861 22.886 20.9501C21.9915 23.1141 22.4895 25.6039 24.1476 27.2573C25.8058 28.9107 28.297 29.4016 30.4584 28.5009C32.6199 27.6002 34.0253 25.4855 34.0186 23.1439C34.0095 19.9549 31.4218 17.3746 28.2329 17.3746Z"
          fill="black"
        />
        <Path
          d="M34.0021 30.9467C36.278 30.9467 38.123 32.7917 38.123 35.0676V40.0126H18.3428V35.0676C18.3428 32.7917 20.1878 30.9467 22.4637 30.9467H34.0021Z"
          fill="black"
        />
      </>
    ),
    inactive: (
      <>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.7329 17.8146C25.3913 17.8146 23.2806 19.226 22.386 21.39C21.4915 23.554 21.9895 26.0438 23.6476 27.6972C25.3058 29.3506 27.797 29.8416 29.9584 28.9408C32.1199 28.0401 33.5253 25.9254 33.5186 23.5838C33.5095 20.3949 30.9218 17.8146 27.7329 17.8146ZM27.7329 19.4629C29.4078 19.4629 30.9174 20.4728 31.5568 22.0208C32.1963 23.5689 31.8392 25.3497 30.6526 26.5317C29.4659 27.7136 27.6836 28.0635 26.1381 27.418C24.5926 26.7724 23.5888 25.2587 23.5955 23.5838C23.6046 21.3052 25.4543 19.4629 27.7329 19.4629Z"
        />
        <Path d="M33.5021 31.3866C35.778 31.3866 37.623 33.2316 37.623 35.5075V40.4526H35.9746V35.5075C35.9746 34.142 34.8677 33.035 33.5021 33.035H21.9637C20.5981 33.035 19.4911 34.142 19.4911 35.5075V40.4526H17.8428V35.5075C17.8428 33.2316 19.6878 31.3866 21.9637 31.3866H33.5021Z" />
      </>
    ),
  },
}
