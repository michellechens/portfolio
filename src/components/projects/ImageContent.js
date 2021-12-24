import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { projectData } from '../../constants/index';
import Images from './Images';

const ImageContainer = styled.div`
    width: 50%;
    margin-left: 60%;
    display: flex;
    flex-flow: column nowrap;
`;
const ImageBox = styled.div`
    height: 100vh;
    margin-top: 40vh;
    position: relative;
`;

function ImageContent() {

    const boxHeight = 140;
    const [screenHeight, setScreenHeight] = useState(0);
    const [scrollHeight, setScrollHeight] = useState(0);
    const [scrollPercent, setScrollPercent] = useState(0);

    const handleScroll = () => {
        const { body, documentElement } = window.document;
        const sd = Math.max(body.scrollTop, documentElement.scrollTop);
        const sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
        const minlimit = (documentElement.clientHeight * 100) / documentElement.scrollHeight;
        const maxlimit = (documentElement.clientHeight * 1040) / documentElement.scrollHeight;
        if (sp >= minlimit && sp <= maxlimit) {
            setScrollPercent(sp);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            setScrollHeight(Math.round(window.document.documentElement.scrollHeight));
            setScreenHeight(Math.round(window.document.documentElement.clientHeight));
            window.removeEventListener('scroll', handleScroll);
        }
    });

    return (
        <ImageContainer>
            <ImageBox>
                <Images
                    projectIndex={1}
                    boxHeight={boxHeight}
                    screenHeight={screenHeight}
                    scrollHeight={scrollHeight}
                    scrollPercent={scrollPercent}
                />
            </ImageBox>
        </ImageContainer>
    );
}

export default ImageContent;
