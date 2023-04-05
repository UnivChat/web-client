import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { TabLayout } from "./TabLayout";

const MetaInfo: ComponentMeta<typeof TabLayout> = {
  component: TabLayout
};

export default MetaInfo;

const Template: ComponentStory<typeof TabLayout> = () => {
  return <TabLayout />;
};

export const _TabLayout = Template.bind({});

_TabLayout.args = {};
