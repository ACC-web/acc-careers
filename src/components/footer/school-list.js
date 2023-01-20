import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0;
  @media (min-width: 768px) {
    width: auto;
  }
`

const List = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    padding: 0;

    a {
      font-size: inherit;
      margin: 0;
      color: inherit;
    }
  }

`


const Item = styled.li`
  padding: 0;
  margin: 0.2em 0;
  color: #fff;
  line-height: 1.4;
`

const Heading2 = styled.h2`
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  padding: 0;
  margin-top: 0;
`

class SchoolList extends React.Component {

  render() {
    return (
      <Wrapper>
        <Heading2>Schools</Heading2>
        <List>
          <Item><a target="_blank" rel="noopener noreferrer" href="https://www.acc.edu.au/moreton/">Moreton, QLD</a></Item>
          <Item><a target="_blank" rel="noopener noreferrer" href="https://www.acc.edu.au/singleton/">Singleton, NSW</a></Item>
          <Item><a target="_blank" rel="noopener noreferrer" href="https://www.mcs.nsw.edu.au/">Medowie, NSW</a></Item>
          <Item><a target="_blank" rel="noopener noreferrer" href="https://brightwaters.nsw.edu.au/">Brightwaters, NSW</a></Item>
          <Item><a target="_blank" rel="noopener noreferrer" href="https://www.acc.edu.au/marsdenpark/">Marsden Park, NSW</a></Item>
          <Item><a target="_blank" rel="noopener noreferrer" href="https://www.acc.edu.au/hume/">Hume, VIC</a></Item>
          <Item><a target="_blank" rel="noopener noreferrer" href="https://www.acc.edu.au/casey/">Casey, VIC</a></Item>
          <Item><a target="_blank" rel="noopener noreferrer" href="https://www.acc.edu.au/darlingdowns/">Darling Downs, WA</a></Item>
          <Item><a target="_blank" rel="noopener noreferrer" href="https://www.acc.edu.au/southlands/">Southlands, WA</a></Item>
          <Item><a target="_blank" rel="noopener noreferrer" href="https://www.acc.edu.au/burnie/">Burnie, TAS</a></Item>
          <Item><a target="_blank" rel="noopener noreferrer" href="https://www.acc.edu.au/launceston/">Launceston, TAS</a></Item>
          <Item><a target="_blank" rel="noopener noreferrer" href="https://www.acc.edu.au/hobart/">Hobart, TAS</a></Item>
        </List>
      </Wrapper>
    );
  }

}

export default SchoolList;
