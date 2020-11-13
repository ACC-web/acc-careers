import React from 'react';
import {List, Heading2} from '../../styles/shared.ts';
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0;
  
    @media (min-width: 768px){
      width: auto;
    }
`




const Item = styled.li`
    padding: 0;
    margin: 0.2em 0;
    color: #fff;
    line-height: 1.4;
   
     
`

class SchoolList extends React.Component {

  render () {
    return (
      <Wrapper>
        <Heading2>Schools</Heading2>
        <List>
          <Item><a target="_blank" rel="noopener noreferrer"  href="https://www.acc.edu.au/moreton/index.html">Moreton, QLD</a></Item>
          <Item><a target="_blank" rel="noopener noreferrer"  href="https://www.acc.edu.au/singleton/index.html">Singleton, NSW</a></Item>
          <Item><a target="_blank" rel="noopener noreferrer"  href="https://www.acc.edu.au/marsdenpark/index.html">Marsden Park, NSW</a></Item>
          <Item><a target="_blank" rel="noopener noreferrer"  href="https://www.acc.edu.au/hume/index.html">Hume, VIC</a></Item>
          <Item><a target="_blank" rel="noopener noreferrer"  href="https://www.acc.edu.au/darlingdowns/index.html">Darling Downs, WA</a></Item>
          <Item><a target="_blank" rel="noopener noreferrer"  href="https://www.acc.edu.au/southlands/index.html">Southlands, WA</a></Item>
          <Item><a target="_blank" rel="noopener noreferrer"  href="https://www.acc.edu.au/burnie/index.html">Burnie, TAS</a></Item>
          <Item><a target="_blank" rel="noopener noreferrer"  href="https://www.acc.edu.au/launceston/index.html">Launceston, TAS</a></Item>
          <Item><a target="_blank" rel="noopener noreferrer"  href="https://www.acc.edu.au/hobart/index.html">Hobart, TAS</a></Item>
        </List>
      </Wrapper>
    );
  }

}

export default SchoolList;
