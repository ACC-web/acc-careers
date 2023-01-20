import React from 'react'
import {graphql, Link, useStaticQuery} from "gatsby";
import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  font-size: 0.8rem;
  margin-bottom: 2rem;

  li {
    margin: 5px 0;
  }

  a {
    color: #646E78;

    :hover {
      color: #0069AF;

    }
  }
`

export default function LocationList() {
  const data = useStaticQuery(graphql`
    query {
      moreton: allContentfulAccJob(filter: {jobLocation: {jobLocation: {in: "Moreton (QLD)"}}}) {
        totalCount
      }
      singleton: allContentfulAccJob(filter: {jobLocation: {jobLocation: {in: "Singleton (NSW)"}}}) {
        totalCount
      }
      marsdenpark: allContentfulAccJob(filter: {jobLocation: {jobLocation: {in: "Marsden Park (NSW)"}}}) {
        totalCount
      }
      brightwaters: allContentfulAccJob(filter: {jobLocation: {jobLocation: {in: "Brightwaters (NSW)"}}}) {
        totalCount
      }
      hume: allContentfulAccJob(filter: {jobLocation: {jobLocation: {in: "Hume (VIC)"}}}) {
        totalCount
      }
      casey: allContentfulAccJob(filter: {jobLocation: {jobLocation: {in: "Casey (VIC)"}}}) {
        totalCount
      }
      darlingdowns: allContentfulAccJob(filter: {jobLocation: {jobLocation: {in: "Darling Downs (WA)"}}}) {
        totalCount
      }
      southlands: allContentfulAccJob(filter: {jobLocation: {jobLocation: {in: "Southlands (WA)"}}}) {
        totalCount
      }
      burnie: allContentfulAccJob(filter: {jobLocation: {jobLocation: {in: "Burnie (TAS)"}}}) {
        totalCount
      }
      hobart: allContentfulAccJob(filter: {jobLocation: {jobLocation: {in: "Hobart (TAS)"}}}) {
        totalCount
      }
      launceston: allContentfulAccJob(filter: {jobLocation: {jobLocation: {in: "Launceston (TAS)"}}}) {
        totalCount
      }
    }
  `)
  return (
    <List>
      <li><Link to="/moreton-qld">Moreton - QLD ({data.moreton.totalCount})</Link></li>
      <li><Link to="/singleton-nsw">Singleton - NSW ({data.singleton.totalCount})</Link></li>
      <li><Link to="/brightwaters-nsw">Brightwaters - NSW ({data.brightwaters.totalCount})</Link></li>
      <li><Link to="/marsden-park-nsw">Marsden Park - NSW({data.marsdenpark.totalCount})</Link></li>
      <li><Link to="/hume-vic">Hume - VIC ({data.hume.totalCount})</Link></li>
      <li><Link to="/casey-vic">Casey - VIC ({data.casey.totalCount})</Link></li>
      <li><Link to="/darling-downs-wa">Darling Downs - WA ({data.darlingdowns.totalCount})</Link></li>
      <li><Link to="/southlandwa">Southlands - WA({data.southlands.totalCount})</Link></li>
      <li><Link to="/burnie-tas">Burnie - TAS ({data.burnie.totalCount})</Link></li>
      <li><Link to="/hobart-tas">Hobart - TAS ({data.hobart.totalCount})</Link></li>
      <li><Link to="/launceston-tas">Launceston - TAS ({data.launceston.totalCount})</Link></li>
    </List>
  )
}
