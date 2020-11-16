import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import styled from "styled-components"

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
const Background = styled(Img)`
    position:absolute;
    display: block;
    top: -5rem;
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


export default function Hero({ title }) {
    const imagedata = useStaticQuery(graphql`
        query {
            contentfulAsset(file: {fileName: {in: "Teacher_Primary_Classroom-11.jpg"}}) {
                id
                fluid(maxWidth: 2000, quality: 90, cropFocus: CENTER) {
                    ...GatsbyContentfulFluid_withWebp
                }
                title
            }
        }
    `)
    return(
        <Wrapper>
            <Background
                className="background-image"
                fluid={imagedata.contentfulAsset.fluid}
                alt={imagedata.contentfulAsset.title}
                objectFit="cover"
                objectPosition="50% 50%"
                style={{position: ""}}

            />
            <h1>{title}</h1>
        </Wrapper>
        )
}
