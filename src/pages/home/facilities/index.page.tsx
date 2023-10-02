import {
  setMapState,
  setModalState
} from "@client-state/Home/Facilities/facilitiesSlice";
import { useAppDispatch, useAppSelector } from "@client-state/hooks";
import type { FacilitiesParam } from "@server-state/home/api";
import { useFacilities } from "@server-state/home/facilities/facilities.queires";
import { useState } from "react";
import { Header } from "~/components/Common/UI/Header/Header";
import * as Styled from "./Facilities.style";
import type { svgType } from "./FacilitiesData";
import {
  BFiristboxData,
  BSecondboxData,
  LboxData,
  NiFirstboxData,
  NiSecondboxData,
  TboxData,
  kimFirstboxData,
  kimSecondboxData,
  kimThirdboxData
} from "./FacilitiesData";
import FacilitiesDetail from "./FacilitiesDetail";
import FacilitiesMap from "./FacilitiesMap";

const Facilities = () => {
  const dispatch = useAppDispatch();
  const { modalState, mapState } = useAppSelector(state => state.facilities);

  const [selectedSvgName, setSelectedSvgName] = useState("");
  const [selectedBuilding, setSelectedBuilding] = useState("");
  const [selectedName, setSelectedName] = useState("");

  const { data } = useFacilities(selectedBuilding, selectedName);

  const handleIconClick = ({
    building,
    name,
    svgName
  }: FacilitiesParam & { svgName: svgType }) => {
    setSelectedBuilding(building);
    setSelectedName(name);
    setSelectedSvgName(svgName);
    dispatch(setModalState(true));
  };
  return (
    <div>
      <Header.Back title="홈" />
      <Styled.Container>
        <div
          onClick={() => dispatch(setMapState(true))}
          onKeyPress={e => {
            if (e.key === "Enter" || e.key === " ") {
              dispatch(setMapState(true));
            }
          }}
          role="button"
          tabIndex={0}
        >
          <Styled.MapIcon svgName="mapIcon" />
        </div>
        {modalState ? (
          <FacilitiesDetail data={data} svgName={selectedSvgName} />
        ) : null}

        {mapState ? <FacilitiesMap /> : null}
        {/* 김수환관 */}
        <Styled.Kimbox>
          <Styled.BuildingContainer>
            <Styled.BuildingBox>
              <Styled.BuildingIcon svgName="K" />
              <Styled.KimTitle>김수환관</Styled.KimTitle>
            </Styled.BuildingBox>
            <Styled.Divider />
            <div>
              <Styled.Line>
                {kimFirstboxData.map(item => (
                  <Styled.IconBox
                    key={item.name}
                    onClick={() =>
                      handleIconClick({
                        building: item.building,
                        name: item.name,
                        svgName: item.svgName
                      })
                    }
                  >
                    <Styled.IconContainer>
                      <Styled.CafeIcon
                        svgName={item.svgName as "cafe" | "mart"}
                      />
                    </Styled.IconContainer>
                    <Styled.IconTitle>{item.name}</Styled.IconTitle>
                  </Styled.IconBox>
                ))}
              </Styled.Line>
              <Styled.Line>
                {kimSecondboxData.map(item => (
                  <Styled.IconBox
                    key={item.name}
                    onClick={() =>
                      handleIconClick({
                        building: item.building,
                        name: item.name,
                        svgName: item.svgName
                      })
                    }
                  >
                    <Styled.IconContainer>
                      <Styled.CafeIcon
                        svgName={
                          item.svgName as "laundry" | "bank" | "burger" | "gym"
                        }
                      />
                    </Styled.IconContainer>
                    <Styled.IconTitle>{item.name}</Styled.IconTitle>
                  </Styled.IconBox>
                ))}
              </Styled.Line>
              <Styled.Line>
                {kimThirdboxData.map(item => (
                  <Styled.IconBox
                    key={item.name}
                    onClick={() =>
                      handleIconClick({
                        building: item.building,
                        name: item.name,
                        svgName: item.svgName
                      })
                    }
                  >
                    <Styled.IconContainer>
                      <Styled.CafeIcon
                        svgName={item.svgName as "copy" | "media" | "lounge"}
                      />
                    </Styled.IconContainer>
                    <Styled.IconTitle>{item.name}</Styled.IconTitle>
                  </Styled.IconBox>
                ))}
              </Styled.Line>
            </div>
          </Styled.BuildingContainer>
        </Styled.Kimbox>

        {/* 니콜스관 */}
        <Styled.Nbox>
          <Styled.BuildingContainer>
            <Styled.BuildingBox>
              <Styled.BuildingIcon svgName="N" />
              <Styled.KimTitle>니콜스관</Styled.KimTitle>
            </Styled.BuildingBox>
            <Styled.Divider />
            <div>
              <Styled.Line>
                {NiFirstboxData.map(item => (
                  <Styled.IconBox
                    key={item.name}
                    onClick={() =>
                      handleIconClick({
                        building: item.building,
                        name: item.name,
                        svgName: item.svgName
                      })
                    }
                  >
                    <Styled.IconContainer>
                      <Styled.CafeIcon
                        svgName={
                          item.svgName as "cafe" | "bank" | "rest" | "delivery"
                        }
                      />
                    </Styled.IconContainer>
                    <Styled.IconTitle>{item.name}</Styled.IconTitle>
                  </Styled.IconBox>
                ))}
              </Styled.Line>
              <Styled.Line>
                {NiSecondboxData.map(item => (
                  <Styled.IconBox
                    key={item.name}
                    onClick={() =>
                      handleIconClick({
                        building: item.building,
                        name: item.name,
                        svgName: item.svgName
                      })
                    }
                  >
                    <Styled.IconContainer>
                      <Styled.CafeIcon
                        svgName={item.svgName as "team" | "certification"}
                      />
                    </Styled.IconContainer>
                    <Styled.IconTitle>{item.name}</Styled.IconTitle>
                  </Styled.IconBox>
                ))}
              </Styled.Line>
            </div>
          </Styled.BuildingContainer>
        </Styled.Nbox>

        {/* 학생미래인재관 */}
        <Styled.Nbox>
          <Styled.BuildingContainer>
            <Styled.BuildingBox>
              <Styled.BuildingIcon svgName="B" />
              <Styled.KimTitle>학생미래인재관</Styled.KimTitle>
            </Styled.BuildingBox>
            <Styled.Divider />
            <div>
              <Styled.Line>
                {BFiristboxData.map(item => (
                  <Styled.IconBox
                    key={item.name}
                    onClick={() =>
                      handleIconClick({
                        building: item.building,
                        name: item.name,
                        svgName: item.svgName
                      })
                    }
                  >
                    <Styled.IconContainer>
                      <Styled.CafeIcon
                        svgName={item.svgName as "cafe" | "mart" | "restaurant"}
                      />
                    </Styled.IconContainer>
                    <Styled.IconTitle>{item.name}</Styled.IconTitle>
                  </Styled.IconBox>
                ))}
              </Styled.Line>
              <Styled.Line>
                {BSecondboxData.map(item => (
                  <Styled.IconBox
                    key={item.name}
                    onClick={() =>
                      handleIconClick({
                        building: item.building,
                        name: item.name,
                        svgName: item.svgName
                      })
                    }
                  >
                    <Styled.IconContainer>
                      <Styled.CafeIcon svgName={item.svgName as "lounge"} />
                    </Styled.IconContainer>
                    <Styled.IconTitle>{item.name}</Styled.IconTitle>
                  </Styled.IconBox>
                ))}
                <Styled.IconBox style={{ visibility: "hidden" }}>
                  <Styled.IconContainer>
                    <Styled.CafeIcon svgName="team" />
                  </Styled.IconContainer>
                  <Styled.IconTitle />
                </Styled.IconBox>
                <Styled.IconBox style={{ visibility: "hidden" }}>
                  <Styled.IconContainer>
                    <Styled.CafeIcon svgName="team" />
                  </Styled.IconContainer>
                  <Styled.IconTitle />
                </Styled.IconBox>
              </Styled.Line>
            </div>
          </Styled.BuildingContainer>
        </Styled.Nbox>

        {/* 미카엘관 */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Styled.Mbox>
            <Styled.BuildingContainer>
              <Styled.BuildingBox>
                <Styled.BuildingIcon svgName="T" />
                <Styled.KimTitle>미카엘관</Styled.KimTitle>
              </Styled.BuildingBox>
              <Styled.Mdivider />
              <div>
                <Styled.MLine>
                  {TboxData.map(item => (
                    <Styled.IconBox
                      key={item.name}
                      onClick={() =>
                        handleIconClick({
                          building: item.building,
                          name: item.name,
                          svgName: item.svgName
                        })
                      }
                    >
                      <Styled.IconContainer>
                        <Styled.CafeIcon
                          svgName={item.svgName as "bank" | "team"}
                        />
                      </Styled.IconContainer>
                      <Styled.IconTitle>{item.name}</Styled.IconTitle>
                    </Styled.IconBox>
                  ))}
                </Styled.MLine>
              </div>
            </Styled.BuildingContainer>
          </Styled.Mbox>
          {/* 베리타스관 */}
          <Styled.Mbox>
            <Styled.BuildingContainer>
              <Styled.BuildingBox>
                <Styled.BuildingIcon svgName="L" />
                <Styled.KimTitle>베리타스관</Styled.KimTitle>
              </Styled.BuildingBox>
              <Styled.Mdivider />
              <div>
                <Styled.MLine>
                  {LboxData.map(item => (
                    <Styled.IconBox
                      key={item.name}
                      onClick={() =>
                        handleIconClick({
                          building: item.building,
                          name: item.name,
                          svgName: item.svgName
                        })
                      }
                    >
                      <Styled.IconContainer>
                        <Styled.CafeIcon
                          svgName={item.svgName as "bank" | "team"}
                        />
                      </Styled.IconContainer>
                      <Styled.IconTitle>{item.name}</Styled.IconTitle>
                    </Styled.IconBox>
                  ))}
                </Styled.MLine>
              </div>
            </Styled.BuildingContainer>
          </Styled.Mbox>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* 다솔관 */}
          <Styled.Mbox>
            <Styled.BuildingContainer>
              <Styled.BuildingBox>
                <Styled.BuildingIcon svgName="D" />
                <Styled.KimTitle>다솔관</Styled.KimTitle>
              </Styled.BuildingBox>
              <Styled.Mdivider />
              <div>
                <Styled.MLine>
                  <Styled.IconBox
                    onClick={() =>
                      handleIconClick({
                        building: "D",
                        name: "복사실",
                        svgName: "copy"
                      })
                    }
                  >
                    <Styled.IconContainer>
                      <Styled.CafeIcon svgName="copy" />
                    </Styled.IconContainer>
                    <Styled.IconTitle>복사실</Styled.IconTitle>
                  </Styled.IconBox>
                </Styled.MLine>
              </div>
            </Styled.BuildingContainer>
          </Styled.Mbox>
          {/* 안드레아관 */}
          <Styled.Mbox>
            <Styled.BuildingContainer>
              <Styled.BuildingBox>
                <Styled.BuildingIcon svgName="A" />
                <Styled.KimTitle>안드레아관</Styled.KimTitle>
              </Styled.BuildingBox>
              <Styled.Mdivider />
              <div>
                <Styled.MLine>
                  <Styled.IconBox
                    onClick={() =>
                      handleIconClick({
                        building: "A",
                        name: "커뮤니티라운지",
                        svgName: "lounge"
                      })
                    }
                  >
                    <Styled.IconContainer>
                      <Styled.CafeIcon svgName="lounge" />
                    </Styled.IconContainer>
                    <Styled.IconTitle>커뮤니티라운지</Styled.IconTitle>
                  </Styled.IconBox>
                </Styled.MLine>
              </div>
            </Styled.BuildingContainer>
          </Styled.Mbox>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* 밤비노관 */}
          <Styled.Mbox>
            <Styled.BuildingContainer>
              <Styled.BuildingBox>
                <Styled.BuildingIcon svgName="BA" />
                <Styled.KimTitle>밤비노관</Styled.KimTitle>
              </Styled.BuildingBox>
              <Styled.Mdivider />
              <div>
                <Styled.MLine>
                  <Styled.IconBox
                    onClick={() =>
                      handleIconClick({
                        building: "BA",
                        name: "여자휴게실",
                        svgName: "rest"
                      })
                    }
                  >
                    <Styled.IconContainer>
                      <Styled.CafeIcon svgName="rest" />
                    </Styled.IconContainer>
                    <Styled.IconTitle>여자휴게실</Styled.IconTitle>
                  </Styled.IconBox>
                </Styled.MLine>
              </div>
            </Styled.BuildingContainer>
          </Styled.Mbox>
          {/* 비르투스관 */}
          <Styled.Mbox>
            <Styled.BuildingContainer>
              <Styled.BuildingBox>
                <Styled.BuildingIcon svgName="V" />
                <Styled.KimTitle>비르투스관</Styled.KimTitle>
              </Styled.BuildingBox>
              <Styled.Mdivider />
              <div>
                <Styled.MLine>
                  <Styled.IconBox
                    onClick={() =>
                      handleIconClick({
                        building: "V",
                        name: "보건실",
                        svgName: "hospital"
                      })
                    }
                  >
                    <Styled.IconContainer>
                      <Styled.CafeIcon svgName="hospital" />
                    </Styled.IconContainer>
                    <Styled.IconTitle>보건실</Styled.IconTitle>
                  </Styled.IconBox>
                </Styled.MLine>
              </div>
            </Styled.BuildingContainer>
          </Styled.Mbox>
        </div>
      </Styled.Container>
    </div>
  );
};

export default Facilities;
