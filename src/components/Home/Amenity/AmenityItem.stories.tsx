import React from "react";
import type { Story, Meta } from "@storybook/react";
import AmenityItem from "./AmenityItem";
import type { AmenityItemProps } from "./Amenity.type";

export default {
  title: "Components/AmenityItem",
  component: AmenityItem,
} as Meta;

const Template: Story<AmenityItemProps> = (args) => <AmenityItem {...args} />;

export const Food = Template.bind({});
Food.args = {
  svgName: "food",
  label: "오늘의 식단",
};

export const Library = Template.bind({});
Library.args = {
  svgName: "library",
  label: "도서관자리",
  href: "http://203.229.203.240/8080/Domian5_jythh.asp",
};

export const Contact = Template.bind({});
Contact.args = {
  svgName: "contact",
  label: "연락망",
};

export const Facility = Template.bind({});
Facility.args = {
  svgName: "facility",
  label: "편의시설",
};