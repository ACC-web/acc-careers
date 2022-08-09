import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout'
import {Helmet} from "react-helmet";

class NotFoundPage extends React.Component {
  render() {
    const { data, location } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={location}>
        <Helmet title={siteTitle} />
        <h1>Not Found</h1>
        <p>Oops! This page could not be found. You might have followed an incorrect link.</p>
        <p>Please use your browser's back button or the menu above to locate the page you are after.</p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
