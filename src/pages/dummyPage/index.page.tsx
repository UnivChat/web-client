import type { NextPageWithLayout } from "../app.types";
import * as Styled from "./dummyPage.styles";

const DummyPage: NextPageWithLayout = () => {
  return <Styled.Container>DummyPage</Styled.Container>;
};

export default DummyPage;

DummyPage.layoutConfig = {
  case: "tab"
};
