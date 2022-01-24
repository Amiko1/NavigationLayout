import styled from "styled-components";
import { color } from "../../utils/Colors";

export const NavBar = styled.nav`
  background-color: ${color.backgroundLight};
  padding-left: 1rem;
  max-height: 100px;
`;

export const NavBarList = styled.ul`
  text-decoration: none;
  display: flex;
  aling-items: center;
  gap: 4rem;
`;

export const List = styled.li`
  text-decoration: none;
  padding 2rem 0;
  cursor:pointer;
  letter-spacing: 1px;
`;

export const ListTxt = styled.p`
  text-decoration: none;
  color: ${color.primary};
`;
