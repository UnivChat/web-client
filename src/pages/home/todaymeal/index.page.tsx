import * as Styled from "./TodayMeal.styles";
import { MenuContainer } from "./TodayMeal";

const Menu = () => {
  return (
    <Styled.Container>
      {/* <Header title="오늘의 식단" hasBackButton /> */}
      <Styled.Day>4월 06일 화요일</Styled.Day>
      <MenuContainer
        title="부온프란조"
        titlePlace="학생미래인재관 2층"
        color="rgba(0, 49, 151, 0.11)"
        mItems={[
          ["123", "1234", "12345"],
          ["123", "1234", "12345"],
          ["123", "1234", "12345"]
        ]}
      />
      <MenuContainer
        title="카페보나"
        titlePlace="학생미래인재관 1층"
        color="rgba(151, 134, 0, 0.11)"
        mItems={[
          ["234", "2345", "23456"],
          ["234", "2345", "23456"],
          ["234", "2345", "23456"]
        ]}
      />
      <MenuContainer
        title="카페멘사"
        titlePlace="김수환관 1층"
        color="rgba(151, 0, 87, 0.11)"
        mItems={[
          ["345", "3456", "34567"],
          ["345", "3456", "34567"],
          ["345", "3456", "34567"]
        ]}
      />
    </Styled.Container>
  );
};

export default Menu;
