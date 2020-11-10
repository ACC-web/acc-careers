import React, { Component } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'


//Select Imports
//https://react-select.com/home

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

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

  render() {
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


    const animatedComponents = makeAnimated();



    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <div className="intro">
              <h1>CAREERS</h1>

              <p><strong>Discover your calling</strong></p>
              <p>Is God calling you to work in a vibrant and thriving organisation? Australian Christian Colleges are places with great culture, where genuine Christian faith is lived out in a high-performance environment.
                The ACC Group offers career advancement across our schools network, a trainee principals programme and staff discounts on school fees and long day care (where available).
                Please prayerfully consider the vacancies below.</p>
            </div>
            <h2 className="section-headline">Recent articles</h2>

            <Select
                closeMenuOnSelect={true}
                components={animatedComponents}
                defaultValue={[locationOptions[4], locationOptions[5]]}
                isMulti
                options={locationOptions}

                value={selectedOption}
                onChange={this.handleChange}
            />

            <ul className="article-list">
              {job.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
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
  }
`
