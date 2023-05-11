import * as Styled from "./todaymeal.styles";
import type { MenuProps } from "./todaymeal.types";

export const MenuContainer = ({ ...containerProps }: MenuProps) => {
  return (
    <Styled.MenuContainer>
      <Styled.MenuTitle>
        <Styled.Title>{containerProps.title}</Styled.Title>
        <Styled.TitlePlace>{containerProps.titlePlace}</Styled.TitlePlace>
      </Styled.MenuTitle>
      <Styled.MenuBox>
        <Styled.MenuTime color={containerProps.color}>
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
          {containerProps.mItems.map((mList, index) => (
            <Styled.MenuList key={index}>
              {mList.map((mItem, index) => (
                <Styled.MenuEach key={index}>{mItem}</Styled.MenuEach>
              ))}
            </Styled.MenuList>
          ))}
        </Styled.MenuListBox>
      </Styled.MenuBox>
    </Styled.MenuContainer>
  );
};
