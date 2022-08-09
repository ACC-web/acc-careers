import React from "react";
// import styled from "@emotion/styled";

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

class EGuides extends React.Component {
  render() {
    return (
      <div>
        <h2>eGuides</h2>
        <List>
          <li><a target="_blank" rel="noopener noreferrer" href="/">Big School Ready Checklist</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="/">How to Read to Your Child</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="/">Meal Prepping School Lunches</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="/">The Ultimate Nack-to-School Checklist</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="/">Helping Your Child Adjust to High School</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="/">The Definitive Guide to Online School</a></li>
        </List>
      </div>
    );
  }
}


export default EGuides;
