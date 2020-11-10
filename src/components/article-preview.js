import React from 'react'
import { Link } from 'gatsby'
import _ from 'lodash'

import styles from './article-preview.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    <h3 className={styles.previewTitle}>
      <Link to={`/${_.kebabCase(article.jobLocation.jobLocation)}/${article.slug}`}>{article.jobTitle}</Link>
    </h3>
    {/*<p*/}
    {/*  dangerouslySetInnerHTML={{*/}
    {/*    __html: article.jobDescription.childMarkdownRemark.html,*/}
    {/*  }}*/}
    {/*/>*/}
      <span>{article.jobDescription.childMarkdownRemark.excerpt}</span>
  </div>
)
// path: `/tags/${_.kebabCase(tag)}/`, //RH changes this to hopefully contain all the blog pages inside the /blog directory
