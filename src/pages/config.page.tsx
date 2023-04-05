import type { NextPageWithLayout } from "./app.types";

const ConfigPage: NextPageWithLayout = () => {
  return <div>ConfigPage</div>;
};

export default ConfigPage;

ConfigPage.layoutConfig = {
  case: "tab"
};
