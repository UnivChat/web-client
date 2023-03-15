import type { ComponentStory } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Common/UI/Button",
  component: Button
};

export const Default: ComponentStory<typeof Button> = args => (
  <Button {...args}>
    <span>하이</span>
  </Button>
);

Default.args = {
  $width: "200px",
  $height: "100px",
  onClick: () => console.log("hi"),
  title: "123"
};
