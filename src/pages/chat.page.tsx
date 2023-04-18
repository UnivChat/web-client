import type { NextPageWithLayout } from "./app.types";
import { Chat } from "./chat/index.page";

const ChatPage: NextPageWithLayout = () => {
  return <Chat />;
};

export default ChatPage;

ChatPage.layoutConfig = {
  case: "tab"
};
