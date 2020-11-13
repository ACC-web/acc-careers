import {graphql, useStaticQuery} from 'gatsby';
import * as React from 'react';
import styled from "styled-components"
import { colors } from '../../styles/colors.ts';
import { css } from 'styled-components';

import { inner } from '../../styles/shared.ts';

import SchoolList from "./school-list.js";
import BottomBar from "./bottom-bar.js";
import SiteNavLogo from "../header/SiteNavLogo";
import LatestMediaReleaseList from "./latestMediaReleaseList.js"
import LatestBlogPosts from "./latestBlogPost"
import TwitterWidget from "../twitter-widget";

const Wrapper = styled.div`
  p.small{
    padding: 0 1rem
  }
`

const SiteFooter = styled.footer`
  position: relative; 
  padding-top: 3.5em;
  padding-bottom: 60px;
  margin: 0 auto;
  color: ${colors.lightgrey};
  background: ${colors.midgrey};
  font-size: 0.9em;
    h2{ 
      margin-top: 0;
    }
    p{
    font-size: inherit;
    }
  
    ul{
      list-style-type: none;
      padding: 0;
      color: ${colors.lightgrey};
                  font-size: inherit;

      li{    
            padding: 0;
            margin: 0.2em 0;
            color: #fff;
            line-height: 0.9rem;;

        a{
            font-size: 0.8rem;
            font-weight: 400;
            margin: 0;
            color: #fff;
            text-decoration: none;

            
            :hover{
                color: ${colors.lightblue};
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

const flex = css`
  //add next line because weird style bug, first line will be ignored
  color: inherit;
  display: flex;
  flex-direction: column;
  
    @media (min-width: 768px){
      flex-direction: row;
    }
`


const Column = styled.div`
  width: calc(100% - 2rem);
  padding: 0 1rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px){
    width: 25%;
    
    :nth-of-type(3){
      width: 50%
    }
  }

  .caption{
    margin-top: 1em;
    text-align: right;
    margin-bottom: 1em;
  }
  
  /* ------------this is the logo---------- */
 

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


const SiteFooterNav = styled.nav`
  display: flex;
  justify-content: space-between;
    @media (min-width: 768px){
     justify-content: center;
    }

  a {
    position: relative;
    //margin-left: 20px;
  }

  a:before {
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

  a:first-of-type:before {
    display: none;
  }
  @media (max-width: 650px) {
    a:first-of-type {
      margin-left: 0;
    }
  }
`

const rightAlign = css`
  text-align: left;
  
  @media (min-width: 768px){
    text-align: right;
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

const Footer = () => {
    const data = useStaticQuery(graphql`
        query BrendanImageQuery {
            file(relativePath: {regex: "/BrendanCorrEtched.png/"}) {
                childImageSharp {
                    fluid(maxWidth: 1000, jpegProgressive: true, fit: CONTAIN) {
                        src
                    }
                }
            }
        }
    `)

    // const { author, social } = data.site.siteMetadata
    return (
        <Wrapper>
            <SiteFooter>
                <div css={[inner, flex]}>
                    <Column>
                        <LogoWrapper>
                            <SiteNavLogo />
                        </LogoWrapper>
                        <p css={[rightAlign]}><i style={{color: '#fff'}}>Transforming young lives spiritually, academically, socially and physically.</i></p>
                    </Column>
                    <Column>
                        <SiteFooterNav>
                            <SchoolList />
                        </SiteFooterNav>
                    </Column>
                    <Column>
                       {/*<LatestMediaReleaseList />*/}
                       <LatestBlogPosts />
                    </Column>
                    <Column>
                        <TwitterWidget />
                    </Column>
                </div>
            </SiteFooter>
            <BottomBar />
        </Wrapper>
    )
}

export default Footer
