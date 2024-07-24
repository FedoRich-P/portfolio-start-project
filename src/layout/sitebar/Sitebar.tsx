import React from 'react';
import { SitebarCard } from './SitebarCard';
import styled from 'styled-components';
import { About } from './About';
import { FlexWrapper } from '../../components/flex/FlexWrapper';
import { Progress } from '../../components/progress/Progress';
import { SectionSubTitle } from '../../components/titles/SectionSubTitle';
import { MainText } from '../../components/text/MainText';
import PsevdoIcon from '../../assets/icons/exemple.svg';
import { MainBtn } from '../../components/buttons/MainBtn';
import ButtonIcon from '../../assets/icons/button.svg';

const AboutList = {
  Age: '4',
  Resience: 'BD',
  Freelance: 'Available',
  Address: 'Dhaka, Bangladesh',
};

export function Sitebar() {
  return (
    <>
      <Aside>
        <SitebarCard></SitebarCard>
        <SitebarWrapper>
          {Object.entries(AboutList).map((el, i) => {
            return <About name={el[0]} value={el[1]} key={i}></About>;
          })}
        </SitebarWrapper>
        <SectionSubTitle>Languages </SectionSubTitle>
        <SitebarWrapper>
          <Progress title="Bangla" value="100%"></Progress>
          <Progress title="English" value="80% "></Progress>
          <Progress title="Spanish" value="60% "></Progress>
        </SitebarWrapper>
        <SectionSubTitle>Skills </SectionSubTitle>
        <SitebarWrapper>
          <Progress title="Html" value="90%"></Progress>
          <Progress title="CSS" value="85%"></Progress>
          <Progress title="Js" value="80%"></Progress>
          <Progress title="PHP" value="75%"></Progress>
          <Progress title="WordPress" value="85%"></Progress>
        </SitebarWrapper>
        <SectionSubTitle>Extra Skills</SectionSubTitle>
        <SitebarWrapper>
          <MainText as={ExtraSkillsTitle}>Bootstrap, Materialize</MainText>
          <MainText as={ExtraSkillsTitle}>Stylus, Sass, Less</MainText>
          <MainText as={ExtraSkillsTitle}>Gulp, Webpack, Grunt</MainText>
          <MainText as={ExtraSkillsTitle}>GIT Knowledge</MainText>
        </SitebarWrapper>
        <MainBtn as={SitebarBtn}>Download cv</MainBtn>
      </Aside>
    </>
  );
}

const SitebarWrapper = styled.ul`
  position: relative;
  margin-bottom: 25px;
  padding-bottom: 25px;
  width: 100%;

  li {
    &:not(:last-child) {
      margin-bottom: 9px;
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: #ffb400;
    opacity: 0.7;
    border-radius: 5px;
  }
`;

const Aside = styled.aside`
  padding: 50px 46px 25px 40px;
  max-width: 305px;
`;

const ExtraSkillsTitle = styled.li`
  position: relative;
  padding-left: 30px;

  &::before {
    content: '';
    position: absolute;
    width: 17px;
    height: 17px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-image: url(${PsevdoIcon});
    background-size: contain;
    background-position: top left;
    background-repeat: no-repeat;
  }
`;

const SitebarBtn = styled.button`
  position: relative;
  width: 100%;
  &::after {
    content: '';
    position: absolute;
    right: 39px;
    width: 14px;
    height: 16px;
    background-image: url(${ButtonIcon});
    background-size: cover;
    background-position: top left;
  }
`;
