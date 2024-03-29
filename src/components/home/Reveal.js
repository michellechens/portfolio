import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import device from '../../assets/responsive/breakpoints';

const Stage = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
`;
const moveUp = (init) => keyframes`
    0% {
        transform: translateY(${init}px);
    }
    100% {
        transform: translateY(0px);
    }
`;
const hideWhiteBlocks = () => keyframes`
    0% {
        opacity: 1;
        height: 35vh;
    }
    100% {
        opacity: 0;
        height: 0vh;
    }
`;
const TextToReveal = styled.div`
    font-family: ${props => props.fontFam};
    text-align: center;
    font-size: 50px;
    animation: ${props => (props.show ? moveUp(50) : 'none')} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${50 * 1.4}px);
    @media ${device.mobileM} {
        font-size: 60px;
        animation: ${props => (props.show ? moveUp(60) : 'none')} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
        transform: translateY(${60 * 1.4}px);
    }
    @media ${device.mobileL} {
        font-size: 80px;
        animation: ${props => (props.show ? moveUp(80) : 'none')} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
        transform: translateY(${80 * 1.4}px);
    }
    @media ${device.tablet} {
        font-size: 100px;
        animation: ${props => (props.show ? moveUp(100) : 'none')} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
        transform: translateY(${100 * 1.4}px);
    }
    @media ${device.laptop} {
        font-size: 140px;
        animation: ${props => (props.show ? moveUp(140) : 'none')} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
        transform: translateY(${140 * 1.4}px);
    }
    @media ${device.laptopL} {
        font-size: 150px;
        animation: ${props => (props.show ? moveUp(150) : 'none')} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
        transform: translateY(${150 * 1.4}px);
    }
    @media ${device.desktop} {
        font-size: 200px;
        animation: ${props => (props.show ? moveUp(200) : 'none')} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
        transform: translateY(${200 * 1.4}px);
    }
`;
const WhiteBlock = styled.div`
    position: absolute;
    background-color: var(--background-one);
    margin-right: 100%;
    width: 120%;
    height: 35vh;
    animation: ${hideWhiteBlocks} 0.5s linear forwards;
    animation-delay: 2s;
`;

function Reveal({ text, fontFam, timeDelay }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, timeDelay);
    }, [timeDelay]);

    return (
        <Stage>
            <TextToReveal
                show={show}
                fontFam={fontFam}
            >
                {text}
            </TextToReveal>
            <WhiteBlock />
        </Stage>
    );
}

Reveal.propTypes = {
    text: PropTypes.string.isRequired,
    fontFam: PropTypes.string,
    timeDelay: PropTypes.number.isRequired,
};
Reveal.defaultProps = {
    fontFam: 'Avenir Helvetica Ariel',
};

export default Reveal;
