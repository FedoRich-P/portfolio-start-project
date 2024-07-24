import styled from 'styled-components';
import { myTheme } from '../theme/Theme.staled';
import LinkIcon from '../../assets/icons/linkicon.svg';
// let a = (
//   <svg
//     width="20"
//     height="20"
//     viewBox="0 0 20 20"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <g clip-path="url(#clip0_10_1294)">
//       <path d="M10.1433 10.0002L7.78583 7.64352L8.96416 6.46436L12.5 10.0002L8.96416 13.536L7.78583 12.3569L10.1433 10.0002Z" />
//     </g>
//     <defs>
//       <clipPath id="clip0_10_1294">
//         <rect width="20" height="20" fill="white" />
//       </clipPath>
//     </defs>
//   </svg>
// );

export const Link = styled.a`
  position: relative;
  padding-right: 17px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: ${myTheme.colors.main};
  text-transform: uppercase;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-image: url(${LinkIcon});
    background-size: cover;
    background-position: center;
  }
`;
