import styled from "@emotion/styled";
import { Svg } from "~/components/Common";
import { pxToRem } from "~/utils";

function flex(flexDirection = "", justifyContent = "", alignItems = "") {
  return `
    display: flex;
    ${flexDirection ? `flex-direction: ${flexDirection};` : ""}
    ${justifyContent ? `justify-content: ${justifyContent};` : ""}
    ${alignItems ? `align-items: ${alignItems};` : ""}
  `;
}

export const Container = styled.div`
  ${flex("", "center", "")}
`;

export const Amenities = styled.div`
  ${flex("", "space-between", "center")}
  width: ${pxToRem(306)};
  height: ${pxToRem(78)};
  box-shadow: 0px ${pxToRem(5)} ${pxToRem(13)} #00000029;
  border-radius: ${pxToRem(14)};
`;

export const IconBack = styled.div`
  ${flex("", "center", "center")}
  background-color: rgba(227, 227, 227, 0.45);
  width: ${pxToRem(46)};
  height: ${pxToRem(46)};
  border-radius: 50%;
  margin-bottom: ${pxToRem(5)};
`;

export const AmenIcon = styled(Svg)`
  width: ${pxToRem(33)};
  height: ${pxToRem(33)};
  fill: black;
`;

export const StyledLink = styled.a`
  ${flex("column", "", "center")}
`;

export const Amenity = styled.span`
  ${flex("column", "center", "center")}
  color: #767676;
  position: relative;
  width: calc(${pxToRem(630)} / 4);

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    right: 0;
    top: 100%;
    height: 100%;
    border-right: 1px solid rgba(118, 118, 118, 0.45);
    transform: translateY(-100%);
  }
`;
