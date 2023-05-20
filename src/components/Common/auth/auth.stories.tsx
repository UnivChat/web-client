import React from "react";
import type { Meta, Story } from "@storybook/react";
import { Header, WarningMessage, SubmitButton } from "./Auth";
import { Body } from "./Auth.styles";
import { BodyTop, BodyTopsDots } from "./Auth.BodyTop";
import { CustomInput, CustomText } from "./Auth.Input";

export default {
  title: "Auth"
} as Meta;

// Body
const BodyTemplate: Story = () => <Body />;
export const BodyComponent = BodyTemplate.bind({});

const HeaderTemplate: Story<{ text: string }> = args => <Header {...args} />;
export const HeaderComponent = HeaderTemplate.bind({});
HeaderComponent.args = {
  text: "회원가입"
};

// 점
const BodyTopsDotsTemplate: Story = () => <BodyTopsDots />;
export const BodyTopsDotsComponent = BodyTopsDotsTemplate.bind({});

// form 윗부분
const BodyTopTemplate: Story = () => <BodyTop currentStep={1} />;
export const BodyTopComponent = BodyTopTemplate.bind({});

// input title
const CustomTextTemplate: Story = () => <CustomText>아아디</CustomText>;
export const CustomTextComponent = CustomTextTemplate.bind({});

// input
const CustomInputTemplate: Story = () => (
  <CustomInput type="text" name="example" required />
);
export const CustomInputComponent = CustomInputTemplate.bind({});

// 경고 메세지
const WarningMessageTemplate: Story = () => (
  <WarningMessage>중복된 아이디입니다</WarningMessage>
);
export const WarningMessageComponent = WarningMessageTemplate.bind({});

// 다음 버튼
const SubmitButtonTemplate: Story = () => <SubmitButton>다음</SubmitButton>;
export const SubmitButtonComponent = SubmitButtonTemplate.bind({});
