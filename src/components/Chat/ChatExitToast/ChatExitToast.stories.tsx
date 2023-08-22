import React from "react";
import type { Story, Meta } from "@storybook/react";
import ChatExitToast from "./ChatExitToast";

export default {
  title: "Components/ChatExitToast",
  component: ChatExitToast
} as Meta;

const Template: Story = args => <ChatExitToast {...args} />;

export const chatExitToast = Template.bind({});
