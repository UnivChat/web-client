import styled from "@emotion/styled";
import { Svg } from "~/components/Common";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  background-color: #f8f9fb;
`;

export const Amenities = styled.div`
  display: flex;
  width: 85vw;
  height: 9.75vh;
  margin-top: 6vh;
  justify-content: space-between;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 13px #00000029;
  border-radius: 18px; // 한 번만 사용하도록 수정
  opacity: 1;
  align-items: center;
`;

export const IconBack = styled.div`
  --icon-back-color: rgba(227, 227, 227, 0.45);
  background-color: var(--icon-back-color);
  width: 5.5vh;
  height: 5.5vh;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5vh;
`;

export const AmenIcon = styled(Svg)`
  width: 4.5vh;
  height: 4.5vh;
  fill: black;
  @media (max-width: 768px) {
    width: 4.5vh;
    height: 4.5vh;
  }
`;

export const StyledLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
`;

export const Amenity = styled.span`
  font-family: "NanumGothic", sans-serif;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #767676;
  position: relative;
  width: calc(84vw / 4);

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
