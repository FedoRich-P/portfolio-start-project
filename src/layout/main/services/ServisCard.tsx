import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';
import { SectionSubTitle } from '../../../components/titles/SectionSubTitle';
import { MainText } from '../../../components/text/MainText';
import { myTheme } from '../../../components/theme/Theme.staled';

type ServisCardPropsType = {
  iconId: string;
  title: string;
  text: string;
};

export function ServisCard(props: ServisCardPropsType) {
  return (
    <>
      <ServisCardItem>
        <Icon
          iconId={props.iconId}
          width="78"
          height="78"
          viewBox="0 0 78 78"
        />
        <SectionSubTitle>{props.title}</SectionSubTitle>
        <MainText>{props.text}</MainText>
      </ServisCardItem>
    </>
  );
}

const ServisCardItem = styled.li`
  padding-top: 25px;
  padding-bottom: 42px;
  max-width: 310px;
  width: 100%;
  min-height: 225px;
  text-align: center;
  border: 1px solid ${myTheme.colors.main};
`;
