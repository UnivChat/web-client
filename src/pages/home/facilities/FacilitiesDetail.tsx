import React from "react";
import { useAppDispatch } from "@client-state/hooks";
import { setModalState } from "@client-state/Home/Facilities/facilitiesSlice";
import * as Styled from "./Facilities.style";

interface FacilityData {
  name: string;
  location: string;
  time: string;
  phone: string;
}

interface FacilitiesDetailProps {
  data?: FacilityData[] | null;
}

const FacilitiesDetail = ({ data }: FacilitiesDetailProps) => {
  const dispatch = useAppDispatch();

  return (
    <Styled.Bg>
      {data && data.length > 0 ? (
        <Styled.DetailBox>
          <Styled.BuildingContainer>
            <Styled.TopWrapper>
              <Styled.DetailTitle>{data[0]?.name}</Styled.DetailTitle>
              <Styled.Closed onClick={() => dispatch(setModalState(false))}>
                X
              </Styled.Closed>
            </Styled.TopWrapper>
            <Styled.Divider />
            <Styled.DetailContainer>
              <Styled.DetailWrap>
                <Styled.DetailText>위치</Styled.DetailText>
                <Styled.DetailInfo>{data[0]?.location}</Styled.DetailInfo>
              </Styled.DetailWrap>
              <Styled.DetailWrap>
                <Styled.DetailText>운영시간</Styled.DetailText>
                <Styled.DetailInfo>{data[0]?.time}</Styled.DetailInfo>
              </Styled.DetailWrap>
              <Styled.DetailWrap>
                <Styled.DetailText>전화</Styled.DetailText>
                <Styled.DetailInfo>{data[0]?.phone}</Styled.DetailInfo>
              </Styled.DetailWrap>
            </Styled.DetailContainer>
          </Styled.BuildingContainer>
        </Styled.DetailBox>
      ) : null}
    </Styled.Bg>
  );
};

export default FacilitiesDetail;
