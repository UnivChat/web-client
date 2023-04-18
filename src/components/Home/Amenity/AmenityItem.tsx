import React from "react";
import * as Styled from "./Amenity.style";
import type { AmenityItemProps } from "./Amenity.type";

const AmenityItem = ({ svgName, label, href }: AmenityItemProps) => {
  const content = (
    <>
      <Styled.IconBack>
        <Styled.AmenIcon svgName={svgName} />
      </Styled.IconBack>
      <span>{label} </span>
    </>
  );

  return (
    <Styled.Amenity>
      {href ? (
        <Styled.StyledLink href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </Styled.StyledLink>
      ) : (
        content
      )}
    </Styled.Amenity>
  );
};

export default AmenityItem;
