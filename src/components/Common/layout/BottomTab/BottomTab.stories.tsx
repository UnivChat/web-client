import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { BottomTab } from "./BottomTab";

const MetaInfo: ComponentMeta<typeof BottomTab> = {
  component: BottomTab
};

export default MetaInfo;

const Template: ComponentStory<typeof BottomTab> = () => {
  return <BottomTab />;
};

export const _HomeActive = Template.bind({});

_HomeActive.args = {};

_HomeActive.parameters = {
  nextRouter: {
    pathname: "/home"
  }
};

export const ChatActive = Template.bind({});

ChatActive.parameters = {
  nextRouter: {
    pathname: "/chat"
  }
};

export const ConfigActive = Template.bind({});

ConfigActive.parameters = {
  nextRouter: {
    pathname: "/config"
  }
};
