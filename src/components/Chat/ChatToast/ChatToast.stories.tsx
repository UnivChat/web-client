import React from "react";
import type { Story, Meta } from "@storybook/react";
import ChatToast from "./ChatToast";

export default {
  title: "Components/ChatToast",
  component: ChatToast
} as Meta;

const Template: Story = args => <ChatToast {...args} />;

export const chatToast = Template.bind({});
chatToast.args = {};
