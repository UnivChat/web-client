import Link from "next/link";
import { useRouter } from "next/router";
import { Svg } from "../../UI";
import { bottomTabList } from "./BottomTab.constants";
import * as Styled from "./BottomTab.styles";

export const BottomTab = () => {
  const { pathname } = useRouter();

  return (
    <Styled.Container>
      {bottomTabList.map(tabItem => {
        const isActive = pathname.startsWith(tabItem.path);

        return (
          <Link href={tabItem.path} key={tabItem.key}>
            <Svg svgName={isActive ? tabItem.activeSvgName : tabItem.svgName} />
          </Link>
        );
      })}
    </Styled.Container>
  );
};
