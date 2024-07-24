import React from 'react';
import { Container } from '../../components/container/Container';
import styled from 'styled-components';
import { FlexWrapper } from '../../components/flex/FlexWrapper';
import { MainBtn } from '../../components/buttons/MainBtn';
import ButtonIcon from '../../assets/icons/mainBtn.svg';
import { myTheme } from '../../components/theme/Theme.staled';
import HeaderImg from '../../assets/images/mainPhoto.png';
import HeaderBG from '../../assets/icons/header.svg';

export function Header() {
  return (
    <HeaderWrapper>
      <Container as={FlexWrapper}>
        <HeaderDescr>
          <HeaderSuPTitle>I’m Rayan Adlrdard</HeaderSuPTitle>
          <HeaderTitle>
            <span>Front-end</span> Developer{' '}
          </HeaderTitle>
          <HeaderText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
            volutpat feugiat placerat lobortis. Natoque rutrum semper sed
            suspendisse nunc lectus.
          </HeaderText>
          <MainBtn as={HeaderLink}>HIRE ME</MainBtn>
        </HeaderDescr>
        <HeaderPhoto src={HeaderImg} alt="Header Photo"></HeaderPhoto>
      </Container>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.section`
  margin-bottom: 137px;
  padding: 0px 60px 74px;
  background-image: url(${HeaderBG});
  background-repeat: no-repeat;
  background-position: center;
`;
const HeaderDescr = styled.div`
  max-width: 500px;
`;

const HeaderTitle = styled.h1`
  margin-bottom: 18px;
  font-family: Inter;
  font-size: 48px;
  font-weight: 700;
  line-height: 59.33px;
  color: ${myTheme.colors.black};

  span {
    color: ${myTheme.colors.main};
  }
`;
const HeaderSuPTitle = styled.h2`
  font-family: Inter;
  font-size: 48px;
  font-weight: 700;
  line-height: 59.33px;
  color: ${myTheme.colors.black};
`;

const HeaderText = styled.p`
  display: inline-block;
  margin-bottom: 25px;
  max-width: 424px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${myTheme.colors.grey};
`;
const HeaderLink = styled.a`
  padding: 16px 32px;
  display: inline-block;
  position: relative;
  min-width: 154px;
  &::after {
    content: '';
    position: absolute;
    right: 35px;
    width: 14px;
    height: 16px;
    background-image: url(${ButtonIcon});
    background-size: 14px 16px;
    background-position: top left;
  }
`;

const HeaderPhoto = styled.img`
  width: 325px;
  height: 460px;
  object-fit: contain;
`;
