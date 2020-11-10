import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'

import heroStyles from '../components/hero.module.css'


const JobTemplate = ({ data, location }) => {


    const job = data.contentfulJob
    const siteTitle = data.site.siteMetadata.title

    return (
        <>
          <Layout location={location} title={siteTitle}>
            <div style={{ background: '#fff' }}>
              <Helmet>
                  <meta charSet="utf-8" />
                  <title>{`${job.jobTitle} | ${siteTitle}`} </title>
                  <link rel="canonical" href="https://acc.edu.au/careers" />
            </Helmet>
              <div className="wrapper">
                <h1 className="section-headline">{job.jobTitle}</h1>
                <p
                  style={{
                    display: 'block',
                  }}
                >
                  {job.createdAt}
                </p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: job.jobDescription.childMarkdownRemark.html,
                  }}
                />
                <a className="typeform-share button MORETON_FORM"
                   href={`${job.jobForm.formUrl}`}
                   dataMode="popup"
                   target="_blank">APPLY </a>

              </div>
              </div>
          </Layout>
        </>
    )

}

export default JobTemplate

export const pageQuery = graphql`
  query BlogPostBySlug {
    contentfulJob {
      slug
      id
      createdAt
      jobTitle
      jobLocation {
        jobLocation
      }
      jobForm {
        formUrl
      }
      jobDescription {
        childMarkdownRemark {
          html
        }
      }
    }
      site {
          siteMetadata {
              title
          }
      }
  }
`
