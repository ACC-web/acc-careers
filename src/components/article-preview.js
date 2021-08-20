import React from 'react'
import { Link } from 'gatsby'
import _ from 'lodash'
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 1.5rem 0;
  position:relative;
  display: block;
 `


const Linky = styled(Link)`
  position:relative;
  display: block;
    
    > .chevron{
        position: absolute;
        right: 1rem;
        top:30%;
        width: auto;
        height: 1rem;
        
        transition-property: right;
        transition-duration: 500ms;
        transition-timing-function: ease;
    }
    :hover{
        text-decoration: none;
        > .chevron{
            right: calc(1rem - 5px);
            transition-property: right;
            transition-duration: 100ms;
            transition-timing-function: ease;
        }
        
        > h2, > p{
             color: #0069AF;
             text-decoration: none;
        }
    }
 
`


const Title = styled.h2`
  font-size: 1.1rem;
  text-decoration: none;
  margin-bottom: 0.1rem;
  font-weight: 700;
  color: #646E78;
  width: 80%;
`

const Location = styled.p`
  font-weight: 500;
  margin: 0;
`

export default ({ article }) => (
  <Wrapper>
      <Linky to={`/${_.kebabCase(article.jobLocation.jobLocation)}/${article.slug}`}>
        <Title>{article.jobTitle}</Title>
        <Location>ACC {article.jobLocation.jobLocation}</Location>
          {/*todo: once we have a good batch of fresh jobs I will enable the posted on content, because its currently got the same date. v1*/}
          {/*<p className="smaller">Job posted on {article.createdAt}</p>*/}
        <svg className="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.347 18.4"><path fill="#97a4b2" fillRule="evenodd" d="M0 16.253L2.147 18.4l9.2-9.2-9.2-9.2L0 2.147 7.054 9.2z" data-name="path"/></svg>
    {/*<p*/}
    {/*  dangerouslySetInnerHTML={{*/}
    {/*    __html: article.jobDescription.childMarkdownRemark.html,*/}
    {/*  }}*/}
    {/*/>*/}
    {/*  <span>{article.jobDescription.childMarkdownRemark.excerpt}</span>*/}
      </Linky>
  </Wrapper>
)
// path: `/tags/${_.kebabCase(tag)}/`, //RH changes this to hopefully contain all the blog pages inside the /blog directory
