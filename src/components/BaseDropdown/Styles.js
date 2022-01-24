import styled from "styled-components";
import { color } from "../../utils/Colors";

let BodyMixin = `
  min-width: 200px;
  padding: 1.2rem;
 
  background: ${color.primary};
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const DropdownTxt = styled.h1`
  font-size: 1rem;
  color: ${color.primary};
  opacity: 0.8;
`;

export const DropdownBody = styled.div`
  ${BodyMixin};
  visibility: ${(props) => props.visible};
`;

export const SecondaryBody = styled.div`
  ${BodyMixin};
  visibility: ${(props) => props.visible};
  left: calc(100% + 1.2rem);
  top: 0px;
`;

export const DropdownBodyList = styled.h1`
  font-size: 0.7rem;
  color: ${color.textLight};
  position: relative;
`;
