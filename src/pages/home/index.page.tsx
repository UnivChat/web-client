import { useFetchUserInfo } from "@server-state/auth/hooks/auth.queries";
import type { NextPageWithLayout } from "../app.types";
import { Home } from "./Home";

const HomePage: NextPageWithLayout = () => {
  const { data } = useFetchUserInfo();

  return (
    <div>
      <div>
        HomePage
        {JSON.stringify(data)}
      </div>
      <Home />
    </div>
  );
};

export default HomePage;
