import React from "react";
import type { Meta } from "@storybook/react";
import { Home } from "./index.page";

export default {
  title: "pages/home"
} as Meta;

export const Default = () => <Home />;
