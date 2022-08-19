import React from 'react'
import {graphql} from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import styled from "styled-components"


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


class RegistrationThankyouPage extends React.Component  {
// export default function AnimatedMulti() {

  render( data ) {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    //const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')

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
                title
                siteUrl
            }
        }

    }
`
