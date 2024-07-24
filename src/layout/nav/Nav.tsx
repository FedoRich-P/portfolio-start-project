import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { myTheme } from '../../components/theme/Theme.staled';

export function Nav() {
  return (
    <NavWrapper>
      <NavBtn>
        <Icon width="30" height="30" viewBox="0 0 30 30" iconId="contrast" />
      </NavBtn>
      <NavList>
        <NavItem>
          <NavLink href="#">
            <Icon width="19" height="19" viewBox="0 0 19 19" iconId="home" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <Icon
              width="19"
              height="19"
              viewBox="0 0 19 19"
              iconId="services"
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <Icon width="19" height="19" viewBox="0 0 19 19" iconId="cv" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <Icon
              width="19"
              height="19"
              viewBox="0 0 19 19"
              iconId="portfolio"
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <Icon width="19" height="19" viewBox="0 0 19 19" iconId="blog" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <Icon width="19" height="19" viewBox="0 0 19 19" iconId="contact" />
          </NavLink>
        </NavItem>
      </NavList>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  padding: 50px 22px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 0 1 108px;
`;
const NavBtn = styled.button`
  margin-bottom: 177px;
  width: 30px;
  height: 30px;
`;
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 43px;
`;
const NavItem = styled.li`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #f0f0f6;
  /* transition: background-color 0.4s ease-in-out; */

  /* &:hover {
    background-color: ${myTheme.colors.main};

    svg {
      fill: ${myTheme.colors.main};
    }
  } */
`;
const NavLink = styled.a`
  width: 100%;
  height: 100%;
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.4s ease-in-out;

  svg {
    transition: all 0.3s ease-in-out;
    fill: ${myTheme.colors.grey};
  }

  &:hover {
    background-color: ${myTheme.colors.main};

    svg {
      fill: ${myTheme.colors.black};
    }
  }
`;

// home
// services
// cv
// portfolio
// blog
// contact
// contrast
