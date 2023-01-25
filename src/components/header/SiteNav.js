import * as React from 'react';
import { Link } from 'gatsby';
import styled, { css } from "styled-components";
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
  
  #main-menu li .dropDown {
    display: none;
    visibility: hidden;
  }

  #main-menu li:hover .dropDown{
    display: flex;
    visibility: visible;
    flex-direction: column;
  }


  #main-menu li .dropDown a:hover{border-bottom: none; text-decoration: underline}
  #main-menu li .dropDown a:hover svg{
    transform: rotate(90deg);
  }

  @media(min-width: 950px) {

    #main-menu li .dropDown{
      display: none;
      visibility: hidden;

      position: absolute;
      top: 83px;
      right: 0;
      bottom: 0;

      left: unset;
      height: calc(100vh - 6rem);
      width: auto;
      min-width: unset;
      background-color: #2a333c;

      padding: 0 2rem 0 2rem;
      margin-top: 0;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
      text-align: right;
      overflow: auto;
    }

    #main-menu li:hover .dropDown{
      display: flex;
      visibility: visible;
      flex-direction: column;
    }
    #main-menu li .dropDown h3{
      color: #fff;
      font-size: 1.2rem;
      margin-bottom: .5rem;
      white-space: nowrap;
    }
    #main-menu li .dropDown{
      flex-direction: column;
    }

    #main-menu li .dropDown li,
    #main-menu li .dropDown h4{
      height: auto;
      padding: 0.5rem 0;
    }

    #main-menu li .dropDown li h4 a,
    #main-menu li .dropDown a,
    #main-menu li .dropDown li a,
    #main-menu li .dropDown h4 a{
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1rem;
      height: 1.3rem;
      padding: 0;
      display: inline;
      white-space: nowrap;
    }

    #main-menu li .dropDown li a:hover{
      text-decoration: underline;
    }

    .dropDown li:hover .fa-close:active .dropDown{
      visibility: hidden;
      display: none;
    }

    #main-menu li .dropDown ul{
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
      text-align: right;
    }
  }


  /*
   Default styles + Mobile first
   Offscreen menu style
  */

  #main-menu {
    position: absolute;
    right: -200vw;
    top: 0;
    height: 100%;
    overflow: scroll;
    transition: right 0.5s ease, box-shadow 0.5s ease;
    z-index: 401;
    background-color: #2A333C;
  }

  #main-menu ul {
    list-style: none;
    text-align: center;
    margin: 3rem 0 1rem 0;
    padding: 2.5rem 0 0;

  }

  #main-menu ul ul {
    margin: 1rem 0 1rem 0;
  }

  #main-menu h3 {
    color: #fff;
  }

  #main-menu li {
    border-bottom: 1px solid #414B56;
    padding: 1rem 0 1rem 0;
  }

  #main-menu li:first-of-type {
    border-top: 1px solid #414B56;
  }

  #main-menu a {
    display: block;
    line-height: 1em;
    color: #fff;
    text-decoration: none;
    padding: 1rem;
    border-bottom: 1px solid transparent;
  }

  #main-menu li:hover,
  #main-menu li:focus {
    background: #414B56;
    transition: all 0.3s ease-in;
    text-decoration: none;
  }

  #main-menu li:hover a {
    text-decoration: none;
  }

  #main-menu .menu-close {
    padding: 2.2rem 3rem;
    position: absolute;
    right: 0;
    top: 0;
  }

  /*
   On small devices, allow it to toggle...
  */
  /*
   :target for non-JavaScript
   aria-expanded="true/false" will be for JavaScript
  */

  #main-menu:target,
  #main-menu[aria-expanded="true"] {
    right: 0;
    outline: none;
    width: 100vw;
  }

  #main-menu:target .menu-close,
  #main-menu[aria-expanded="true"] .menu-close {
    z-index: 403;
  }

  #main-menu:target ul,
  #main-menu[aria-expanded="true"] ul {
    position: relative;
    z-index: 401;
  }

  /*
   We could us \`#main-menu:target:after\`, but
   it wouldn't be clickable.
  */

  #main-menu:target + .backdrop,
  #main-menu[aria-expanded="true"] + .backdrop {
    position: fixed;
    display: block;
    content: "";
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 400;
    background: #2A333C;
    cursor: default;
  }

  @supports (position: fixed) {
    #main-menu,
    #main-menu:target + .backdrop,
    #main-menu[aria-expanded="true"] + .backdrop {
      position: fixed;
    }
  }

  /*----------------------child school sublist (dropdown) menu-----------------------*/


  #main-menu ul.ChildList {
    background-color: #414b56;
    border-bottom: 1px solid #2a333c;
    font-size: 1.5rem;
    padding: 0;
    margin: 0 0 -2rem 0;
    display: none;

  }

  body.school-list-open #main-menu ul.ChildList {
    display: block
  }

  #main-menu li ul.ChildList li a {
    font-size: 1.5rem;
    padding: .6rem;
  }

  /*------sub menu controller------*/

  body #MainNav .reveal {
    border-style: solid;
    border-width: 0 0 2px 2px;
    content: "";
    display: inline-block;
    height: 9px;
    left: 2rem;
    position: relative;
    top: 1px;
    vertical-align: top;
    width: 9px;
    transform: rotate(-45deg);
    transition: all 300ms ease;
  }

  body.school-list-open #MainNav .reveal {
    transform: rotate(135deg);
    top: 5px;
    transition: all 300ms ease;
  }


  /*
   Larger screen styling  Horizontal menu
  */
  @media (min-width: 950px) {


    .menuToggle,
    #main-menu .menu-close {
      display: none;
    }

    /* Undo positioning of off-canvas menu */
    #main-menu {
      position: absolute;
      top: 0;
      right: 0;
      padding: 0;
      height: auto;
      width: auto;
      background: none;
      overflow: visible;
    }

    #main-menu ul {
      display: flex;
      justify-content: flex-end;
      align-items: baseline;

      /* Undo off-canvas styling */
      padding: 0;
      margin: 0;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      height: auto;
      width: auto;
      background: none;
    }

    #main-menu li {
      border-bottom: 0;
      padding: 1rem 0 1rem 0;
      position: relative;
    }

    #main-menu li:first-of-type {
      border-top: 0;
    }

    #main-menu li a {
      color: #fff;
      padding: .75em 15px;
      font-weight: 400;
      font-size: 1.2rem;
      fill: none;
      stroke: #FFFFFF;
      opacity: 1;
      margin-bottom: .75rem;
      border-bottom: 1px solid transparent;
    }

    #main-menu li:hover,
    #main-menu li:focus {
      background: none; /* Remove background from off-canvas styling */
      color: #414b56;
    }

    #main-menu li a:hover {
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      position: relative;
      transition-property: color;
      transition-duration: 0.3s;
      color: #fff;
      border-bottom: 1px solid #fff;
      text-decoration: none;
    }

    #main-menu li a:hover.home-arrow {
      border-bottom: hidden;
    }

    #main-menu li a:hover.home-arrow:after {
      content: 'back'
    }

    #main-menu li a:hover svg {
      transform: rotate(361deg);
      offset-rotate: 361deg;
      transition: all 0.3s ease-in-out 0s;
    }

    @keyframes fade {
      0%, 100% {
        opacity: 1
      }
      100% {
        opacity: 0
      }
    }

    /*----------------------dropdown menu-----------------------*/
    body #MainNav .reveal {
      display: none
    }

    #main-menu ul.ChildList {
      display: none;
    }

    #main-menu li:hover ul.ChildList {
      position: absolute;
      left: -5rem;
      top: 7rem;
      max-width: unset;

      display: flex;
      flex-direction: column;
      background-color: #2a333c;
    }

    #main-menu li:hover ul.ChildList li {
      padding: 0;
      margin: 0 0 1px 0;
      width: 19rem;
    }

    #main-menu li:hover ul.ChildList li a {
      font-size: 1.5rem;
      padding: 1.2rem 3rem 1.7rem 3rem;
      margin: 0;
    }

    #main-menu li:hover ul.ChildList li:hover {
      border-bottom: 1px solid #fff;
      margin: 0;
    }

    #main-menu li:hover ul.ChildList li:hover a, #main-menu li:hover ul.ChildList li a:hover {
      text-decoration: none;
      border: 0;
      margin: 0;
      padding: 1.2rem 3rem 1.7rem 3rem;
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
                      <rect x="0" y="20" className="white-fill" width="27.4" height="4"/>
                      <rect x="0" y="10" className="white-fill" width="27.4" height="4"/>
                      <rect x="0" className="white-fill" width="27.4" height="4"/>
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
                        <polygon className="white-fill" points="14.8,2.8 12,0 7.4,4.6 2.8,0 0,2.8 4.6,7.4 0,12 2.8,14.8 7.4,10.3 12,14.8 14.8,12 10.3,7.4 "/>
                      </svg>
                    </span>
                </a>
                <ul className="NavStyles" id="MainNav" role="menu">
                  {/* TODO: mark current nav item - add class nav-current */}
                  <li>
                    <a role="menuitem" href="https://www.acc.edu.au/about/">About</a>
                  </li>
                  <li css={ParentItem}>
                    <Link role="menuitem" to="/" onClick={(PreventDefault) => document.body.classList.toggle('school-list-open')}>Schools&nbsp;&nbsp;<span className="reveal"></span></Link>
                    <ul className="dropDown" id="schools">
                      <h3>Select a School</h3>
                          <li role="presentation"><a role="menuitem" href="https://www.acc.edu.au/moreton/">Moreton, QLD</a></li>
                          <li role="presentation"><a role="menuitem" href="https://www.acc.edu.au/singleton/">Singleton, NSW</a></li>
                          <li role="presentation"><a role="menuitem" href="https://www.mcs.nsw.edu.au/">Medowie, NSW</a></li>
                          <li role="presentation"><a role="menuitem" href="https://www.brightwaters.nsw.edu.au/">Brightwaters, NSW</a></li>
                          <li role="presentation"><a role="menuitem" href="https://www.acc.edu.au/marsdenpark/">Marsden Park, NSW</a></li>
                          <li role="presentation"><a role="menuitem" href="https://www.acc.edu.au/hume/">Hume, VIC</a></li>
                          <li role="presentation"><a role="menuitem" href="https://www.acc.edu.au/casey/">Casey, VIC</a></li>
                          <li role="presentation"><a role="menuitem" href="https://www.acc.edu.au/darlingdowns/">Darling Downs, WA</a></li>
                          <li role="presentation"><a role="menuitem" href="https://www.acc.edu.au/southlands/">Southlands, WA</a></li>
                          <li role="presentation"><a role="menuitem" href="https://www.acc.edu.au/burnie/">Burnie, TAS</a></li>
                          <li role="presentation"><a role="menuitem" href="https://www.acc.edu.au/launceston/">Launceston, TAS</a></li>
                          <li role="presentation"><a role="menuitem" href="https://www.acc.edu.au/hobart/">Hobart, TAS</a></li>
                          {/*<a href="https://www.acc.edu.au/distance-education/"><h3 style={{color:"#fff"}}>Distance Education</h3></a>*/}
                    </ul>
                  </li>
                  <li css={ParentItem}>
                    <a role="menuitem" href="https://www.acc.edu.au/journals/" onClick={(PreventDefault) => document.body.classList.toggle('journals-list-open')}>Journals&nbsp;&nbsp;<span className="reveal"></span></a>
                    <ul className="dropDown" id="journals">
                      <h3 style={{ color: '#fff' }}>Select a Journal</h3>
                      <li><a role="menuitem" href="https://www.acc.edu.au/journals/academica/">Academica</a></li>
                      <li><a role="menuitem" href="https://www.acc.edu.au/journals/excelencia/">Excelencia</a></li>
                      <li><a role="menuitem" href="https://www.acc.edu.au/excelencia-live/">Excelencia Live</a></li>
                    </ul>
                  </li>
                  <li css={ParentItem}>
                    <Link role="menuitem" to="/" onClick={(PreventDefault) => document.body.classList.toggle('careers-list-open')}>Careers&nbsp;&nbsp;<span className="reveal"></span></Link>
                    <ul className="dropDown " id="careers">
                      <li><a role="menuitem" href="https://www.acc.edu.au/careers/">Positions Vacant</a></li>
                      <li><a role="menuitem" href="https://www.cem.com.au/training-school/">Teacher Traineeships</a></li>
                    </ul>
                  </li>
                  <li css={ParentItem}>
                    <Link role="menuitem" to="/" onClick={(PreventDefault) => document.body.classList.toggle('resources-list-open')}>Resources&nbsp;&nbsp;
                      <span className="reveal"></span>
                    </Link>
                    <ul className="dropDown" id="resources">
                        <h3>Select a Resource</h3>
                        <li><a role="menuitem" href="https://www.acc.edu.au/blog/">Blog</a></li>
                        <li><a role="menuitem" href="https://www.acc.edu.au/podcast/">The Inspiration Project Podcast</a></li>
                        <li><a role="menuitem" href="https://www.acc.edu.au/eguides/">Helpful Parenting Guides</a></li>
                    </ul>
                  </li>
                  <li>
                    <a role="menuitem" href="https://www.acc.edu.au/newsroom/">Newsroom</a>
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
