import React from "react";
import { Global } from "@emotion/react";
import { globalStyles } from "./homePage.style";
import Amenity from "../../components/Home/Amenity/index.page";
import * as Styled from "./homePage.style";

function Home() {
  return (
    <>
      <Global styles={globalStyles} />
      <Styled.Title>CAT CHAT</Styled.Title>
      <Amenity />
    </>
  );
}

export default Home;
