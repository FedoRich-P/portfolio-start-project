import styled from 'styled-components';
import { myTheme } from '../theme/Theme.staled';

type MainTextPropsType = {
  position?: string;
  $maxwidth?: string;
  $mb?: string;
  $align?: string;
};

export const MainText = styled.p<MainTextPropsType>`
  display: inline-block;
  margin-bottom: ${(props) => props.$mb || '5px'};
  position: ${(props) => props.position};
  max-width: ${(props) => props.$maxwidth};
  text-align: ${(props) => props.$align};
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  color: ${myTheme.colors.grey};
  text-transform: capitalize;
`;
