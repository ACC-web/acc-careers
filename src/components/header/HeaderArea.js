import React from 'react';
import AccLogo from "./acclogo";
import SiteNav from "./SiteNav";

import styled from "styled-components"

const SiteHeader = styled.div`
  position: relative;
  padding: 12px 4vw;
  color: #fff;
  /* background: color(var(--darkblue) l(-5%)) no-repeat center center; */
  background: #2a333c;
  background-size: cover;

  & > a {
    z-index: 9999
  }
`;

const HeaderOuter = styled.div`
  position: relative;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  height: 73px;
  width: 70%;
  max-width: 255px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  text-align: center;
`;


class HeaderArea extends React.Component {
  render() {
    return (
      <SiteHeader>
        <HeaderOuter>
          <LogoWrapper>
            <AccLogo className="logo"/>
          </LogoWrapper>
          <SiteNav/>
        </HeaderOuter>
      </SiteHeader>
    )
  }
}

export default HeaderArea;
