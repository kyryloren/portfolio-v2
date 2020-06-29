import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// styles and anim
import styled from '@emotion/styled';
import { mixins, media } from '@styles';
import { Bubbles } from '../bubbles';

// scroll behaviour
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const StyledContainer = styled.section`
  ${mixins.flexCenter};
  position: relative;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin-top: 10rem;
  overflow-x: hidden;
`;

const StyledHeading = styled(motion.h1)`
  letter-spacing: -0.04em;
  display: flex;
  justify-content: left;
`;

const TextContainer = styled(motion.div)`
  max-width: 144rem;
  width: 100%;

  h1 {
    max-width: 60rem;
  }
`;

const ContentWrapper = styled(motion.div)`
  text-align: left;

  p {
    margin-bottom: 2.5rem;
    font-size: 1.5rem;
    ${media.phone`font-size: 1.25rem;`};
    position: relative;
    display: inline-block;
  }
`;

const FlexContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;

  ${media.desktop`
    grid-template-rows: 2fr;
    grid-template-columns: 1fr;
  `};
`;

const BubbleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${media.desktop`align-items: center;`};

  ${media.phablet`
    :after {
      content: "Please switch to a bigger display for a better look!";
      position: relative;
      text-align: center;
      color: var(--warning);
      font-weight: bold;
      margin-top: 1rem;
    }
  `};
`;

const About = ({ onCursor, data }) => {
  const animation = useAnimation();
  const contentAnim = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });

  useEffect(() => {
    if (inView) {
      animation.start('after');
      contentAnim.start('after');
    }
  }, [animation, contentAnim, inView]);

  const { frontmatter, html } = data[0].node;
  const { title } = frontmatter;

  const string = Array.from(title);
  return (
    <StyledContainer ref={contentRef} id="about">
      <TextContainer>
        <StyledHeading
          animate={animation}
          initial="before"
          variants={{
            before: {},
            after: { transition: { staggerChildren: 0.06 } },
          }}
          className="sub-title"
        >
          {string.map((letter, index) => (
            <motion.span
              style={{ position: 'relative' }}
              key={index}
              variants={{
                before: {
                  opacity: 0,
                  y: 50,
                  left: 100,
                  rotate: 100,
                  transition: {
                    type: 'spring',
                    damping: 16,
                    stiffness: 200,
                  },
                },
                after: {
                  opacity: 1,
                  y: 0,
                  left: 0,
                  rotate: 0,
                  transition: {
                    type: 'spring',
                    damping: 16,
                    stiffness: 200,
                  },
                },
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </StyledHeading>
        <FlexContainer>
          <ContentWrapper
            animate={contentAnim}
            initial="before"
            variants={{
              before: {},
              after: {
                transition: { staggerChildren: 0.2, delayChildren: 0.4 },
              },
            }}
            style={{ paddingTop: '3rem' }}
          >
            <motion.p
              variants={{
                before: {
                  opacity: 0,
                  y: 50,
                  left: 100,
                  rotate: 20,
                  transition: {
                    type: 'spring',
                    damping: 16,
                    stiffness: 200,
                  },
                },
                after: {
                  opacity: 1,
                  y: 0,
                  left: 0,
                  rotate: 0,
                  transition: {
                    type: 'spring',
                    damping: 16,
                    stiffness: 200,
                  },
                },
              }}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </ContentWrapper>
          <ContentWrapper
            animate={contentAnim}
            initial="before"
            variants={{
              before: { opacity: 0 },
              after: {
                opacity: 1,
                transition: { duration: 0.6, ease: 'easeInOut', delay: 0.8 },
              },
            }}
          >
            <BubbleWrapper>
              <Bubbles onCursor={onCursor} />
            </BubbleWrapper>
          </ContentWrapper>
        </FlexContainer>
      </TextContainer>
    </StyledContainer>
  );
};

export default About;

About.propTypes = {
  onCursor: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};
