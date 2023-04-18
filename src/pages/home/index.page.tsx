import type { NextPageWithLayout } from "../app.types";
import Amenity from '../../components/Home/Amenity/index.page';

const HomePage: NextPageWithLayout = () => {
  return (
    <div>
      HomePage
      <Amenity />
    </div>
  )
};

export default HomePage;

HomePage.layoutConfig = {
  case: "tab"
};
