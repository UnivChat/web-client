import React from "react";
import { useAppDispatch } from "@client-state/hooks";
import { setModalState } from "@client-state/Home/Facilities/facilitiesSlice";
import * as Styled from "./Facilities.style";
import type { svgType } from "./FacilitiesData";

interface FacilityData {
  name: string;
  location: string;
  time1?: string;
  time2?: string;
  phone: string;
}

interface FacilitiesDetailProps {
  data?: FacilityData[] | null;
  svgName?: string | undefined;
}

const FacilitiesDetail = ({ data, svgName }: FacilitiesDetailProps) => {
  const dispatch = useAppDispatch();

  return (
    <Styled.Bg>
      {data && data.length > 0 ? (
        <Styled.DetailBox>
          <Styled.BuildingContainer>
            <Styled.TopWrapper>
              <Styled.DetailTitle>{data[0]?.name}</Styled.DetailTitle>
              <button
                type="button"
                onClick={() => dispatch(setModalState(false))}
              >
                <Styled.ClosedIcon svgName="close" />
              </button>
            </Styled.TopWrapper>
            <Styled.Divider />
            <Styled.DetailContainer>
              <Styled.DetailWrap>
                <Styled.DetailText>위치</Styled.DetailText>
                <Styled.DetailInfo>{data[0]?.location}</Styled.DetailInfo>
              </Styled.DetailWrap>
              <Styled.DetailWrap>
                <Styled.DetailText>운영시간</Styled.DetailText>
                <div>
                  <Styled.DetailInfo name={data[0]?.name}>
                    {data[0]?.time1}
                  </Styled.DetailInfo>
                  {data[0]?.time2 ? (
                    <Styled.DetailInfo name={data[0]?.name}>
                      {data[0]?.time2}
                    </Styled.DetailInfo>
                  ) : null}
                </div>
              </Styled.DetailWrap>
              <Styled.DetailWrap marginBottom={30}>
                <Styled.DetailText>전화</Styled.DetailText>
                <Styled.DetailInfo>{data[0]?.phone}</Styled.DetailInfo>
              </Styled.DetailWrap>
            </Styled.DetailContainer>
          </Styled.BuildingContainer>
          <Styled.BgSvg name={data[0]?.name} svgName={svgName as svgType} />
        </Styled.DetailBox>
      ) : null}
    </Styled.Bg>
  );
};

export default FacilitiesDetail;