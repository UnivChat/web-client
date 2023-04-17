import type { NextPageWithLayout } from "./app.types";

const ChatPage: NextPageWithLayout = () => {
  return <div>ChatPage</div>;
};

export default ChatPage;

ChatPage.layoutConfig = {
  case: "tab"
};
