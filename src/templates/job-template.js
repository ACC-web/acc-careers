import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Hero from '../components/hero'

import styled from "styled-components";

//Typeform
import Typeform from '../components/typeform-button'

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
  
  ul {
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
`

const JobTemplate = ({ data, location }) => {

    const job = data.contentfulJob
    const siteTitle = data.site.siteMetadata.title
    const title = data.contentfulJob.jobTitle
    const typeform = data.contentfulJob.jobForm?.formUrl

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
                        {/*todo: once we have a good batch of fresh jobs I will enable the posted on content, because its currently got the same date. v2*/}
                        {/*<p style={{display: 'block',}} className="smaller">Job posted at: {job.createdAt}</p>*/}
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
                        {typeform && <Typeform link={typeform} />}
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
