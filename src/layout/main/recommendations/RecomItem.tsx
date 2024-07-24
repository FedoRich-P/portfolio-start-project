import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';
import { SectionSubTitle } from '../../../components/titles/SectionSubTitle';
import { MainText } from '../../../components/text/MainText';
import { UserCard } from '../../../components/users/UserCard';

type RecomItemProtoType = {
  $title: string;
  $text: string;
  $url: string;
  $name: string;
  $prof: string;
};

export function RecomItem(props: RecomItemProtoType) {
  return (
    <RecomItemWrapper>
      <Stars>
        <Icon iconId="star" width="19" height="19" viewBox="0 0 19 19" />
        <Icon iconId="star" width="19" height="19" viewBox="0 0 19 19" />
        <Icon iconId="star" width="19" height="19" viewBox="0 0 19 19" />
        <Icon iconId="star" width="19" height="19" viewBox="0 0 19 19" />
        <Icon iconId="star" width="19" height="19" viewBox="0 0 19 19" />
      </Stars>
      <SectionSubTitle $mb="18px">{props.$title}</SectionSubTitle>
      <MainText $mb="30px">{props.$text}</MainText>
      <UserCard
        $url={props.$url}
        $name={props.$name}
        $prof={props.$prof}
      ></UserCard>
    </RecomItemWrapper>
  );
}

const RecomItemWrapper = styled.div`
  padding: 25px;
  max-width: 310px;
  text-align: left;
`;

const Stars = styled.div`
  margin-bottom: 17px;
  & svg:not(:last-child) {
    margin-right: 10px;
  }
`;
