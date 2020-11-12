import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import styled from "styled-components"

const Wrapper = styled.div`
  position:relative;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: unset;
  overflow: hidden;
  z-index: 200;
  
  height: 75vh;
  max-height: 600px;
  
  h1{
    padding: 5rem 0;
    margin: 0 auto;
    z-index: 900;
    color: #fff;
    font-weight: 700;
    justify-self: start;
  }

`

export default function Hero({ title }) {
    const data = useStaticQuery(graphql`
        query {
            contentfulAsset(id: {in: "19dbb445-8033-5a6d-b042-9448a050575f"}) {
                id
                fluid(maxWidth: 2500, quality: 90) {
                    ...GatsbyContentfulFluid
                }
                title
            }
        }
    `)
    return(
        <Wrapper>
            <h1>{title}</h1>
            <Img fluid={data.contentfulAsset.fluid} alt={data.contentfulAsset.title}/>
        </Wrapper>
        )
}
