import React from 'react';
import AccLogo from "./header/acclogo";
import SiteNav from "./header/SiteNav";

import {
    SiteHeader,
    headerOuter,
    SiteHeaderContent,
    inner,
    outer,
    AuthorProfileImage,
} from '../styles/shared';
import styled from "@emotion/styled";

const SiteHeaderContent = styled.div`
  .logo{
    display:block;
    width: 250px;
    height: auto;
  }
  
  svg{
  flex-shrink: 0;
  display: block;
  margin-right: 24px;
  padding: 11px 0;
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
            <header className="about-header" css={[outer, SiteHeader]}>
                <div css={headerOuter}>
                    <SiteHeaderContent>
                        <AccLogo css={Logo} />
                        <SiteNav/>
                    </SiteHeaderContent>
                </div>
            </header>
        )
    }
}

export default HeaderArea;
