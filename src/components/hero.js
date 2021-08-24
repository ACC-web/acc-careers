import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
  width: 100%;
  position:relative;
  flex-direction: column;
  height: auto;
  
  h1{
    position:relative;
    padding: 2rem 0;
    margin: 0 auto;
    z-index: 900;
    color: #fff;
    font-size: 1.3rem;
    font-weight: 700;
    justify-self: start;
    
    @media(min-width: 768px){
      padding: 5rem 0;
      color: #fff;
      font-size: 1.38em;
    }

  }
`
const BackgroundImage = styled(GatsbyImage)`
  position: absolute;
    display: block;
    top: 0;
    width: 100%;
    height: auto;

    @media(min-width: 768px){
      top: -9rem;
    }
    @media(min-width:1100px){
      position: absolute; //This isnt activating
      top: -14rem;
    }
`


export default function Hero({ headingTitle }) {
    const imagedata = useStaticQuery(graphql`
        query {
            contentfulAsset(file: {fileName: {in: "Teacher_Primary_Classroom-11.jpg"}}) {
                gatsbyImageData(
                cropFocus: CENTER, 
                resizingBehavior: NO_CHANGE, 
                quality: 80)
                title
          }
        }
    `)
    return(
      <Wrapper>
        {headingTitle && <h1>{headingTitle}</h1>}
        <BackgroundImage
            className="background-image"
            image={imagedata.contentfulAsset.gatsbyImageData}
            alt={imagedata.contentfulAsset.title}
            objectFit="cover"
            objectPosition="50% 50%"
            style={{position: "absolute", top: "0", left: "0"}}
        />
      </Wrapper>
    )
}
