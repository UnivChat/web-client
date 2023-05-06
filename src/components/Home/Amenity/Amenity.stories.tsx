import React from "react";
import type { Story, Meta } from "@storybook/react";
import Amenity from "./Amenity";

export default {
  title: "Components/Amenity",
  component: Amenity
} as Meta;

const Template: Story = args => <Amenity {...args} />;

export const Default = Template.bind({});
Default.args = {};
