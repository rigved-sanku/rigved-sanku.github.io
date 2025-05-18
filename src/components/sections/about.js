import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;
  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;
  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }
  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);
    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);
      &:after {
        transform: translate(8px, 8px);
      }
      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }
    .img {
      position: relative;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }
    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }
    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  /* TODO: keep 6–8 that you like most */
  const skills = [
    'Python',
    'C++',
    'ROS',
    'PyTorch',
    'TensorFlow',
    'OpenCV',
    'TensorRT / ONNX',
    'Docker & AWS',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hey, I’m <strong>Rigved Sanku</strong> — a robotics & computer-vision engineer who
              loves turning cutting-edge research into real-world products. My fascination with
              perception began in undergrad while hacking together a Jarvis-like audio assistant for
              the visually impared using Vision-Language models; since then I’ve chased every
              project that lets me fuse math, code, and hardware.
            </p>

            <p>
              I just completed my internship as an ADAS Computer Vision Research Engineer at&nbsp;
              <a href="https://www.honda-ri.com/">Honda Research Institute</a>, where I build
              low-latency driver-intent prediction pipelines that run at &lt;30 ms on embedded GPUs
              of self driving cars (and recently filed my first US patent along the way). Before
              that I shipped crowd- monitoring and person-reID systems at MUSCO Vision, IA, USA and
              explored real-time action prediction with Indian Space Research Organization (ISRO),
              India.
            </p>

            <p>
              My mission is simple: design perception systems that make robots and vehicles safer,
              smarter, and more human-aware. Outside work you’ll find me open-sourcing tools,
              mentoring junior devs, or chasing new hiking trails around the Bay Area.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            {/* TODO: replace rigved.jpg with your actual headshot in src/images/ */}
            <StaticImage
              className="img"
              src="../../images/me.jpeg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Rigved Sanku headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
