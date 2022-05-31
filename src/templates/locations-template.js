import React from "react"
// Utilities
// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

//other stuff
import Hero from '../components/hero'
import Layout from '../components/layout'

import styled from "styled-components";

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

const locationsTemplate = ({ pageContext, data, location }) => {
        const siteTitle = data.site.siteMetadata.title
        const { jobsLocation } = pageContext
        // const location = get(this, 'props.data.allContentfulJobLocation')
        // const jobs = get(this, 'props.data.allContentfulAccJob.edges')
        const jobs =  data.allContentfulAccJob
        // const jobtitle =  data.allContentfulAccJob.edges.node.jobTitle

        const locationHeader = `${jobs.totalCount} position${jobs.totalCount === 1 ? "" : "s"}  available at ${jobsLocation}`

        return (
            <>
                <Layout location={location} title={siteTitle}>
                    <div style={{ background: '#fff' }}>
                        <Helmet>
                            <meta charSet="utf-8" />
                            <title>{`${jobsLocation} | ${siteTitle}`} </title>
                            <link rel="canonical" href="https://acc.edu.au/careers" />
                        </Helmet>
                        <Top>
                            <Hero title={locationHeader} className="hero" />
                        </Top>
                        <Wrapper>
                            <ul>
                                {jobs.edges.map(({ node }) => {
                                    const slug = node.slug
                                    const title = node.jobTitle
                                    const id = node.id
                                    return (
                                        <li key={id}>
                                            <Link to={slug}>{title}</Link>
                                            {/*<p className="smaller">Job posted on: {date}</p>*/}
                                        </li>
                                    )
                                })}
                            </ul>
                            {/*
                          This links to a page that does not yet exist.
                          You'll come back to it!
                        */}
                            <Link className="smaller" style={{ textAlign: "right", float: "right", marginBottom: "2rem"}} to="/">Back to all careers</Link>
                        </Wrapper>

                    </div>
                </Layout>
            </>
        )

}

export default locationsTemplate

export const pageQuery = graphql`
    query LocationTemplateQuery($jobsLocation: String) {
        allContentfulAccJob(filter: {jobLocation: {jobLocation: {eq: $jobsLocation}}}, sort: {order: DESC, fields: createdAt}) {
            edges {
                node {
                    id
                    jobTitle
                    slug
                    jobLocation {
                        jobLocation
                    }
                    createdAt(formatString: "dddd DD, MMMM, YYYY")
                }
            }
            totalCount
        }
        
        site {
            siteMetadata {
                title
            }
        }
    }
`
