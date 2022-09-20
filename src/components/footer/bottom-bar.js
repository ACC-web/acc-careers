import React from "react";
import styled from 'styled-components'
import {Link} from 'gatsby'

const Container = styled.div`
  padding: 2em 1em 4em;
  font-size: 0.9em;
  font-weight: 400;
  background-color: #2A333C;
  
  @media (min-width: 768px) {
    padding: 2em 0;
  }

  p {
    font-size: inherit;
    font-weight: inherit;
    color: #fff;
  }

  a {
    font-weight: inherit;
    text-decoration: none;
    color: #fff;

    :hover {
      text-decoration: none;
      color: #0069B4;
    }
  }

  .inner {
    color: #fff;
    margin: 0 auto;
    max-width: 1040px;
    width: 100%;
  }
`

class BottomBar extends React.Component {

  render() {
    return (
      <Container>
        <div className="inner">
          {' Australian Christian College'} &copy; {new Date().getFullYear()}&nbsp;&nbsp;|&nbsp;&nbsp;<a rel="noopener noreferrer" name="Privacy Policy" href="https://docs.google.com/document/d/1Mlh1xeAikswfDmYR6t7-FaE3eliBMg_WjZing23QVwQ/preview" target="_blank">Privacy Statement</a>&nbsp;&nbsp;|&nbsp;&nbsp;<Link to="/sitemap/sitemap-0.xml">Sitemap</Link>
        </div>
      </Container>
    );
  }

}

export default BottomBar;
