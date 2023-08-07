import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { Story, Meta } from "@storybook/react";
import Notice from "./Notice";

export default {
  title: "Components/Notice",
  component: Notice
} as Meta;

const queryClient = new QueryClient();

const Template: Story = args => (
  <QueryClientProvider client={queryClient}>
    <Notice {...args} />
  </QueryClientProvider>
);

export const notice = Template.bind({});
notice.args = {};
