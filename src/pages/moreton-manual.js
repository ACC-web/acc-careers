//import gatsby stuff
import React from "react"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import Hero from "../components/hero"
import get from 'lodash/get'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import styles from "./blog.module.css";

const Top = styled.div`
  position:relative;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: unset;
  overflow: hidden;
  z-index: 200;
  
  height: 75vh;
  max-height: 600px;
  
  h1{
    padding: 5rem 0;
    margin: 0 auto;
    z-index: 900;
    color: #fff;
    font-weight: 700;
    justify-self: start;
  }
  &>.hero{
    justify-self: center;
    z-index: 100;
    top: -500px
  }
  
  @media(min-width: 768px){}
  @media(max-width: 1100px){
    height: 11rem
  }
`

class MoretonPage extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const posts = get(this, 'props.data.allContentfulJob.edges')
        const totalCount = get(this, 'props.data.allContentfulJob.totalCount')

        const locationHeader = `${totalCount} position available at Moreto${totalCount === 1 ? "" : "s"} n`
        const title = `Blogger`
        return (
            <Layout location={this.props.location}>
                <div style={{ background: '#fff' }}>
                    <Helmet title={siteTitle} />
                    <Top>
                        {/*<h1>Blog</h1>*/}
                        <Hero title={title} className="hero" />
                    </Top>
                    <div className="wrapper">

                        <h1 className="section-headline">{locationHeader}</h1>
                        <ul className="article-list">
                            {posts.map(({ node }) => {
                                return (
                                    <li key={node.slug}>
                                        <ArticlePreview article={node} />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default MoretonPage

export const pageQuery = graphql`
    query MoretonPageQuery {
        allContentfulJob(filter: {jobLocation: {jobLocation: {in: "Moreton"}}}) {
            totalCount
            edges {
                node {
                    jobTitle
                    slug
                    jobLocation {
                        jobLocation
                    }
                    jobForm {
                        formUrl
                    }
                    jobDescription {
                        childMarkdownRemark {
                            html
                            excerpt(pruneLength: 200)
                        }
                    }
                    id
                }
            }
        }
    }
`