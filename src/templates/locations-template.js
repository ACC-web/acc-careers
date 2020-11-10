// import React from "react"
// import PropTypes from "prop-types"
// // Utilities
// import kebabCase from "lodash/kebabCase"
// // Components
// import { Helmet } from "react-helmet"
// import { Link, graphql } from "gatsby"
//
// //other stuff
// import get from 'lodash/get'
// import Hero from '../components/hero'
// import Layout from '../components/layout'
// import ArticlePreview from '../components/article-preview'
//
// const locationsTemplate = ({ pageContext, data, location }) => {
//     render() {
//         const siteTitle = data.site.siteMetadata.title
//
//         const {jobsLocation} = pageContext
//         const totalCount = get(this, 'props.data.allContentfulJobLocation.edges')
//         const jobs = get(this, 'props.data.allContentfulJobLocation.edges')
//
//         const locationHeader = `${totalCount} ${
//             totalCount === 1 ? "" : "s"
//         } position available at ${jobsLocation}`
//         return (
//             <>
//                 <Layout location={location} title={siteTitle}>
//                     <h1>{locationHeader}</h1>
//                     <ul>
//                         {jobs.map(({ node }) => {
//                             const {slug} = node.job.slug
//                             const {title} = node.job.jobTitle
//                             const {id} = node.job.id
//                             return (
//                                 <li key={id}>
//                                     <Link to={slug}>{title}</Link>
//                                 </li>
//                             )
//                         })}
//                     </ul>
//                     {/*
//                   This links to a page that does not yet exist.
//                   You'll come back to it!
//                 */}
//                     <Link to="/locations">All tags</Link>
//                 </Layout>
//             </>
//         )
//     }
// }
//
// export default locationsTemplate
//
// export const pageQuery = graphql`
//     query LocationTemplateQuery {
//         allContentfulJobLocation {
//             totalCount
//             edges {
//                 node {
//                     jobLocation
//                     job {
//                         slug
//                         jobTitle
//                         id
//                     }
//                 }
//             }
//         }
//         site {
//             siteMetadata {
//                 title
//             }
//         }
//     }
// `