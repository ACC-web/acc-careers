import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import styled from "styled-components"

//Select Imports
//https://react-select.com/home
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const Top = styled.div`

  &>.hero{
    justify-self: center;
    z-index: 100;
    top: -500px
  }
  
  @media(min-width: 768px){}
  @media(max-width: 1100px){
    height: 11rem
  }
`

const Wrapper = styled.section`
  position:relative;
  max-width: 1100px;
  padding: 0 4rem;
  z-index: 200;
  
  background-color: #fff;
  
    @media(min-width: 768px) and (max-width: 1100px){
      //margin: -13rem auto auto auto;
  }
      @media(min-width: 1100px){
        margin: -13rem auto auto auto;
}
`

const LocationsCount = styled.ul`
  padding: 0;
  margin-top: 1rem;
  li{
    list-style-type: none;
    
    a{
      color: #646E78;
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
      width: 66%;
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

class RootIndex extends React.Component  {
// export default function AnimatedMulti() {

  state = {
    selectedOption: null,
  };

  handleChange = selectedOption => {
    this.setState(
        { selectedOption },
        () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  render( data ) {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    const job = get(this, 'props.data.allContentfulJob.edges')
    // Select options
    // const locationOptions = get(this, 'props.data.allContentfulJob.edges.node')
    const locationOptions = [
        { value: 'moreton', label: 'Moreton' },
        { value: 'marsden park', label: 'Marsden Park' },
        { value: 'southlands', label: 'Southlands' }
    ];
    const { selectedOption } = this.state;

    const filteredOptions = job.map(({ node }) => {
          if (selectedOption) {
            for (let i = 0; i < selectedOption.length; i++) {
              if (selectedOption[i].label === node.jobLocation.jobLocation) {
                return (
                    <li key={node.slug}>
                      <ArticlePreview article={node}/>
                    </li>
                )
              }
            }
          } else {
            return (
                <li key={node.slug}>
                  <ArticlePreview article={node}/>
                </li>
            )
          }
        }
    );

    const animatedComponents = makeAnimated();
    const title = `CAREERS`


    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <Top>
              <Hero title={title} className="hero" />
          </Top>
          <Wrapper>
            <section className="intro">
              <p><strong>Discover your calling</strong></p>
              <p>Is God calling you to work in a vibrant and thriving organisation? Australian Christian Colleges are places with great culture, where genuine Christian faith is lived out in a high-performance environment.
                The ACC Group offers career advancement across our schools network, a trainee principals programme and staff discounts on school fees and long day care (where available).
                Please prayerfully consider the vacancies below.</p>
            </section>
              <h2 className="section-headline">Positions Vacant</h2>

              <JobsContainer>
                <FilterColumn>
                    <Select
                        closeMenuOnSelect={true}
                        components={animatedComponents}
                        defaultValue={[locationOptions[4], locationOptions[5]]}
                        isMulti
                        options={locationOptions}

                        value={selectedOption}
                        onChange={this.handleChange}
                    />
                    <LocationsCount>
                        <li><Link to="/moreton">Moreton ({get(this, 'props.data.moreton.totalCount')})</Link></li>
                        <li><Link to="/marsden-park">Marsden Park ({get(this, 'props.data.marsdenpark.totalCount')})</Link></li>
                    </LocationsCount>
                </FilterColumn>
                <JobsList>
                    <ul className="article-list">
                        {filteredOptions}
                    </ul>
                </JobsList>
            </JobsContainer>
          </Wrapper>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulJob {
      edges {
        node {
          jobTitle
          jobForm {
            formUrl
          }
          jobDescription {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 150)
            }
          }
          id
          createdAt
          jobLocation {
            jobLocation
          }
          slug
        }
      }
    }
    moreton: allContentfulJob(filter: {jobLocation: {jobLocation: {in: "Moreton"}}}) {
      totalCount
    }
    marsdenpark: allContentfulJob(filter: {jobLocation: {jobLocation: {in: "Marsden Park"}}}) {
      totalCount
    }
  }
`
