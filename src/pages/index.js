import React from 'react'
import {graphql, Link} from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import styled from "styled-components"
import LocationList from "../components/locations-list"
import VideoGallery from '../components/video-gallery'

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
      h2{
        
      }
    }
`

// const LocationsCount = styled.ul`
//   padding: 0;
//   margin: 1rem 0;
//   li{
//     list-style-type: none;
//
//     a{
//       color: #646E78;
//     }
//   }
// `

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
      width: 25%;
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
    const Mor = get(this, 'props.data.moreton.totalCount')
    const Sing = get(this, 'props.data.singleton.totalCount')
    const Mp = get(this, 'props.data.marsdenpark.totalCount')
    const Hume = get(this, 'props.data.hume.totalCount')
    const Dar = get(this, 'props.data.darlingdowns.totalCount')
    const Sou = get(this, 'props.data.southlands.totalCount')
    const Hob = get(this, 'props.data.hobart.totalCount')
    const Bur = get(this, 'props.data.burnie.totalCount')
    const Lau = get(this, 'props.data.launceston.totalCount')
    const Bright = get(this, 'props.data.brightwaters.totalCount')

    const job = get(this, 'props.data.allContentfulJob.edges')
    // Select options
    // const locationOptions = get(this, 'props.data.allContentfulJob.edges.node')
    const locationOptions = [
        { value: 'Moreton (QLD)', label: 'Moreton (QLD)',},
        { value: 'Brightwaters (NSW)', label: 'Brightwaters (NSW)',},
        { value: 'Singleton (NSW)', label: 'Singleton (NSW)',},
        { value: 'Marsden Park (NSW)', label: 'Marsden Park (NSW)',},
        { value: 'Hume (VIC)', label: 'Hume (VIC)',},
        { value: 'Darling Downs (WA)', label: 'Darling Downs (WA)',},
        { value: 'Southlands (WA)', label: 'Southlands (WA)',},
        { value: 'Burnie (TAS)', label: 'Burnie (TAS)',},
        { value: 'Hobart (TAS)', label: 'Hobart (TAS)',},
        { value: 'Launceston (TAS)', label: 'Launceston (TAS)'},
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
          // not sure if this is supose to be here, but I thinkit hides an error. see here: https://stackoverflow.com/questions/45014094/how-do-i-fix-expected-to-return-a-value-at-the-end-of-arrow-function-warning
          // return null
        }
    );


    //////////////////////////////////////////

      let setFilterItem = (event) => {
          event.preventDefault();
          if(event.target.id && typeof event.target.id === typeof "") {
              let optionFilterText = event.target.id;
              let selectedFilter = locationOptions.find(obj => {
                  return obj.value === optionFilterText;
              })
              let existingFilters = [];
              if(selectedOption){
                  existingFilters = existingFilters.concat(selectedOption);
              }
              //If its not in the existing filters add it. Prevent duplication.
              existingFilters.push(selectedFilter);
              console.log("Selected Filter is: " + selectedFilter);
              console.log(existingFilters);
              this.setState(
                  {selectedOption: existingFilters}
              );
          }
      }
    ///////////////////////////////////////////


    const animatedComponents = makeAnimated();
    // const title = `CAREERS`



    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <Top>
              <Hero  className="hero" />
          </Top>
          <Wrapper>
            <section className="intro">
                <h1>CAREERS</h1>
              <p style={{fontSize: "1.3rem"}}>Discover your calling</p>
              <p>Is God calling you to work in a vibrant and thriving organisation? Australian Christian Colleges are places with great culture, where genuine Christian faith is lived out in a high-performance environment.
                The ACC Group offers career advancement across our schools network, a trainee principals programme and staff discounts on school fees and long day care (where available).
                Please prayerfully consider the vacancies below.</p>
                <br />
            </section>
              <h2 className="section-headline">Positions Vacant</h2>

              <JobsContainer>
                <FilterColumn>
                    <Select
                        closeMenuOnSelect={true}
                        components={animatedComponents}
                        isMulti
                        options={locationOptions}

                        value={selectedOption}
                        onChange={this.handleChange}
                    />
                    <br />
                    {/*<LocationList />*/}
                    <ul>
                        <li><Link to="/moreton-qld" id={"Moreton (QLD)"} onClick={setFilterItem}>Moreton ({Mor})</Link></li>
                        <li><Link to="/singleton-nsw" id={"Singleton (NSW)"} onClick={setFilterItem}>Singleton ({Sing})</Link></li>
                        <li><Link to="/brightwaters-nsw" id={"Brightwaters (NSW)"} onClick={setFilterItem}>Brightwaters ({Bright})</Link></li>
                        <li><Link to="/marsden-park-nsw" id={"Marsden Park (NSW)"} onClick={setFilterItem}>Marsden Park ({Mp})</Link></li>
                        <li><Link to="/hume-vic" id={"Hume (VIC)"} onClick={setFilterItem}>Hume ({Hume})</Link></li>
                        <li><Link to="/darling-downs-wa" id={"Darling Downs (WA)"} onClick={setFilterItem}>Darling Downs ({Dar})</Link></li>
                        <li><Link to="/southland-wa" id={"Southlands (WA)"} onClick={setFilterItem}>Southlands ({Sou})</Link></li>
                        <li><Link to="/burnie" id={"Burnie (TAS)"} onClick={setFilterItem}>Burnie ({Bur})</Link></li>
                        <li><Link to="/hobart-tas" id={"Hobart (TAS)"} onClick={setFilterItem}>Hobart ({Hob})</Link></li>
                        <li><Link to="/launceston-tas" id={"Launceston (TAS)"} onClick={setFilterItem}>Launceston ({Lau})</Link></li>
                    </ul>
                </FilterColumn>
                <JobsList>
                    <ul className="article-list">
                        {filteredOptions}
                    </ul>
                </JobsList>
            </JobsContainer>
              <VideoGallery />
          </Wrapper>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
    query HomeQuery {
        allContentfulJob(sort: {order: ASC, fields: createdAt}) {
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
                    createdAt(formatString: "dddd DD, MMMM, YYYY")
                    jobLocation {
                        jobLocation
                    }
                    slug
                }
            }
        }
        moreton: allContentfulJob(filter: {jobLocation: {jobLocation: {in: "Moreton (QLD)"}}}) {
            totalCount
        }
        singleton: allContentfulJob(filter: {jobLocation: {jobLocation: {in: "Singleton (NSW)"}}}) {
            totalCount
        }
        marsdenpark: allContentfulJob(filter: {jobLocation: {jobLocation: {in: "Marsden Park (NSW)"}}}) {
            totalCount
        }
        brightwaters: allContentfulJob(filter: {jobLocation: {jobLocation: {in: "Brightwaters (NSW)"}}}) {
            totalCount
        }
        hume: allContentfulJob(filter: {jobLocation: {jobLocation: {in: "Hume (VIC)"}}}) {
            totalCount
        }
        darlingdowns: allContentfulJob(filter: {jobLocation: {jobLocation: {in: "Darling Downs (WA)"}}}) {
            totalCount
        }
        southlands: allContentfulJob(filter: {jobLocation: {jobLocation: {in: "Southlands (WA)"}}}) {
            totalCount
        }
        burnie: allContentfulJob(filter: {jobLocation: {jobLocation: {in: "Burnie (TAS)"}}}) {
            totalCount
        }
        hobart: allContentfulJob(filter: {jobLocation: {jobLocation: {in: "Hobart (TAS)"}}}) {
            totalCount
        }
        launceston: allContentfulJob(filter: {jobLocation: {jobLocation: {in: "Launceston (TAS)"}}}) {
            totalCount
        }
        site {
            siteMetadata {
                title
            }
        }

    }
`
