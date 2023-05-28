/* eslint-disable react/jsx-no-useless-fragment */
import { Global } from "@emotion/react";
import { useCheckMobile } from "@hooks/useCheckMobile";
import type { PropsWithChildren } from "react";
import { SwitchCase } from "~/hocs";
import { resetCSS } from "~/styles";
import { TabLayout } from "./TabLayout";

export const RootLayout = ({
  children,
  layoutConfig = {
    case: "tab"
  }
}: PropsWithChildren & Layout.Config) => {
  useCheckMobile();

  return (
    <>
      <Global styles={resetCSS} />
      <SwitchCase<Layout.Case>
        value={layoutConfig.case}
        caseBy={{
          default: <>{children}</>,
          tab: <TabLayout>{children}</TabLayout>
        }}
      />
    </>
  );
};
