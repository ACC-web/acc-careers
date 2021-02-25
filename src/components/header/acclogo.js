import * as React from 'react';
import styled from "styled-components"


const Logo = styled.svg`

  flex-shrink: 0;
  display: block;
  margin-right: 24px;
  padding: 0;
  color: #fff;
  font-size: 1.7rem;
  line-height: 1em;
  font-weight: bold;
  letter-spacing: -0.5px;
  
  height: auto;
  width: 100%;

    :hover {
      text-decoration: none;
    }
 
  
`;


class AccLogo extends React.Component {

  render() {
    return (
      <>
        <a name="Link to homepage" href="https://www.acc.edu.au/index.html">
            <Logo id="acc-logo" className="Logo" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 447.8 111.1">
                <path style={{ fill: '#ffffff'}} d="M100.1 11.1C90.2 5.8 76.2.7 50.7.7 26.1.7 13.2 5.2 1.3 11c-1.1.6-1.5 42.5 9.9 64.8 12.1 23.5 28.5 29.8 39.5 34.5 11-4.7 27.4-10.9 39.5-34.5 11.4-22.2 11-64.1 9.9-64.7z"/>
                <linearGradient id="firstgradient" x1="19.3484" x2="88.0685" y1="-3.5153" y2="87.4067" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#3265ad"/>
                    <stop offset=".1524" stopColor="#2f5ea3"/>
                    <stop offset="1" stopColor="#1d3561"/>
                </linearGradient>
                <path fill="url(#firstgradient)" d="M50.7 111.1l-1.5-.6C38.5 106 22.3 99.1 10.5 76.2-.6 54.4-.6 14.3.5 11c0-.1.1-.5.5-.6C14 4 26.9 0 50.7 0c26.8 0 40.7 5.6 49.7 10.4 1.5.8.9 16.4.1 25-1.1 12-3.6 28.9-9.7 40.8-11.8 22.9-28 29.8-38.7 34.3l-1.4.6zM1.8 11.6C1 14.8.7 53.9 11.8 75.5c11.5 22.5 26.8 28.9 37.9 33.6l.9.4.9-.4c11.2-4.7 26.5-11.1 38-33.6 11.1-21.6 10.8-60.8 10-63.9C90.6 6.9 77 1.5 50.7 1.5c-23.4 0-36.1 3.8-48.9 10.1zm97.9.1zm-.2-.2z"/>
                <g>
                    <linearGradient id="second-gradient" x1="23.7669" x2="84.8036" y1="3.2068" y2="83.9632" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#3265ad"/>
                        <stop offset=".1524" stopColor="#2f5ea3"/>
                        <stop offset="1" stopColor="#1d3561"/>
                    </linearGradient>
                    <path fill="url(#second-gradient)" d="M97.6 13.3c-9.4-5-22.7-9.8-46.9-9.8-23.4 0-35.6 4.2-46.9 9.8-1.1.5-1.4 40.3 9.4 61.5 11.4 22.3 27.1 28.3 37.5 32.7 10.4-4.4 26-10.4 37.5-32.7C99 53.7 98.6 13.9 97.6 13.3zM27 61.2s-.7-8.1-.5-9.4c1.9-9.3 45.3-13 58.9-13.6 0 .1-53.1 8.7-58.4 23zM26.1 47s-.9-7.1 1.1-8.3c3.9-2.4 39-5.3 61.9-1.8 0 0-57.3.7-63 10.1zm-2.4-11.5c0 13.1 1.6 31.7 7.4 56.7 0 0-8.8-19.1-9.7-55.3v-1c-6.6 1.1-9.8 2-10.3 1.4-1.1-1.5-7-3.7 10.2-5.2C20.7 1.4 23.1 9 25 10.2c1 .6-.9 7.4-1.2 21.7 3.6-.3 8-.5 13.5-.7 35.2-1.3 56 4.5 56 4.5-35-4.3-57.2-2.2-69.6-.2z"/>
                </g>
                <path fill="#A1A2A1" d="M27 61.2s-.3-3-.4-5.7c-.1-1.7 8.3-9.7 58.8-17.3 0 .1-53.1 8.7-58.4 23zM26.1 47s-.1-1.1-.2-2.5c-.1-2.2 19.5-8 63.2-7.6 0 0-57.3.7-63 10.1z"/>
                <g fill="#fff">
                    <path d="M141.7 49.4l-3.2-7.6h-17.6l-3.2 7.6h-7.2l15.8-36.1h7.2l15.6 36.1h-7.4zm-18.4-13.6H136l-6.3-15.1-6.4 15.1zM161.5 41.2c1.6 1.6 3.8 2.4 6.5 2.4s4.8-.8 6.4-2.4c1.6-1.6 2.3-3.8 2.3-6.7V13.3h6.9v21.2c0 3.1-.6 5.8-1.9 8.2-1.3 2.3-3.1 4.1-5.4 5.3-2.4 1.2-5.1 1.9-8.3 1.9-3.2 0-6-.6-8.4-1.9-2.4-1.2-4.2-3-5.5-5.3-1.3-2.3-1.9-5-1.9-8.2V13.3h6.9v21.2c0 2.9.8 5.1 2.4 6.7zM209.3 20c-1.9-.6-3.6-.9-5.1-.9-1.6 0-3 .3-3.9.9-1 .6-1.4 1.5-1.4 2.6 0 1 .3 1.8 1 2.5s1.5 1.2 2.5 1.6c1 .4 2.4.9 4.1 1.4 2.4.7 4.4 1.4 6 2.2 1.6.7 2.9 1.8 4 3.2 1.1 1.4 1.6 3.3 1.6 5.6 0 2.2-.6 4.1-1.8 5.7-1.2 1.6-2.8 2.9-4.9 3.7-2.1.9-4.5 1.3-7.1 1.3-2.8 0-5.6-.5-8.2-1.6-2.7-1-5-2.4-7-4.2l2.9-5.9c1.8 1.7 3.9 3 6.1 4 2.3 1 4.4 1.4 6.3 1.4 1.9 0 3.4-.4 4.5-1.1 1.1-.7 1.6-1.7 1.6-3 0-1-.3-1.9-1-2.5-.7-.7-1.5-1.2-2.5-1.6-1-.4-2.4-.9-4.2-1.4-2.4-.7-4.4-1.4-6-2.1-1.5-.7-2.9-1.7-4-3.1-1.1-1.4-1.6-3.2-1.6-5.5 0-2.1.6-3.9 1.7-5.5s2.7-2.8 4.7-3.6c2-.9 4.4-1.3 7.1-1.3 2.3 0 4.6.3 6.9 1 2.3.7 4.3 1.6 6.1 2.8l-2.8 6c-1.8-1.1-3.7-2-5.6-2.6zM221.1 13.3h29.4v6.1h-11.2v29.9h-7V19.5h-11.2v-6.2zM278.4 49.4l-6.2-10.7c-.3 0-.7.1-1.3.1h-8.1v10.6h-6.9V13.3h15c4.7 0 8.3 1.1 10.8 3.2 2.5 2.2 3.8 5.2 3.8 9.2 0 2.8-.6 5.2-1.8 7.2-1.2 2-3 3.5-5.3 4.5l7.9 11.9h-7.9zm-15.7-16.7h8.1c2.6 0 4.6-.6 6-1.7 1.4-1.1 2.1-2.8 2.1-5s-.7-3.8-2.1-4.9c-1.4-1.1-3.4-1.6-6-1.6h-8.1v13.2zM320.2 49.4l-3.2-7.6h-17.6l-3.2 7.6H289l15.8-36.1h7.2l15.6 36.1h-7.4zm-18.3-13.6h12.7l-6.3-15.1-6.4 15.1zM332.5 13.3h6.9v29.8H355v6.2h-22.5v-36zM360.8 13.3h6.9v36.1h-6.9V13.3zM403.7 49.4l-3.2-7.6h-17.6l-3.2 7.6h-7.2l15.8-36.1h7.2l15.6 36.1h-7.4zm-18.3-13.6H398l-6.3-15.1-6.3 15.1zM440.8 13.5h6.6v35.7H441l-18.3-24.6v24.6H416V13.5h6.5l18.4 24.6V13.5z"/>
                    <g>
                        <path d="M125.8 62.1c-1-.5-2.1-.8-3.1-.8-1.3 0-2.4.3-3.5.9-1.1.6-1.9 1.5-2.5 2.6s-.9 2.3-.9 3.6.3 2.5.9 3.6 1.4 1.9 2.5 2.6c1.1.6 2.2 1 3.5 1 1 0 2-.2 3.1-.7 1-.5 2-1.1 2.8-2l3 3.3c-1.2 1.2-2.6 2.2-4.2 3-1.6.7-3.3 1.1-4.9 1.1-2.2 0-4.2-.5-6-1.5-1.8-1-3.2-2.4-4.3-4.2-1-1.8-1.5-3.8-1.5-6s.5-4.1 1.6-5.9 2.5-3.2 4.3-4.2c1.8-1 3.9-1.5 6.1-1.5 1.6 0 3.2.3 4.8 1s2.9 1.6 4.1 2.8l-3 3.6c-.9-1.1-1.8-1.8-2.8-2.3zM134.5 57.2h5.1v9.4h10.2v-9.4h5.1v22.6h-5.1v-8.9h-10.2v8.9h-5.1V57.2zM173.8 79.8l-3.6-6.5H165v6.5h-5.1V57.2h9.8c2.9 0 5.2.7 6.8 2 1.6 1.4 2.4 3.3 2.4 5.8 0 1.7-.4 3.2-1.1 4.5-.7 1.2-1.8 2.2-3.1 2.8l4.8 7.5h-5.7zM165 69.1h4.7c1.4 0 2.5-.3 3.3-1 .8-.7 1.1-1.6 1.1-2.9 0-1.2-.4-2.2-1.1-2.8-.8-.6-1.9-1-3.3-1H165v7.7zM183.3 57.2h5.1v22.6h-5.1V57.2zM204.6 61.8c-1.3-.4-2.4-.6-3.3-.6-.9 0-1.6.2-2.1.5s-.8.8-.8 1.4c0 .8.4 1.4 1.1 1.8.7.4 1.9.9 3.4 1.3s2.8.9 3.8 1.4c1 .5 1.9 1.1 2.6 2 .7.9 1.1 2.1 1.1 3.6 0 1.4-.4 2.7-1.1 3.7-.8 1-1.8 1.8-3.1 2.4-1.3.5-2.9.8-4.6.8-1.8 0-3.6-.3-5.4-1s-3.3-1.5-4.6-2.6l2-4.2c1.1 1 2.5 1.9 3.9 2.5 1.5.6 2.8.9 4.1.9 1.1 0 1.9-.2 2.5-.6.6-.4.9-.9.9-1.7 0-.6-.2-1.1-.6-1.4s-.9-.7-1.5-.9c-.6-.2-1.5-.5-2.5-.8-1.5-.4-2.8-.9-3.8-1.3s-1.8-1.1-2.5-2c-.7-.9-1.1-2.1-1.1-3.5s.4-2.5 1.1-3.6c.7-1 1.8-1.8 3.1-2.4 1.3-.5 2.8-.8 4.6-.8 1.5 0 3.1.2 4.6.7 1.5.5 2.8 1.1 4 1.8l-2 4.2c-1.3-.6-2.5-1.2-3.8-1.6zM211.7 57.2h18.9v4.3h-6.9v18.3h-5.1V61.5h-6.9v-4.3zM233.4 57.2h5.1v22.6h-5.1V57.2zM260.2 79.8l-1.8-4.4h-10.5l-1.8 4.4h-5.3l9.8-22.6h5.3l9.7 22.6h-5.4zm-10.6-8.5h7.1l-3.6-8.8-3.5 8.8zM283.6 57.2h4.8v22.6h-4.6l-10.9-14.5v14.5H268V57.2h4.6l11 14.6V57.2z"/>
                    </g>
                    <g>
                        <path d="M314.6 62.1c-1-.5-2.1-.8-3.1-.8-1.3 0-2.4.3-3.5.9-1.1.6-1.9 1.5-2.5 2.6s-.9 2.3-.9 3.6.3 2.5.9 3.6 1.4 1.9 2.5 2.6c1.1.6 2.2 1 3.5 1 1 0 2-.2 3.1-.7 1-.5 2-1.1 2.8-2l3 3.3c-1.2 1.2-2.6 2.2-4.2 3-1.6.7-3.3 1.1-4.9 1.1-2.2 0-4.2-.5-6-1.5-1.8-1-3.2-2.4-4.3-4.2-1-1.8-1.5-3.8-1.5-6s.5-4.1 1.6-5.9 2.5-3.2 4.3-4.2c1.8-1 3.9-1.5 6.1-1.5 1.6 0 3.2.3 4.8 1s2.9 1.6 4.1 2.8l-3 3.6c-.8-1.1-1.8-1.8-2.8-2.3zM339.6 58.3c1.9 1 3.3 2.4 4.4 4.2s1.6 3.8 1.6 5.9-.5 4.2-1.6 5.9c-1.1 1.8-2.5 3.2-4.4 4.2-1.9 1-3.9 1.5-6.2 1.5s-4.3-.5-6.2-1.5c-1.9-1-3.3-2.4-4.4-4.2s-1.6-3.8-1.6-6 .5-4.1 1.6-5.9 2.5-3.2 4.4-4.2c1.8-1 3.9-1.5 6.2-1.5 2.3.1 4.4.6 6.2 1.6zm-9.5 3.9c-1.1.6-1.9 1.5-2.6 2.6s-.9 2.3-.9 3.6c0 1.3.3 2.6 1 3.6.6 1.1 1.5 2 2.5 2.6 1.1.6 2.2 1 3.5 1s2.4-.3 3.4-1c1-.6 1.9-1.5 2.5-2.6s.9-2.3.9-3.7c0-1.3-.3-2.5-.9-3.6s-1.4-2-2.5-2.6c-1-.6-2.2-1-3.4-1s-2.5.5-3.5 1.1zM349 57.2h5.1v18.1h9.7v4.5H349V57.2zM366.8 57.2h5.1v18.1h9.7v4.5h-14.8V57.2zM384.6 57.2h17.2v4.2h-12.1v4.9h10.9v4.2h-10.9v5h12.5v4.2h-17.6V57.2zM430.2 57.2h17.2v4.2h-12.1v4.9h10.9v4.2h-10.9v5h12.5v4.2h-17.6V57.2zM413.3 62.2c1.1-.6 2.3-1 3.6-1 1.1 0 2.2.2 3.3.7 1.1.5 2.1 1.1 2.9 1.9l2.9-3.6c-1.2-1-2.5-1.9-4.1-2.5s-3.2-.9-4.9-.9c-2.3 0-4.4.5-6.3 1.5-1.9 1-3.4 2.4-4.4 4.2s-1.6 3.8-1.6 5.9c0 2.2.5 4.2 1.6 6s2.5 3.2 4.3 4.2c1.8 1 3.9 1.5 6.1 1.5 1.5 0 3.2-.3 4.8-.8s3.1-1.3 4.3-2.1V66.3h-10.7v4.2h6.2v3.9c-.7.4-1.5.7-2.3.9-.8.2-1.5.3-2.2.3-1.3 0-2.5-.3-3.6-1-1.1-.6-1.9-1.5-2.6-2.6s-1-2.3-1-3.7c0-1.3.3-2.5.9-3.6.8-1 1.7-1.8 2.8-2.5z"/>
                    </g>
                </g>
            </Logo>
        </a>
      </>
    );
  }

}
export default AccLogo;
