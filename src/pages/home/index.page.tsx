import { useFetchUserInfo } from "@server-state/auth/hooks/auth.queries";
import type { NextPageWithLayout } from "../app.types";

const HomePage: NextPageWithLayout = () => {
  const { data } = useFetchUserInfo();

  return (
    <div>
      HomePage
      {JSON.stringify(data)}
    </div>
  );
};

export default HomePage;
