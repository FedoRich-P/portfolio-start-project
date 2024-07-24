import React from 'react';
import { SectionTitle } from '../../../components/titles/SectionTitle';
import { MainText } from '../../../components/text/MainText';
import { FlexWrapper } from '../../../components/flex/FlexWrapper';
import { Plan } from './Plan';
import styled from 'styled-components';
import { Container } from '../../../components/container/Container';

export function Plans() {
  return (
    <PlansSection>
      <Container>
        <SectionTitle $mb="25px">Price plans</SectionTitle>
        <MainText $maxwidth="438px" $align="center" $mb="50px">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </MainText>
        <PlansList>
          <Plan
            title="silver"
            subtitle="$0.00"
            text="For most businesses that want to optimize web queries"
            silver={true}
          />
          <Plan
            title="gold"
            subtitle="$50.00"
            text="For most businesses that want to optimize web queries "
            gold={true}
          />
          <Plan
            title="dimond"
            subtitle="$80.00"
            text="For most businesses that want to optimize web queries"
          />
        </PlansList>
      </Container>
    </PlansSection>
  );
}

const PlansSection = styled.section`
  p {
    display: inline-block;
  }
`;
const PlansList = styled.ul`
  display: flex;
  justify-content: space-between;
  column-gap: 21px;
  text-align: center;
`;
