import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../components/container/Container';
import { SectionTitle } from '../../../components/titles/SectionTitle';
import { MainText } from '../../../components/text/MainText';
import { RecomItem } from './RecomItem';

import firstPhoto from '../../../assets/images/first-user.jpg';
import secondPhoto from '../../../assets/images/second-user.jpg';
import thirdhoto from '../../../assets/images/third-user.jpg';
import { FlexWrapper } from '../../../components/flex/FlexWrapper';
import { myTheme } from '../../../components/theme/Theme.staled';

export function Recom() {
  return (
    <RecomSection>
      <Container>
        <SectionTitle $mb="25px">recommendations</SectionTitle>
        <MainText $maxwidth="438px" $mb="50px">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </MainText>
        <Slider>
          <FlexWrapper $justify="space-between" $mb="50px">
            <RecomItem
              $title="Great Quality!"
              $text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."
              $url={firstPhoto}
              $name="James Gouse"
              $prof="Graphic Designer"
            />
            <RecomItem
              $title="Amazing work!"
              $text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."
              $url={secondPhoto}
              $name="Tiana Philips"
              $prof="Photographer"
            />
            <RecomItem
              $title="Great Quality!"
              $text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."
              $url={thirdhoto}
              $name="Talan Westervelt"
              $prof="Business man"
            />
          </FlexWrapper>
          <DotsWrapper>
            <Dot />
            <Dot />
            <Dot />
          </DotsWrapper>
        </Slider>
      </Container>
    </RecomSection>
  );
}

const RecomSection = styled.section``;

const Slider = styled.div``;

const DotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 10px;
`;
const Dot = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: ${myTheme.colors.main};
`;
