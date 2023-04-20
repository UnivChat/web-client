import Link from "next/link";
import { useRouter } from "next/router";
import { CafeList, MenuList } from "./Menu.constants";
import * as Styled from "./Menu.styles";


export const Menu = () => {
  const { pathname } = useRouter();
  
  return (
    <Styled.MenuBox>
      Menu
    </Styled.MenuBox>
  )
};