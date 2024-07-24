import React from 'react';
import { Container } from '../../../components/container/Container';
import { SectionTitle } from '../../../components/titles/SectionTitle';
import { MainText } from '../../../components/text/MainText';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/flex/FlexWrapper';
import { ServisCard } from './ServisCard';
import { myTheme } from '../../../components/theme/Theme.staled';
import { SectionSubTitle } from '../../../components/titles/SectionSubTitle';
import { Link } from '../../../components/link/Link';

export function Services() {
  return (
    <ServicesSection>
      <Container>
        <SectionTitle $mb="25px">My Services</SectionTitle>
        <MainText as={ServicesText} $mb="50px">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </MainText>
        <FlexWrapper as={ServicesList} $gap="20px">
          <ServisCard
            iconId="web"
            title="web development"
            text="blog, e-commerce"
          />
          <ServisCard
            iconId="ui-ux"
            title="uI/uX design"
            text="Mobile app, website design"
          />
          <ServisCard
            iconId="microphone"
            title="sound design"
            text="Voice Over, Beat Making"
          />
          <ServisCard
            iconId="game"
            title="game design"
            text="Character Design, Props & Objects"
          />
          <ServisCard
            iconId="photographer"
            title="photography"
            text="portrait, product photography"
          />
          <ServisCardItem>
            <SectionSubTitle>advertising</SectionSubTitle>
            <MainText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              nulla diam in ac dictum a urna viverra morbi.
            </MainText>
            <Link>ORDER NOW</Link>
          </ServisCardItem>
        </FlexWrapper>
      </Container>
    </ServicesSection>
  );
}

const ServicesSection = styled.section`
  margin-bottom: 70px;
`;

const ServicesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
const ServicesText = styled.p`
  display: inline-block;
  margin-bottom: 50px;
  max-width: 438px;
`;

const ServisCardItem = styled.li`
  padding: 31px 25px 25px;
  /* padding-top: 31px;
  padding-bottom: 42px; */
  max-width: 310px;
  width: 100%;
  min-height: 225px;
  text-align: center;
  border: 1px solid ${myTheme.colors.main};
`;
