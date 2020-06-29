import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';

const HoverLink = styled(motion.div)`
  position: relative;
  text-decoration: none;
  display: inline-block;
  color: inherit;
  padding: 0 1px;
  transition: color ease 0.3s;

  ${!isMobile && `
    &::before,
    &::after {
      content: '';
      position: absolute;
      background-color: var(--accent);
      z-index: -1;
      height: 5%;
    }

    &::before {
      width: 0%;
      left: 0;
      bottom: 0;
      transition: width ease 0.4s;
    }

    &::after {
      width: 100%;
      left: 0;
      bottom: 0;
      transition: all ease 0.6s;
    }

    &:hover {
      &::before {
        width: 100%;
      }

      &::after {
        left: 100%;
        width: 0%;
        transition: all ease 0.2s;
      }
    }
  `}
`;

const ImageContainer = styled(motion.div)`
  position: fixed;
  height: 400px;
  background-size: cover;
  overflow: hidden;
  z-index: -4;
`;

function HoverImage({ children, imageSource, onCursor }) {
  const [imageTranslate, setImageTranslate] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleHoverEnter = () => {
    onCursor('hovered');
    setHovering(true);
  };

  const handleHoverExit = () => {
    onCursor();
    setHovering(false);
  };

  const mouseMove = (e) => {
    setImageTranslate({ x: e.clientX, y: e.clientY });
  };

  if (isMobile) {
    return <HoverLink>{children}</HoverLink>;
  }

  return (
    <>
      <HoverLink
        onMouseMove={mouseMove}
        onHoverStart={handleHoverEnter}
        onHoverEnd={handleHoverExit}
      >
        {children}
      </HoverLink>
      <ImageContainer
        animate={
          !!hovering
            ? {
                width: '300px',
                top: imageTranslate.y - 150 + 'px',
                left: imageTranslate.x - 150 + 'px',
              }
            : { width: 0 + 'px', top: 280 + 'px', left: 800 + 'px' }
        }
        initial={{ width: 0 }}
        css={css`
          background: url(${imageSource}) no-repeat 50% 70%;
        `}
      />
    </>
  );
}

export default HoverImage;
