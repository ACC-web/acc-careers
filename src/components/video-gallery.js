import React from 'react'
import Video from './video'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-wrap: wrap;
    //margin: 2rem 0;
    
    @media(min-width: 768px){
      flex-direction: row;
    }
`

const VideoItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1rem 0 1rem;
  height: auto;
  min-height: 250px;
 
  
  .video, iframe{
    width: 100%;
    display: block;
    height: 230px;
  }
  
  
  @media(min-width: 768px){
      width: calc(50% - 2rem);
      margin: 1rem 1rem 2rem 1rem;
      height: 250px;
          
          .video, iframe{
            width: 100%;
            display: block;
            height: 250px;
          }
    }
`

export default () => (
    <div style={{ marginTop: '4rem' }}>
        <h2>Hear from some of our team</h2>

        <Wrapper>
            <VideoItem>
                <Video
                    className="video"
                    videoSrcURL="https://player.vimeo.com/video/365660254?title=0&byline=0&portrait=0"
                    videoTitle="Cara Henley is a Year 2 teacher at ACC Moreton"
                />
                <p>Cara Henley is a Year 2 teacher at ACC Moreton</p>
            </VideoItem>
            <VideoItem>
                <Video
                    className="video"
                    videoSrcURL="https://player.vimeo.com/video/362189902?title=0&byline=0&portrait=0"
                    videoTitle="Allan Perry has been teaching at ACC Singleton for over 15 years"
                />
                <p>Allan Perry has been teaching at ACC Singleton for over 15 years</p>
            </VideoItem>
            <VideoItem>
                <Video
                    className="video"
                    videoSrcURL="https://player.vimeo.com/video/362190120?title=0&byline=0&portrait=0"
                    videoTitle="Jessica Charles is the K-2 Team Leader at ACC Marsden Park"
                />
                <p>Jessica Charles is the K-2 Team Leader at ACC Marsden Park</p>
            </VideoItem>
            <VideoItem>
                <Video
                    className="video"
                    videoSrcURL="https://player.vimeo.com/video/362189991?title=0&byline=0&portrait=0"
                    videoTitle="Emma Russel is the Year 9 Team Leader at ACC Marsden Park"
                />
                <p>Emma Russel is the Year 9 Team Leader at ACC Marsden Park</p>
            </VideoItem>
        </Wrapper>
    </div>
)
