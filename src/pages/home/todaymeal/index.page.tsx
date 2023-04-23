import Link from "next/link";
import { useRouter } from "next/router";
import * as Styled from "./todaymeal.styles";

const Menu = () => {
  return (
    <Styled.Container>
      {/* <Header title="오늘의 식단" hasBackButton /> */}
      <Styled.Day>4월 06일 화요일</Styled.Day>
      <Styled.MenuContainer>
        <Styled.MenuTitle>
          <Styled.Title>부온프란조</Styled.Title>
          <Styled.TitlePlace>학생미래인재관 2층</Styled.TitlePlace>
        </Styled.MenuTitle>
        <Styled.MenuBox>
          <Styled.MenuTime color="rgba(0, 49, 151, 0.11)">
            <Styled.Time>
              <Styled.TimeTitle>아침</Styled.TimeTitle>
              <Styled.TimeSub>8:00~9:00</Styled.TimeSub>
            </Styled.Time>
            <Styled.Time>
              <Styled.TimeTitle>점심</Styled.TimeTitle>
              <Styled.TimeSub>8:00~9:00</Styled.TimeSub>
            </Styled.Time>
            <Styled.Time>
              <Styled.TimeTitle>저녁</Styled.TimeTitle>
              <Styled.TimeSub>8:00~9:00</Styled.TimeSub>
            </Styled.Time>
          </Styled.MenuTime>
          <Styled.MenuListBox>
            <Styled.MenuList>
              <Styled.MenuEach>123</Styled.MenuEach>
              <Styled.MenuEach>1234</Styled.MenuEach>
              <Styled.MenuEach>12345</Styled.MenuEach>
            </Styled.MenuList>
            <Styled.MenuList>
              <Styled.MenuEach>123</Styled.MenuEach>
              <Styled.MenuEach>1234</Styled.MenuEach>
              <Styled.MenuEach>12345</Styled.MenuEach>
            </Styled.MenuList>
            <Styled.MenuList>
              <Styled.MenuEach>123</Styled.MenuEach>
              <Styled.MenuEach>1234</Styled.MenuEach>
              <Styled.MenuEach>12345</Styled.MenuEach>
            </Styled.MenuList>
          </Styled.MenuListBox>
        </Styled.MenuBox>
      </Styled.MenuContainer>

      <Styled.MenuContainer>
        <Styled.MenuTitle>
          <Styled.Title>카페보나</Styled.Title>
          <Styled.TitlePlace>학생미래인재관 1층</Styled.TitlePlace>
        </Styled.MenuTitle>
        <Styled.MenuBox>
          <Styled.MenuTime color="rgba(151, 134, 0, 0.11)">
            <Styled.Time>
              <Styled.TimeTitle>아침</Styled.TimeTitle>
              <Styled.TimeSub>8:00~9:00</Styled.TimeSub>
            </Styled.Time>
            <Styled.Time>
              <Styled.TimeTitle>점심</Styled.TimeTitle>
              <Styled.TimeSub>8:00~9:00</Styled.TimeSub>
            </Styled.Time>
            <Styled.Time>
              <Styled.TimeTitle>저녁</Styled.TimeTitle>
              <Styled.TimeSub>8:00~9:00</Styled.TimeSub>
            </Styled.Time>
          </Styled.MenuTime>
          <Styled.MenuListBox>
            <Styled.MenuList>
              <Styled.MenuEach>123</Styled.MenuEach>
              <Styled.MenuEach>1234</Styled.MenuEach>
              <Styled.MenuEach>12345</Styled.MenuEach>
            </Styled.MenuList>
            <Styled.MenuList>
              <Styled.MenuEach>123</Styled.MenuEach>
              <Styled.MenuEach>1234</Styled.MenuEach>
              <Styled.MenuEach>12345</Styled.MenuEach>
            </Styled.MenuList>
            <Styled.MenuList>
              <Styled.MenuEach>123</Styled.MenuEach>
              <Styled.MenuEach>1234</Styled.MenuEach>
              <Styled.MenuEach>12345</Styled.MenuEach>
            </Styled.MenuList>
          </Styled.MenuListBox>
        </Styled.MenuBox>
      </Styled.MenuContainer>

      <Styled.MenuContainer>
        <Styled.MenuTitle>
          <Styled.Title>카페멘사</Styled.Title>
          <Styled.TitlePlace>김수환관 1층</Styled.TitlePlace>
        </Styled.MenuTitle>
        <Styled.MenuBox>
          <Styled.MenuTime color="rgba(151, 0, 87, 0.11)">
            <Styled.Time>
              <Styled.TimeTitle>아침</Styled.TimeTitle>
              <Styled.TimeSub>8:00~9:00</Styled.TimeSub>
            </Styled.Time>
            <Styled.Time>
              <Styled.TimeTitle>점심</Styled.TimeTitle>
              <Styled.TimeSub>8:00~9:00</Styled.TimeSub>
            </Styled.Time>
            <Styled.Time>
              <Styled.TimeTitle>저녁</Styled.TimeTitle>
              <Styled.TimeSub>8:00~9:00</Styled.TimeSub>
            </Styled.Time>
          </Styled.MenuTime>
          <Styled.MenuListBox>
            <Styled.MenuList>
              <Styled.MenuEach>123</Styled.MenuEach>
              <Styled.MenuEach>1234</Styled.MenuEach>
              <Styled.MenuEach>12345</Styled.MenuEach>
            </Styled.MenuList>
            <Styled.MenuList>
              <Styled.MenuEach>123</Styled.MenuEach>
              <Styled.MenuEach>1234</Styled.MenuEach>
              <Styled.MenuEach>12345</Styled.MenuEach>
            </Styled.MenuList>
            <Styled.MenuList>
              <Styled.MenuEach>123</Styled.MenuEach>
              <Styled.MenuEach>1234</Styled.MenuEach>
              <Styled.MenuEach>12345</Styled.MenuEach>
            </Styled.MenuList>
          </Styled.MenuListBox>
        </Styled.MenuBox>
      </Styled.MenuContainer>
    </Styled.Container>
  );
};

export default Menu;
