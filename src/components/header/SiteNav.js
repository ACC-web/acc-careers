import { Link } from 'gatsby';
import * as React from 'react';
import styled from "styled-components"
import { css } from "styled-components"

import '../base.css';

const HomeNavRaise = css`
  position: inherit;
  color: unset;
  @media (min-width: 900px) {
    position: relative;
    // top: -70px;
  }
`;

const SiteNavStyles = css`
  position: inherit;
  color: unset;
  position: relative;
  z-index: 300;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow-y: visible;
  font-size: 1.2rem;
  
  @media (min-width: 768px){  height: 73px;  }
`;

const SiteNavLeft = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    justify-content: space-between;
    height: 73px;
    text-align: center;

    @media (max-width: 768px) {
        margin-right: 0;
        padding-left: 4vw;
    }
`;

const ParentItem = css`
  border-bottom:0;
  position: relative;
  `;

const ChildList = css`
  background-color:#2a333c;
  padding: 0;

   li {
      border-bottom: none;
      }

    li:first-of-type {border-top: none; border-bottom: none;}
    
    li a {
      color: #fff;
      padding: .75em 15px;
      font-weight: 400;
      font-size: 1.5rem;
    }

    @media (min-width: 768px) {
    display:none;
    background-color: #2a333c;

    li {
      border-bottom: none;
      padding: 1rem 2.5rem;
      }

      li:hover{
      background-color: #f4f8fb;
      color: #2a333c;
      }
      li:hover a{color: #2a333c;}
    }
`;
const SiteNavRight = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  height: 40px;
  
  .menuToggle{
    right: 0;
    top: 0;
    margin: 1rem;
    position: absolute;
    display: inline-block;
    padding: .75em 15px;
    line-height: 1em;
    font-size: 1em;
    color: #fff;
    
    @media(min-width: 950px){
      display: none;
    }
  }
`;

const SocialLinks = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  a:last-of-type {
    padding-right: 20px;
  }
`;

const SubscribeButton = styled.a`
  display: block;
  padding: 4px 10px;
  border: #fff 1px solid;
  color: #fff;
  font-size: 1.2rem;
  line-height: 1em;
  border-radius: 10px;
  opacity: 0.8;

  :hover {
    text-decoration: none;
    opacity: 1;
    cursor: pointer;
  }
`;

const navTrigger = css`
  position: absolute;
  display: block;
  z-index: 80;
  right: 2rem;
  top: 5px;
  /* update the following 2 lines on all structure stylesheets (use px no %) - to fix the ios issue */
  height: 54px;
  width: 54px;
  border-radius: 50%;
  /* image replacement */
  overflow: hidden;
  text-indent: 100%;
  white-space: nowrap;
  -webkit-transition: -webkit-transform 0.5s;
  -moz-transition: -moz-transform 0.5s;
  transition: transform 0.5s;
  
    @media (min-width: 768px) {
        display:none;
    }
`;

const NavIcon = css`
    position: absolute;
    width: 30px;
    height: 2px;
    left: 27px;
    top: 27px;
    bottom: auto;
    right: auto;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -o-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    -webkit-transition: 1s ease-in-out;
    
    z-index: 999;
    left: 24%;
    -webkit-transition: 1s ease-in-out;
    -moz-transition: 1s ease-in-out;
    -o-transition: 1s ease-in-out;
    background-color: #fff;
    
    :before{
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color:inherit;
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: -webkit-transform 0.5s, width 0.5s, rotate 1s;
  -moz-transition: -moz-transform 0.5s, width 0.5s, rotate 1s;
  transition: transform 0.5s, width 0.5s, rotate 1s;
  -webkit-transform-origin: right top;
  -moz-transform-origin: right top;
  -ms-transform-origin: right top;
  -o-transform-origin: right top;
  transform-origin: right top;
  -webkit-transform: translateY(-9px);
  -moz-transform: translateY(-9px);
  -ms-transform: translateY(-9px);
  -o-transform: translateY(-9px);
  transform: translateY(-9px);
}
:after{
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color:inherit;
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: -webkit-transform 0.5s, width 0.5s, rotate 1s;
  -moz-transition: -moz-transform 0.5s, width 0.5s, rotate 1s;
  transition: transform 0.5s, width 0.5s, rotate 1s;
  -webkit-transform-origin: right bottom;
  -moz-transform-origin: right bottom;
  -ms-transform-origin: right bottom;
  -o-transform-origin: right bottom;
  transform-origin: right bottom;
  -webkit-transform: translateY(9px);
  -moz-transform: translateY(9px);
  -ms-transform: translateY(9px);
  -o-transform: translateY(9px);
  transform: translateY(9px);
}
`;



class SiteNav extends React.Component {
  render() {
    // const element = document.getElementById('MainNav').classList.add('MyClass');

    // const { isHome = false } = this.props;
    return (
        <nav css={[HomeNavRaise, SiteNavStyles]}>
          <SiteNavRight>
            <div className="hamburger-menu">
              <a href="#main-menu"
                 className="menuToggle"
                 role="button"
                 id="main-menuToggle"
                 aria-expanded="false"
                 aria-controls="main-menu"
                 aria-label="Open main menu"
                 onClick={() => document.body.classList.add('navigation-is-open')}
              >
                <span className="sr-only">Open main menu</span>
                <span className="fa fa-bars" aria-hidden="true">
                    <svg width="23px"
                         height="20px"
                         viewBox="0 0 27.4 24"
                         enableBackground="new 0 0 27.4 24"
                         xmlSpace="preserve"
                    >
                      <g>
                        <rect x="0" y="20" className="white-fill" width="27.4" height="4"/>
                        <rect x="0" y="10" className="white-fill" width="27.4" height="4"/>
                        <rect x="0" className="white-fill" width="27.4" height="4"/>
                      </g>
                    </svg>
                  </span>
              </a>

              <div id="main-menu"
                   className="main-menu"
                   role="navigation"
                   aria-expanded="false"
                   aria-label="Main menu"
              >
                <a href="#main-menuToggle"
                   className="menu-close"
                   role="button"
                   id="main-menu-close"
                   aria-expanded="false"
                   aria-controls="main-menu"
                   aria-label="Close main menu"
                   onClick={() => document.body.classList.remove('navigation-is-open')}
                >
                  <span className="sr-only">Close main menu</span>
                  <span className="fa fa-close" aria-hidden="true">
                      <svg
                          width="14.8px"
                          height="14.8px"
                          viewBox="0 0 14.8 14.8"
                          enableBackground="new 0 0 14.8 14.8"
                          xmlSpace="preserve"
                      >
                        <polygon className="white-fill"
                                 points="14.8,2.8 12,0 7.4,4.6 2.8,0 0,2.8 4.6,7.4 0,12 2.8,14.8 7.4,10.3 12,14.8 14.8,12 10.3,7.4 "/>
                      </svg>
                    </span>
                </a>
                <ul className="NavStyles" id="MainNav" role="menu">
                  {/* TODO: mark current nav item - add class nav-current */}
                  <li role="menuitem">
                    <a href="https://www.acc.edu.au/about.html">About</a>
                  </li>
                  <li css={ParentItem} role="menuitem">
                    <Link to="/" onClick={(PreventDefault) => document.body.classList.toggle('school-list-open')}>Schools&nbsp;&nbsp;<span className="reveal"></span></Link>

                    <ul class="megaMenu" id="schools">
                      <h3>Select a School</h3>

                      <li role="menuitem"><a href="https://www.acc.edu.au/moreton/index.html">Moreton</a></li>
                      <li role="menuitem"><a href="https://www.acc.edu.au/singleton/index.html">Singleton</a></li>
                      <li role="menuitem"><a href="https://brightwaterschristiancollege.com.au/">Brightwaters</a></li>
                      <li role="menuitem"><a href="https://www.acc.edu.au/marsdenpark/index.html">Marsden Park</a></li>
                      <li role="menuitem"><a href="https://www.acc.edu.au/hume/index.html">Hume</a></li>
                      <li role="menuitem"><a href="https://www.acc.edu.au/darlingdowns/index.html">Darling Downs</a></li>
                      <li role="menuitem"><a href="https://www.acc.edu.au/southlands/index.html">Southlands</a></li>
                      <li role="menuitem"><a href="https://www.acc.edu.au/burnie/index.html">Burnie</a></li>
                      <li role="menuitem"><a href="https://www.acc.edu.au/launceston/index.html">Launceston</a></li>
                      <li role="menuitem"><a href="https://www.acc.edu.au/hobart/index.html">Hobart</a></li>
                    </ul>
                  </li>
                  <li role="menuitem">
                    <a href="https://www.acc.edu.au/careers/">Careers</a>
                  </li>
                  <li css={ParentItem} role="menuitem">
                    <Link to="/"
                          onClick={(PreventDefault) => document.body.classList.toggle('resources-list-open')}>Resources&nbsp;&nbsp;
                      <span className="reveal"></span></Link>

                    <ul className="megaMenu" id="resources">
                      <h3>Select a Resource</h3>

                      <li role="menuitem">
                        <li><a href="https://www.acc.edu.au/blog">Blog</a></li>
                        <li><a href="https://www.acc.edu.au/podcast">Podcast</a></li>
                        <li><a href="https://www.acc.edu.au/eguides">Guides</a></li>
                      </li>

                    </ul>
                  </li>
                  <li role="menuitem">
                    <a href="https://www.acc.edu.au/newsroom/">Newsroom</a>
                  </li>
                </ul>
              </div>
              <a href="#main-menuToggle"
                 className="backdrop"
                 tabIndex="-1"
                 aria-hidden="true"
              />
            </div>
          </SiteNavRight>
        </nav>
    );
  }
}

export default SiteNav;
