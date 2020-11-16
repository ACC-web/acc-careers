import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const TwitterContainer = styled.div`
    .header{
        width: 100%;
        border-bottom: 1px solid #fff;
        
        display: flex;
        flex-direction: row;
        
        font-size: 1.1rem;
        line-height: 1rem;
        
        //h2{
        //  font-size:inherit;
        //  line-height: inherit;
        //  margin: 0;
        //}
        
        p, a{
              margin: 0;
              text-decoration: none;
              font-size: inherit;
              line-height: inherit;

        }
        
        a {
          color: #fff;
        }
    }
`

const Heading2 = styled.h2`
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    padding: 0;
    margin-top: 0;
`

const TweetItem = styled.div`
    padding: 15px 0;  
    
    p{
      line-height: 1rem;
      font-size: 0.7rem;
      margin: 0;
      color: #fff;
      
      a{
        color: #fff;
      }
    }                   
`

const UserInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`

const ProfileImage = styled.img`
  border-radius: 100%;
  width: 40px;
  height: 40px;
`

const NameHandle = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 0.5rem;
  margin-left: 1rem;
  
    p{
      line-height: 1rem;
      font-size: 0.7rem;
      margin: 0;
      color: #fff;
      
      a{
        color: #fff;
      }
    }
`

const TweetText = styled.div`
  width: 100%;
  font-size: 70%;
  line-height: 1rem;
  font-weight: 400;
  color: #fff;
`

const TwitterBottom = styled.p`
  text-align: right;
  font-size: 70%;
  //width: calc(100% - 12px);
  //background: #0069B4;
  //padding: 6px;
  //border-radius: 5px;
  text-align: center;
  
  a{
    text-decoration: none;
    color: #fff;
    font-size: 80%;
  }
`


const TwitterWidget = () => (
    <>
        <StaticQuery
            query={graphql`
              query TwitterPosts {
                allTwitterStatusesUserTimelineGetPosts(limit: 1) {
                    edges {
                      node {
                        full_text
                        entities {
                          urls {
                            expanded_url
                          }
                        }
                      }
                    }
                  }
                }
            `}
            render={(data) => (

                <>
                    <TwitterContainer>
                        <div className="header">
                            <Heading2>Tweets by <a href="/">@ACC</a></Heading2>
                        </div>
                        {
                            data.allTwitterStatusesUserTimelineGetPosts.edges.map((item, i) => (
                                <TweetItem key={i}>
                                    {/*<UserInfo>*/}
                                    {/*    <ProfileImage src={item.node.user.profile_image_url} />*/}
                                    {/*    <NameHandle>*/}
                                    {/*        <p><strong>{item.node.user.name}</strong></p>*/}
                                    {/*        <p><Link target="_blank" to={`https://twitter.com/${item.node.user.screen_name}`}>@{item.node.user.screen_name}</Link></p>*/}
                                    {/*    </NameHandle>*/}
                                    {/*</UserInfo>*/}
                                    <TweetText>
                                        <p>{item.node.full_text}</p>
                                        {item.node.entities.urls.url}
                                    </TweetText>
                                </TweetItem>
                            ))
                        }
                        <TwitterBottom className="cta-main" style={{ padding: '1rem 0', width: '100%'}}><a rel="noreferrer" target="_blank" href="https://twitter.com/ACCGroup2">View on Twitter</a></TwitterBottom>
                    </TwitterContainer>
                </>
            )}
        />
    </>
)

export default TwitterWidget
