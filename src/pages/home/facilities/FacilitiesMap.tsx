import React, { useState } from "react";
import Image from "next/image";
import { useAppDispatch } from "@client-state/hooks";
import { setMapState } from "@client-state/Home/Facilities/facilitiesSlice";
import * as Styled from "./Facilities.style";

const FacilitiesMap = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Styled.Bg>
      <Styled.MapBox>
        <button type="button" onClick={() => dispatch(setMapState(false))}>
          <Styled.MapClosed svgName="close" />
        </button>
        <Styled.ImageWrapper>
          {isLoading && <Styled.Spinner />}
          <Image
            src="/image/map.png"
            alt="map"
            layout="fill"
            objectFit="contain"
            loading="lazy"
            onLoad={() => setIsLoading(false)}
          />
        </Styled.ImageWrapper>
      </Styled.MapBox>
    </Styled.Bg>
  );
};

export default FacilitiesMap;
