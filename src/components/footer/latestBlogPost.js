//https://www.gatsbyjs.org/packages/gatsby-source-rss-feed/
import {graphql, Link, useStaticQuery} from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'
import {List, Heading2} from '../../styles/shared.ts'

import get from 'lodash/get'

import NewsFooter from "../news/news-footer";

const Wrapper = styled.div`
  p.small{
    padding: 0 1rem
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

    const blogpost = get(this, 'props.data.blogitems.edges')

    // const { author, social } = data.site.siteMetadata
    return (
        <Wrapper>
            <Heading2>Latest Blog Posts</Heading2>
            <List>
                {data.blogitems.edges.map(({ node }) => {
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

