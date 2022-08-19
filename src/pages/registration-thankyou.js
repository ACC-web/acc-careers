import React from 'react'
import {graphql, Link} from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import styled from "styled-components"
import VideoGallery from '../components/video-gallery'
import { StaticImage } from "gatsby-plugin-image"

//Select Imports
//https://react-select.com/home
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

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
  height: 11rem;
  
  &>.hero{
    justify-self: center;
    z-index: 100;
    top: -500px
  }
  
  @media(min-width: 768px){
    height: 20rem;
  }
  
  @media(min-width: 1100px){
    min-height: 200px;
    height: 75vh;
    max-height: 600px;
  }
`

const Wrapper = styled.section`
  position:relative;
  max-width: 1100px;
  padding: 0 1rem;
  z-index: 200;
  
  background-color: #fff;
  
  @media(min-width: 768px){
  //at this width the header image still sits above the content
    padding: 1rem;
  }
  @media(min-width: 1100px){
  //this is when the layout changes to the centre white thing
    margin: -13rem auto auto auto;
    padding: 4rem;
  }
  
  h1{
    font-size: 0.85rem;
    font-weight: 500;
    margin: 0;
    color: #646E78;
    
    @media(min-width: 768px){
      font-weight: 700;
      //font-size: 1rem;
    }
  }
`

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  .text{
    display: flex;
    flex-direction: column;
    order: 1;
  }

  @media(min-width: 768px){
    display: block;
  }
`

const Linkedin = styled.a`
  width: 100%;
  float: none;
  border-left: 0;
  padding: 0;
  margin-top: 0;
  margin-left: 0;
  margin-bottom: 1rem;
  display: flex;

  order: 2;
  
  .logo{
    width: 75%;
    flex: 1;
    margin: auto;
  }
  p{
    flex: 2;
    text-align: left;
  }
  
  &:hover {
    text-decoration: none;
  }

  @media(min-width: 768px){
    display: block;
    width: 200px;

    float: right;
    border-top: 0;
    border-left: 1px solid #97A4B2;
    padding: 10px 0 10px 30px;
    margin-top: -30px;
    margin-left: 30px;

    .logo {
      width: 100%;
      margin: auto;
    }

    p {
      text-align: left;
      font-size: 100%;
    }
  }
`


const JobsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  @media(min-width: 768px){
    flex-direction: row
  }
`
const FilterColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 0;
  @media(min-width: 768px){
    width: 33%;
    padding-right: 2rem;
    border-right: 1px solid #97A4B2;
  }
`
const JobsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  
  @media(min-width: 768px){
    width: 75%;
    padding-left: 2rem;
  }
  
  .article-list{
    padding: 0;
    list-style-type: none;
  }
  li{
    border-top: 1px solid #646E78;
    
    :last-child{
      border-bottom: 1px solid #646E78;
    }
  }
`

class RegistrationThankyouPage extends React.Component  {
// export default function AnimatedMulti() {

  render( data ) {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')


    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{siteTitle}</title>
                {/*restrict bots from indexing page*/}
                <meta name="robots" content="noindex, nofollow" />
                {/*These tags are required for Linkedin*/}
            </Helmet>
          <Top>
              <Hero  className="hero" />
          </Top>
          <Wrapper>
            <section className="intro">
                <h2>Application Received</h2>

                <p>All done! Thanks for taking the time to complete this application.</p>
                <p>Your application has been received and you will be contacted in due course if your application has progressed to the next stage.</p>
            </section>
          </Wrapper>
        </div>
      </Layout>
    )
  }
}

export default RegistrationThankyouPage

export const pageQuery = graphql`
    query ConfirmationQuery {
        site {
            siteMetadata {
                title,
                siteUrl
            }
        }

    }
`
