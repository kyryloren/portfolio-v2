import React from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { icon } from './settings';
import { css } from '@emotion/core';
import { useIconTransform } from './use-icon-transform';

export function Item({ row, col, planeX, planeY, word, size, margin }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);

  // Calculate the origin x and y offsets of this icon based on
  // its column and row position
  const xOffset = col * (size + margin) + (row % 2) * ((size + margin) / 2);
  const yOffset = row * size;

  // Transform the icon's x, y and scale based on the position of the draggable plane
  useIconTransform({ x, y, scale, planeX, planeY, xOffset, yOffset });

  return (
    <motion.div
      css={css`
        ${word === 'Drag me' &&
        `background: hsla(${Math.random() * 360}, 95%, 55%, 1);`}
      `}
      style={{
        position: 'absolute',
        left: xOffset,
        top: yOffset,
        x,
        y,
        scale,
        width: icon.size,
        height: icon.size,
        borderRadius: '50%',
        // This will change the color of an icon every render. In production
        // you'd want to save this as a ref or similar. But here it makes a nice
        // visual indicator that we're doing all this without any re-renders :)
        word,
      }}
    >
      <motion.h1
        style={{
          textAlign: 'center',
          marginTop: '70px',
          fontSize: '2.5rem',
        }}
      >
        {word}
      </motion.h1>
    </motion.div>
  );
}
