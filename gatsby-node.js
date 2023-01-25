const Promise = require('bluebird');
const path = require('path');
const _ = require('lodash');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const jobTemplate = path.resolve('src/templates/job-template.js');
  const locationsTemplate = path.resolve('src/templates/locations-template.js');

  const queryResults = await graphql(`
    {
      allContentfulAccJob {
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
#      allContentfulLocation {
#        totalCount
#        nodes {
#          jobLocation
#          id
#          acc_job {
#            jobTitle
#            slug
#          }
#        }
#      }
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

  // Hardcode list instead of querying so that pages aren't created for non job locations (e.g. 'Medowie Blog")
  const jobLocations = [
    "Moreton (QLD)",
    "Singleton (NSW)",
    "Brightwaters (NSW)",
    "Erina (NSW)",
    "Marsden Park (NSW)",
    "Hume (VIC)",
    "Casey (VIC)",
    "Darling Downs (WA)",
    "Southlands (WA)",
    "Burnie (TAS)",
    "Hobart (TAS)",
    "Launceston (TAS)"
  ]

  // const jobLocations = queryResults.data.allContentfulJobLocation.nodes
  // queryResults.data.allContentfulLocation.nodes.forEach(node => {
  jobLocations.forEach(location => {

  // jobLocations.forEach(node => {
    createPage({
      path: `${_.kebabCase(location)}/`,
      component: locationsTemplate,
      context: {
        jobsLocation: location
      },
    });
  });

};
