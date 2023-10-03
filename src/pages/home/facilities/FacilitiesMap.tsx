import React from "react";
import Image from "next/image";
import { useAppDispatch } from "@client-state/hooks";
import { setMapState } from "@client-state/Home/Facilities/facilitiesSlice";
import * as Styled from "./Facilities.style";

const FacilitiesMap = () => {
  const dispatch = useAppDispatch();
  return (
    <Styled.Bg>
    <Styled.MapBox>
      <Styled.MapClosed onClick={() => dispatch(setMapState(false))}>
        X
      </Styled.MapClosed>
      <Styled.ImageWrapper>
        <Image src="/image/map.png" alt="map" layout="fill" objectFit="contain" />
      </Styled.ImageWrapper>
    </Styled.MapBox>
  </Styled.Bg>
  );
};

export default FacilitiesMap;
