import React, { useState } from 'react';

// styles and animation
import styled from '@emotion/styled';
import { Section, mixins, HoverImage, media, ThemeToggle } from '@styles';
import { motion } from 'framer-motion';

//images
import NY from '@images/other/nyc.jpg';
import pfp from '@images/other/pfp.png';

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
`;

const OpacityChange = styled(motion.div)`
  opacity: 1;
`;

const PfpWrapper = styled(motion.div)`
  position: absolute;
  background: url(${pfp}) no-repeat;
  align-self: center;
  height: 480px;
  z-index: 0;
  top: 400px;

  ${media.desktop`
    top: 400px;
    background-size: 400px;
    background-position: right top;
  `};
  ${media.thone`
    top: 600px;
    background-size: 300px;
    background-position: right top;
  `};
  ${media.phone`
    top: 75vh;
    background-size: 200px;
    background-position: right top;
  `};
`;

const Hero = ({ onCursor }) => {
  const [isVisible, setIsVisible] = useState(true);

  const parent = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.95,
        delayChildren: 0.8,
      },
    },
  };

  const child = {
    initial: { y: 200, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  const pfpAnim = {
    initial: { width: 0, opacity: 0, right: '0.5rem' },
    animate: {
      opacity: 0.4,
      right: '0.5rem',
      width: '480px',
      transition: { duration: 1.5, ease: [0.6, 0.06, -0.01, 0.9] },
    },
  };

  return (
    <StyledContainer hero>
      <motion.div variants={parent} initial="initial" animate="animate">
        <PfpWrapper
          variants={pfpAnim}
          onMouseEnter={() => onCursor('hovered')}
          onMouseLeave={() => onCursor()}
          whileHover={{ opacity: 1, scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        />
        <motion.h1 className="big-title" variants={child}>
          <motion.div
            style={{ display: 'inline' }}
            animate={!isVisible ? { opacity: 0.1 } : { opacity: 1 }}
          >
            <span role="img" aria-label="Hey you!">
              👋
            </span>{' '}
            Hey I'm Kyryl
            <ThemeToggle onCursor={onCursor} />
            , a passionate developer based in{' '}
          </motion.div>
          <HoverImage onCursor={onCursor} imageSource={NY}>
            <OpacityChange
              onMouseEnter={() => setIsVisible(false)}
              onMouseLeave={() => setIsVisible(true)}
            >
              New York
            </OpacityChange>
          </HoverImage>
          <motion.div
            style={{ display: 'inline' }}
            animate={!isVisible ? { opacity: 0.1 } : { opacity: 1 }}
          >
            . I have a drive for building high quality, polished user
            experiences, and working as a leader to deliver the best results
            possible.
          </motion.div>
        </motion.h1>
      </motion.div>
    </StyledContainer>
  );
};

export default Hero;
