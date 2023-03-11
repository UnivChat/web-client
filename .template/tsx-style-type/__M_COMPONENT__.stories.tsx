import type { ComponentStory } from "@storybook/react";
import { __M_COMPONENT__ } from "./__M_COMPONENT__";

export default {
  title: "Path to component",
  component: __M_COMPONENT__
};

export const Default: ComponentStory<typeof __M_COMPONENT__> = args => (
  <__M_COMPONENT__ {...args} />
);
Default.args = {
  placeholder: "hi",
  label: "hi"
};
