import styled from "styled-components";
import { color } from "../../utils/Colors";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentTxt = styled.p`
  background-color: ${color.backgroundLightPrimary};
  padding: 3rem;
  letter-spacing: 8px;
  line-height: 40px;
`;
