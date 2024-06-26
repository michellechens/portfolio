import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as LaptopSVG } from '../../assets/images/laptop.svg';
import device from '../../assets/responsive/breakpoints';
import { contactData } from '../../data/index';
import './wave.css';

const ContactWrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
`;
const Title = styled.div.attrs(({ scroll }) => ({
    style: {
        transform: `translateX(-${scroll}%)`,
    },
}))`
    position: absolute;
    top: 10%;
    right: -100%;
    transition: transform 0.5s ease-out;
    font-size: 60px;
    font-family: 'AvenirHeavy';
    color: var(--title-color);
    @media ${device.mobileL} {
        font-size: 80px;
    }
    @media ${device.tablet} {
        font-size: 100px;
    }
    @media ${device.laptop} {
        font-size: 150px;
    }
    @media ${device.laptopL} {
        font-size: 200px;
    }
    @media ${device.desktop} {
        font-size: 350px;
    }
`;
const Description = styled.div`
    position: absolute;
    left: 5%;
    width: 70%;
    margin-top: 10%;
    font-size: 16px;
    font-family: 'AvenirLight';
    color: var(--text-color);
    @media ${device.mobileL} {
        font-size: 20px;
    }
    @media ${device.tablet} {
        font-size: 24px;
    }
    @media ${device.laptop} {
        font-size: 28px;
    }
    @media ${device.laptopL} {
        font-size: 32px;
    }
    @media ${device.desktop} {
        font-size: 60px;
    }
`;
const ContactItems = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 2rem;
`;
const Link = styled.a`
    text-decoration: none;
    color: var(--text-color);
    &:hover {
        color: var(--title-color);
    }
`;

function Contact() {
    const [scrollPercent, setScrollPercent] = useState(0);

    const handleScroll = (event) => {
        const { body, documentElement } = event.srcElement;
        const sd = Math.max(body.scrollTop, documentElement.scrollTop);
        let sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
        const minlimit = (documentElement.clientHeight * 1000) / documentElement.scrollHeight;
        if (sp >= minlimit && sp <= 100) {
            sp -= minlimit;
            setScrollPercent(sp);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <ContactWrapper id="contact">
            <Title scroll={scrollPercent * 6}>
                CONTACT
            </Title>
            <Description>
                Hello! Please get in touch with me if any Front-end Engineer opportunities. I'd love to hear from you!
                <ContactItems>
                    <LaptopSVG width={200} height={200} />
                    <Link href={contactData.github} target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </Link>
                    <Link href={contactData.linkedin} target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </Link>
                    <Link href={`mailto:${contactData.email}`}>
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </Link>
                    {/*
                        <Link href={contactData.resume} target="_blank">
                            <FontAwesomeIcon icon={faFilePdf} size="2x" />
                        </Link>
                    */}
                </ContactItems>
            </Description>
        </ContactWrapper>
    );
}

export default Contact;
