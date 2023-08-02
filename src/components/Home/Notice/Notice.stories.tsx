import React from "react";
import type { Story, Meta } from "@storybook/react";
import Notice from "./Notice";

export default {
  title: "Components/Notice",
  component: Notice
} as Meta;

const Template: Story = args => <Notice {...args} />;

export const Default = Template.bind({});
Default.args = {};
