import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import Hero from '../components/hero'

import heroStyles from '../components/hero.module.css'
import styled from "styled-components";

//Typeform
import Typeform from '../components/typeform-button'
import { Link } from "gatsby"

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
    height: auto;

  
  
  &>.hero{
    justify-self: center;
    z-index: 100;
    top: -500px
  }
  
  @media(min-width: 768px){
    height: 11rem;
        
        img{
          filter: brightness(50%); //this darkens the image for desktop vide (on job pages only)

        }


  }
  @media(min-width: 1100px){
    height: 11rem
  }
`

const Wrapper = styled.section`
  max-width: 1100px;
  margin: auto;
  padding: 1rem;
  
  @media(min-width: 768px){
    padding: 4rem;
  }
`

const JobTemplate = ({ data, location }) => {

    const job = data.contentfulJob
    const typeform = data.contentfulJob.jobForm.formUrl
    const siteTitle = data.site.siteMetadata.title
    const title = data.contentfulJob.jobTitle

    return (
        <>
          <Layout location={location} title={siteTitle}>
            <div style={{ background: '#fff' }}>
              <Helmet>
                  <meta charSet="utf-8" />
                  <title>{`${job.jobTitle} | ${siteTitle}`} </title>
                  <link rel="canonical" href="https://acc.edu.au/careers" />
                </Helmet>
                <Top>
                    <Hero title={title} className="hero" />
                </Top>
              <Wrapper>
                <p style={{display: 'block',}} className="smaller">
                    Job posted at: {job.createdAt}
                </p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: job.jobDescription.childMarkdownRemark.html,
                  }}
                />
                {/*<a className="typeform-share button MORETON_FORM"*/}
                {/*   href={`${job.jobForm.formUrl}`}*/}
                {/*   dataMode="popup"*/}
                {/*   target="_blank"*/}
                {/*   id="bt-popup"*/}
                {/*>APPLY </a>*/}
                <Typeform link={typeform} />
              </Wrapper>

            </div>
          </Layout>
        </>
    )

}

export default JobTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
      contentfulJob(id: { eq: $id }) {
          slug
          id
          createdAt(formatString: "dddd DD, MMMM, YYYY")
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
