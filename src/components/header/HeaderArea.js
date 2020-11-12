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
  
  &>a{z-index:9999}
  

`;

const HeaderOuter = styled.div`
  position: relative;
  padding: 0;
`;

const inner = styled.div`
  margin: 0 auto;
  max-width: 1040px;
  width: 100%;
`;


const SiteHeaderContent = styled.div`

div{
    display:block;
    width: 250px;
    height: auto;
}
    
  .logo{
   
  }
  
  svg{
  flex-shrink: 0;
  display: block;
  margin-right: 24px;
  padding: 0;
  color: #fff;
  font-size: 1.7rem;
  line-height: 1em;
  font-weight: bold;
  letter-spacing: -0.5px;
  
  height: auto;
  width: 100%;

    :hover {
      text-decoration: none;
    }
  }
`

class HeaderArea extends React.Component {
    render() {
        return (
            <SiteHeader>
                <HeaderOuter>
                    <SiteHeaderContent>
                        <AccLogo className="logo" />
                        <SiteNav/>
                    </SiteHeaderContent>
                </HeaderOuter>
            </SiteHeader>
        )
    }
}

export default HeaderArea;
