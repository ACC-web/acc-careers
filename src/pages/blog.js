// import React from 'react'
// import { graphql } from 'gatsby'
// import get from 'lodash/get'
// import { Helmet } from 'react-helmet'
// import Layout from '../components/layout'
// import ArticlePreview from '../components/article-preview'
//
// class BlogIndex extends React.Component {
//   render() {
//     const siteTitle = get(this, 'props.data.site.siteMetadata.title')
//     const posts = get(this, 'props.data.allContentfulBlogPost.edges')
//
//     return (
//       <Layout location={this.props.location}>
//         <div style={{ background: '#fff' }}>
//           <Helmet title={siteTitle} />
//           <div>Blog</div>
//           <div className="wrapper">
//             <h2 className="section-headline">Recent articles</h2>
//             <ul className="article-list">
//               {posts.map(({ node }) => {
//                 return (
//                   <li key={node.slug}>
//                     <ArticlePreview article={node} />
//                   </li>
//                 )
//               })}
//             </ul>
//           </div>
//         </div>
//       </Layout>
//     )
//   }
// }
//
// export default BlogIndex
//
// export const pageQuery = graphql`
//   query BlogIndexQuery {
//     allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
//       edges {
//         node {
//           title
//           slug
//           publishDate(formatString: "MMMM Do, YYYY")
//           tags
//           description {
//             childMarkdownRemark {
//               html
//             }
//           }
//         }
//       }
//     }
//   }
// `
