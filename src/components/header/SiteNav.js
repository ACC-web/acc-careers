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


const ParentItem = css`
  border-bottom:0;
  position: relative;
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

                      <li role="menuitem"><a href="https://www.acc.edu.au/moreton/index.html">Moreton, QLD</a></li>
                      <li role="menuitem"><a href="https://www.acc.edu.au/singleton/index.html">Singleton, NSW</a></li>
                      <li role="menuitem"><a href="https://brightwaterschristiancollege.com.au/">Brightwaters, NSW</a></li>
                      <li role="menuitem"><a href="https://www.acc.edu.au/marsdenpark/index.html">Marsden Park, NSW</a></li>
                      <li role="menuitem"><a href="https://www.acc.edu.au/hume/index.html">Hume, VIC</a></li>
                      <li role="menuitem"><a href="https://www.acc.edu.au/darlingdowns/index.html">Darling Downs, WA</a></li>
                      <li role="menuitem"><a href="https://www.acc.edu.au/southlands/index.html">Southlands, WA</a></li>
                      <li role="menuitem"><a href="https://www.acc.edu.au/burnie/index.html">Burnie, TAS</a></li>
                      <li role="menuitem"><a href="https://www.acc.edu.au/launceston/index.html">Launceston, TAS</a></li>
                      <li role="menuitem"><a href="https://www.acc.edu.au/hobart/index.html">Hobart, TAS</a></li>
                    </ul>
                  </li>
                  <li role="menuitem">
                    <Link to="/" onClick={(PreventDefault) => document.body.classList.toggle('journals-list-open')}>Journals&nbsp;&nbsp;<span className="reveal"></span></Link>
                    <ul className="megaMenu " id="careers">
                      <h3 style={{ color: '#fff' }}>Select a Journal</h3>
                      <li><a href="https://www.acc.edu.au/journals/academica/index.html">Academica</a></li>
                      <li><a href="https://www.acc.edu.au/journals/excelencia/index.html">Excelencia</a></li>
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
