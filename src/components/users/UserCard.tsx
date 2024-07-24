import React from 'react';
import styled from 'styled-components';
import { myTheme } from '../theme/Theme.staled';

type UserCardProtoType = {
  $url: string;
  $name: string;
  $prof: string;
};

export function UserCard(props: UserCardProtoType) {
  return (
    <Wrapper>
      <UserImgBox>
        <UserImg src={props.$url} alt="User Photo" />
      </UserImgBox>
      <Descr>
        <UserName>{props.$name}</UserName>
        <UserProf>{props.$prof}</UserProf>
      </Descr>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const UserImgBox = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  overflow: hidden;
  object-fit: cover;
`;
const UserImg = styled.img``;
const Descr = styled.div`
  max-width: 145px;
`;
const UserName = styled.span`
  display: inline-block;
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 18px;
  line-height: 124%;
  text-transform: capitalize;
  color: ${myTheme.colors.black};
`;
const UserProf = styled.span``;
