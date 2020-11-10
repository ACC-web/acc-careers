import React from "react"
import PropTypes from "prop-types"
// Utilities
import kebabCase from "lodash/kebabCase"
// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

//other stuff
import get from 'lodash/get'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import styles from "./blog.module.css";

class MoretonPage extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const posts = get(this, 'props.data.allContentfulJob.edges')
        const totalCount = get(this, 'props.data.allContentfulJob.totalCount')

        const locationHeader = `${totalCount} ${
            totalCount === 1 ? "" : "s"
        } position available at Moreton`

        return (
            <Layout location={this.props.location}>
                <div style={{ background: '#fff' }}>
                    <Helmet title={siteTitle} />
                    <div className={styles.hero}>Blog</div>
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