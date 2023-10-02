import React from "react";
import * as Styled from "./Amenity.style";
import AmenityItem from "./AmenityItem";

function Amenity() {
  return (
    <Styled.Container>
      <Styled.Amenities>
        <AmenityItem svgName="food" label="오늘의 식단" />
        <AmenityItem svgName="library" label="도서관자리" />
        <AmenityItem svgName="contact" label="연락망" />
        <AmenityItem svgName="facility" label="편의시설" />
      </Styled.Amenities>
    </Styled.Container>
  );
}

export default Amenity;
