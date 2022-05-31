const Promise = require('bluebird');
const path = require('path');
const _ = require('lodash');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const jobTemplate = path.resolve('src/templates/job-template.js');
  const locationsTemplate = path.resolve('src/templates/locations-template.js');

  const queryResults = await graphql(`
    {
      allContentfulAccJob(filter: {jobLocation: {jobLocation: {ne: "Medowie (NSW)"}}}) {
        nodes {
          id
          slug
          jobTitle
          jobLocation {
            jobLocation
          }
          jobForm {
            formUrl
          }
          jobDescription {
            childMarkdownRemark {
              html
            }
          }
        }
        totalCount
      }
      allContentfulJobLocation(filter: {jobLocation: {ne: "Medowie (NSW)"}}) {
        totalCount
        nodes {
          jobLocation
          id
          acc_job {
            jobTitle
            slug
          }
        }
      }
    }
  `)



  queryResults.data.allContentfulAccJob.nodes.forEach(node => {
    createPage({
      path: `${_.kebabCase(node.jobLocation.jobLocation)}/${node.slug}/`,
      component: jobTemplate,
      context: {
        job: node,
        id: node.id,
      }
    });
  });

  // const jobLocations = queryResults.data.allContentfulJobLocation.nodes
  queryResults.data.allContentfulJobLocation.nodes.forEach(node => {

  // jobLocations.forEach(node => {
    const place = `${node.jobLocation}`
    createPage({
      path: `${_.kebabCase(node.jobLocation)}/`,
      component: locationsTemplate,
      context: {
        jobsLocation: place,
        id: node.id,
      },
    });
  });

};
