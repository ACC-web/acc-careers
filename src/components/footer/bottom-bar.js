import React from "react";
import { colors } from '../../styles/colors.ts';
import {inner} from "../../styles/shared.ts";
import styled from 'styled-components'
import { Link } from 'gatsby'

const Container = styled.div`
  background: ${colors.darkblue};
  padding:2em 1em 4em;
  font-size: 0.9em;
  font-weight: 400;
  color:${colors.lightgrey};
  @media (min-width: 768px){
      padding: 2em 0;
    }
  p{
    font-size: inherit;
    font-weight: inherit;
  }
  a{
    color:${colors.lightgrey};
    font-weight: inherit;
    text-decoration: none;
      :hover{
        text-decoration: none;
        color: ${colors.lightblue};
      }
  }
`

class BottomBar extends React.Component {

  render () {
    return (
      <Container>
        <div css={[inner]}>
            {' Australian Christian College'} &copy; {new Date().getFullYear()}&nbsp;&nbsp;|&nbsp;&nbsp;<a rel="noopener" name="Privacy Policy" href="https://docs.google.com/document/d/1Mlh1xeAikswfDmYR6t7-FaE3eliBMg_WjZing23QVwQ/preview" target="_blank">Privacy Statement</a>&nbsp;&nbsp;|&nbsp;&nbsp;<Link to="/sitemap.xml">Sitemap</Link>

        </div>
      </Container>
    );
  }

}

export default BottomBar;
