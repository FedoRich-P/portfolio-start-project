import React from 'react';
import styled from 'styled-components';
import { MainText } from '../../../components/text/MainText';
import { myTheme } from '../../../components/theme/Theme.staled';
import { css } from 'styled-components';
import Check from '../../../assets/icons/checkplans.svg';
import Close from '../../../assets/icons/closePlans.svg';

type PlanPropsType = {
  title: string;
  subtitle: string;
  text: string;
  silver?: boolean;
  gold?: boolean;
};

export function Plan(props: PlanPropsType) {
  return (
    <>
      <PlanItem>
        <PlanOverTitle>most popular</PlanOverTitle>
        <PlanTitle>{props.title}</PlanTitle>
        <PlanSubTitle>
          {props.subtitle}
          <span>/hour</span>
        </PlanSubTitle>
        <MainText $mb="21px">${props.text}</MainText>
        <PlanList silver={props.silver} gold={props.gold}>
          <ListItem>UI Design</ListItem>
          <ListItem>web development</ListItem>
          <ListItem>logo design</ListItem>
          <ListItem>seo optimization</ListItem>
          <ListItem>wordPress integration</ListItem>
          <ListItem>5 Websites</ListItem>
          <ListItem>unlimited user</ListItem>
          <ListItem>20 gB bandwith</ListItem>
        </PlanList>
        <Button>ORDER NOW</Button>
      </PlanItem>
    </>
  );
}

const PlanOverTitle = styled.span`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  padding: 3px 20px;
  background-color: transparent;
  color: transparent;
  font-weight: 400;
  font-size: 15px;
  line-height: 160%;
  text-transform: capitalize;
  transition: color 0.4s ease-in-out, background-color 0.4s ease-in-out;
`;

const Button = styled.button`
  padding: 11px 41px;
  font-size: 14px;
  text-transform: capitalize;
  color: ${myTheme.colors.black};
  border-radius: 30px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
  transition: background-color 0.4s ease-in-out;
`;

const PlanItem = styled.li`
  position: relative;
  padding: 54px 31px 25px;
  max-width: 310px;
  width: 100%;

  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
    ${PlanOverTitle} {
      color: ${myTheme.colors.black};
      background-color: ${myTheme.colors.main};
    }
    ${Button} {
      background-color: ${myTheme.colors.main};
    }
  }
`;

const PlanTitle = styled.h3`
  margin-bottom: 19px;
  font-weight: 600;
  font-size: 24px;
  line-height: 124%;
  text-transform: capitalize;
  color: ${myTheme.colors.black};
`;

const PlanSubTitle = styled.h4`
  margin-bottom: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 124%;
  text-transform: capitalize;
  color: ${myTheme.colors.black};

  span {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 160%;
    text-transform: capitalize;
    color: ${myTheme.colors.black};
  }
`;

const ListItem = styled.li`
  padding-left: 40px;
  position: relative;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 160%;
  text-transform: capitalize;
  color: ${myTheme.colors.black};

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  background-image: url(${Check});
  background-repeat: no-repeat;
`;

type PlansListPropsType = {
  silver?: boolean;
  gold?: boolean;
};

const PlanList = styled.ul<PlansListPropsType>`
  margin-bottom: 21px;
  text-align: start;

  ${(props) =>
    props.silver &&
    css<PlansListPropsType>`
       {
        & li:nth-child(n + 3) {
          background-image: url(${Close});
          color: ${myTheme.colors.grey};
        }
      }
    `}

  ${(props) =>
    props.gold &&
    css<PlansListPropsType>`
       {
        & li:nth-child(n + 5) {
          background-image: url(${Close});
          color: ${myTheme.colors.grey};
        }
      }
    `}
`;
