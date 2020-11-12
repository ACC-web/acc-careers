import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import Hero from '../components/hero'

import heroStyles from '../components/hero.module.css'
import styled from "styled-components";

const Wrapper = styled.section`
  max-width: 1100px;
  margin: auto;
  padding: 4rem;
`

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
              <Wrapper>
                <Hero jobcontent={ `${job}` }/>
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
              </Wrapper>

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
      allContentfulAsset(filter: {id: {in: "19dbb445-8033-5a6d-b042-9448a050575f"}}) {
          edges {
              node {
                  fluid {
                      src
                  }
                  title
                  id
              }
          }
      }
  }
`
