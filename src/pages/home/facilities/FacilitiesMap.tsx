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
        <Image src="/image/map.png" alt="map" width={346} height={448} />
      </Styled.MapBox>
    </Styled.Bg>
  );
};

export default FacilitiesMap;
