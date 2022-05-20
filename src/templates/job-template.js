import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
// import { useLocation } from '@reach/router'
import Layout from '../components/layout'
import Hero from '../components/hero'

import styled from 'styled-components'

//Typeform
import { PopupButton } from '@typeform/embed-react'

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
  
  ul, 
  ol {
    margin-bottom: 1rem;
  }
  
  h3 {
    line-height: 1.55;
    font-size: 1rem;
    font-weight: 700;
    font-family: montserrat,sans-serif;
    color: #646e78;
    margin: 1rem 0 0 0;
  }

  .typeform-iframe-wrapper a.typeform-popup,
  .typeform-iframe-wrapper a.typeform-close{
      z-index: 999;
      background-color: #fff;
      border: 10px solid #fff;
      font-size: 27px !important;
      padding: 1px !important;
      justify-content: center;
      display: flex;
      line-height: 4px !important;
      border-radius: 50%;
      text-align: center !important;
  }
`

const JobTemplate = ({ data, location }) => {
    const job = data.contentfulJob
    const siteTitle = data.site.siteMetadata.title
    const siteUrl = data.site.siteMetadata.siteUrl
    const title = data.contentfulJob.jobTitle
    const pageTitle = `${title} | ${siteTitle}`
    const typeformUrl = data.contentfulJob.jobForm?.formUrl
    const jobMetaDescription = 'The ACC Group is offering a range of career opportunities around the country. Join our nation-wide network of schools as we aim to transform young people spiritually, academically, socially and physically.';
    const jobMetaImage = siteUrl + '/careers/acc-careers-meta-image.jpg';
    const jobUrl = siteUrl + location.pathname;

    return (
          <Layout location={location} title={siteTitle}>
              <div>
                  <Helmet>
                      <meta charSet="utf-8" />
                      <title>{pageTitle}</title>
                      <link rel="canonical" href="https://www.acc.edu.au/careers/" />
                      <meta name="description" content={jobMetaDescription} />

                      {/*These tags are required for Linkedin*/}
                      <meta property='og:title' content={pageTitle} />
                      <meta property='og:description' content={jobMetaDescription} />
                      <meta property='og:image' content={jobMetaImage} />
                      <meta property='og:url' content={jobUrl}/>

                      {/*These Tags are required for Twitter - might as well do these too (does hurt to have more)*/}
                      <meta name="twitter:title" content={pageTitle} />
                      <meta name="twitter:description" content={jobMetaDescription}/>
                      <meta name="twitter:image" content={jobMetaImage} />
                      <meta name="twitter:card" content={jobMetaImage} />
                  </Helmet>
                  <Top>
                      <Hero headingTitle={job.jobTitle} className="hero" />
                  </Top>
                  <Wrapper>
                      {/*todo: once we have a good batch of fresh jobs I will enable the posted on content, because its currently got the same date. v2*/}
                      {/*<p style={{display: 'block',}} className="smaller">Job posted at: {job.createdAt}</p>*/}
                      <div
                          dangerouslySetInnerHTML={{
                              __html: job.jobDescription.childMarkdownRemark.html,
                          }}
                      />
                      {/*{typeformUrl && <TypeFormModal link={typeformUrl} />}*/}
                      <PopupButton id={typeformUrl} className="my-button">
                         APPLY NOW
                      </PopupButton>
                  </Wrapper>

              </div>
          </Layout>
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
                title,
                siteUrl
            }
        }
    }
`
