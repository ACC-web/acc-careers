import React from 'react';
import styled from "styled-components"
import {css} from 'styled-components';

import SchoolList from "./school-list.js";
import BottomBar from "./bottom-bar.js";
import AccLogo from "../header/acclogo";
import LatestBlogPosts from "./LatestBlogPosts"
import LatestPodcastEpisodes from "./LatestPodcastEpisodes";

const Wrapper = styled.div`
  p.small {
    padding: 0 1rem
  }
`

const SiteFooter = styled.footer`
  position: relative;
  padding-top: 3.5em;
  padding-bottom: 60px;
  margin: 0 auto;
  color: #fff;
  font-size: 0.9rem;
  line-height: 1;
  flex-direction: row;
  background-color: #414b56;

  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p, i, li, a {
    font-size: inherit;
    line-height: inherit;
    color: inherit;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      padding: 0;
      margin: 0 0 0.66em;

      a {
        font-size: 0.8rem;
        font-weight: 400;
        margin: 0;
        text-decoration: none;

        :hover {
          color: #50aae6;
        }
      }
    }
  }

  #acc-logo {
    display: block;
    width: 100%;
    height: auto;
    max-width: 230px
  }
`


const Column = styled.div`
  width: calc(100% - 2rem);
  padding: 0 1rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    width: 25%;

    :nth-of-type(4) {
      width: 40%
    }
  }

  .caption {
    margin-top: 1em;
    text-align: right;
    margin-bottom: 1em;
  }

  /* ------------this is the logo---------- */


  svg {
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


const SiteFooterNav = styled.nav`
  display: flex;
  justify-content: space-between;

  a {
    position: relative;
    //margin-left: 20px;
  }

  a::before {
    content: '';
    position: absolute;
    top: 11px;
    left: -11px;
    display: block;
    width: 2px;
    height: 2px;
    background: #fff;
    border-radius: 100%;
  }

  a:first-of-type::before {
    display: none;
  }

  @media (max-width: 650px) {
    a:first-of-type {
      margin-left: 0;
    }
  }

  @media (min-width: 768px) {
    justify-content: center;
  }
`


const LogoWrapper = styled.div`
  height: 73px;
  width: 100%;
  max-width: 255px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;
  text-align: center;
`

// Centered content container blocks
export const inner = css`
  //add next line because weird style bug, first line will be ignored
  color: #fff;
  margin: 0 auto;
  max-width: 1040px;
  width: 100%;
`;

export const outer = css`
  position: relative;
  padding: 0 4vw;
`;

const flex = css`
  //add next line because weird style bug, first line will be ignored
  color: inherit;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;


const Footer = () => {

  // const { author, social } = data.site.siteMetadata
  return (
    <Wrapper>
      <SiteFooter>
        <div css={[inner, flex]}>
          <Column>
            <LogoWrapper>
              <AccLogo/>
            </LogoWrapper>
            <p className="rightAlign"><i>Transforming young lives spiritually, academically, socially and physically.</i></p>
          </Column>
          <Column>
            <SiteFooterNav>
              <SchoolList/>
            </SiteFooterNav>
          </Column>
          <Column>
            {/*<LatestMediaReleaseList />*/}
            <LatestPodcastEpisodes />
          </Column>
          <Column>
            <LatestBlogPosts />
          </Column>
        </div>
      </SiteFooter>
      <BottomBar/>
    </Wrapper>
  )
}

export default Footer
