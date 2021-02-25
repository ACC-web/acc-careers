import React from 'react'
import {graphql, Link, useStaticQuery} from "gatsby";
import styled from "styled-components";

const List = styled.ul`
    list-style-type: none;
    padding: 0;
    font-size: 0.8rem;
    li{
      margin: 5px 0;
    }
    a{
      color: #646E78;
      :hover{
          color: #0069AF;

      }
    }
`

export default function LocationList() {
    const data = useStaticQuery(graphql`
        query {
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
        }
    `)
    return(
        <List>
            <li><Link to="/moreton-qld">Moreton ({data.moreton.totalCount})</Link></li>
            <li><Link to="/singleton-nsw">Singleton ({data.singleton.totalCount})</Link></li>
            <li><Link to="/brightwaters-nsw">Brightwaters ({data.brightwaters.totalCount})</Link></li>
            <li><Link to="/marsden-park-nsw">Marsden Park ({data.marsdenpark.totalCount})</Link></li>
            <li><Link to="/hume-vic">Hume ({data.hume.totalCount})</Link></li>
            <li><Link to="/darling-downs-wa">Darling Downs ({data.darlingdowns.totalCount})</Link></li>
            <li><Link to="/southlandwa">Southlands ({data.southlands.totalCount})</Link></li>
            <li><Link to="/burnie-tas">Burnie ({data.burnie.totalCount})</Link></li>
            <li><Link to="/hobart-tas">Hobart ({data.hobart.totalCount})</Link></li>
            <li><Link to="/launceston-tas">Launceston ({data.launceston.totalCount})</Link></li>
        </List>
    )
}
