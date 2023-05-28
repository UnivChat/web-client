import type { PropsWithChildren } from "react";
import { BottomTab } from "~/components/Common/layout";

export const TabLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      {children}
      <BottomTab />
    </div>
  );
};
