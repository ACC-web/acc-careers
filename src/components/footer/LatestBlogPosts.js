//https://www.gatsbyjs.org/packages/gatsby-source-rss-feed/
import {graphql, useStaticQuery} from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  p.small {
    padding: 0 1rem
  }
`

const Heading2 = styled.h2`
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  padding: 0;
  margin-top: 0;
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

const LatestBlogPosts = () => {
  const data = useStaticQuery(graphql`
    query latestBlogPostQuery {
      blogitems: allFeedAccBlog(limit: 9) {
        edges {
          node {
            title
            link
            id
          }
        }
      }
    }
  `)

  // const { author, social } = data.site.siteMetadata
  return (
    <Wrapper>
      <Heading2>Latest Blog Posts</Heading2>
      <List>
        {data.blogitems.edges.map(({node}) => {
          return (
            <li key={node.id}>
              <a href={node.link}>{node.title}</a>
            </li>
          )
        })}
      </List>
    </Wrapper>
  )
}

export default LatestBlogPosts

