import styled from "@emotion/styled";
import { Svg } from "~/components/Common";
import { pxToRem } from "~/utils";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Amenities = styled.div`
  display: flex;
  width: ${pxToRem(306)};
  height: ${pxToRem(78)};
  justify-content: space-between;
  align-items: center;
`;

export const IconBack = styled.div`
  background-color: rgba(227, 227, 227, 0.45);
  width: ${pxToRem(46)};
  height: ${pxToRem(46)};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${pxToRem(5)};
`;

export const AmenIcon = styled(Svg)`
  width: ${pxToRem(33)};
  height: ${pxToRem(33)};
  fill: black;
`;

export const StyledLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Amenity = styled.span`
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #767676;
  position: relative;
  width: calc(${pxToRem(630)} / 4);

  @media (max-width: 768px) {
    font-size: 1vh;; 
  }

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
