import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Nav from './Nav';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import stripes from '../assets/images/stripes.svg';

const SiteBorderStylers = styled.div`
    max-width: 1024px;
    margin: 12rem auto 4rem auto;
    /* margin: clamp(2rem, 10vw, 12rem); */
    background: white url(${stripes});
    background-size: 1500px;
    padding: 5px;
    padding: clamp(5px, 1vw, 25px);
    box-shadow: 0 0 5px 3 px 3 pxx rgba(0, 0, 0, 0.044);
    border: 5px solid white;
    /* @media (min-width: 1100px) and (max-width: 99999px) {
        margin-left: auto;
        margin-right: auto;
    } */
`;

const ContentStyles = styled.div`
    background: white;
    padding: 2rem;
`;

export default function Layout({ children }) {
    return (
        <>
            <GlobalStyles />
            <Typography />
            <SiteBorderStylers>
                <ContentStyles>
                    <Nav />
                    {children}
                    <Footer />
                </ContentStyles>
            </SiteBorderStylers>
        </>
    );
}
