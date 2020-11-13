import {graphql, Link, useStaticQuery} from 'gatsby';
import * as React from 'react';
import styled from "styled-components"
import {List, Heading2} from '../../styles/shared.ts';

import get from 'lodash/get'

import NewsFooter from "../news/news-footer";

const Wrapper = styled.div`
  p.small{
    padding: 0 1rem
  }
`


const LatestMediaReleaseList = () => {
    const data = useStaticQuery(graphql`
        query latestMediaReleaseListQuery {
            news: allContentfulNews(limit: 6, sort: {fields: [datePublished], order: DESC}) {
              edges {
                  node {
                      datePublished(formatString: "MMMM Do, YYYY")
                      title
                      slug
                  }
              }
            }
        }
    `)

    const newsitems = get(this, 'props.data.news.edges')

    // const { author, social } = data.site.siteMetadata
    return (
        <Wrapper>
            <H2>Latest Media Releases</H2>
            <List>
                {data.news.edges.map(({ node }) => {
                    return (
                        <li key={node.slug}>
                            <NewsFooter newsitems={node} />
                        </li>
                    )
                })}
            </List>
        </Wrapper>
    )
}

export default LatestMediaReleaseList

