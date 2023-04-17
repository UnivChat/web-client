import type { NextPageWithLayout } from "../app.types";

const HomePage: NextPageWithLayout = () => {
  return <div>HomePage</div>;
};

export default HomePage;

HomePage.layoutConfig = {
  case: "tab"
};
