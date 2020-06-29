import React from 'react';
import { Item } from './Item';

//styles
import { css } from '@emotion/core';
import { media } from '@styles';

//animation
import { motion, useMotionValue } from 'framer-motion';

const items = [
  ['Javascript', 'jQuery', 'Unity', 'HTML'],
  ['(S)CSS', 'Node.js', 'Gatsby', 'Photoshop'],
  ['Bootstrap', 'Firebase', 'Drag me', 'React', 'Github'],
  ['Wordpress', 'Sketch', 'Framer', 'Illustrator'],
  ['Framer', 'Xcode', 'Swift', 'Networking'],
];

export function Bubbles({ onCursor }) {
  const x = useMotionValue(-200);
  const y = useMotionValue(-170);

  return (
    <motion.div
      onMouseEnter={() => onCursor('pointer')}
      onMouseLeave={() => onCursor()}
      css={css`
        overflow: hidden;
        border-radius: 50px;
        position: relative;
        width: 610px;
        height: 700px;
        bottom: 60px;
        ${media.giant`
          width: 500px;
          height: 800px;
          bottom: 0px;
        `};
        ${media.bigDesktop`
          width: 400px;
          height: 1000px;
        `};
        ${media.desktop`
          background: var(--container);
          width: 600px;
          height: 500px;
        `};
        ${media.tablet`
          background: var(--container);
          width: 500px;
          height: 448px;
        `};
        ${media.thone`
          background: var(--container);
          width: 400px;
          height: 448px;
        `};
        ${media.phablet`
          background: var(--container);
          width: 330px;
          height: 448px;
        `};
        ${media.phone`
          background: var(--container);
          width: 230px;
          height: 448px;
          right: 10px;
        `};
      `}
    >
      <motion.div
        drag
        dragConstraints={{ left: -750, right: 130, top: -510, bottom: 60 }}
        style={{
          width: 800,
          height: 800,
          x,
          y,
          background: 'transparent',
        }}
      >
        {items.map((rows, rowIndex) =>
          rows.map((col, colIndex) => (
            <Item
              row={rowIndex}
              col={colIndex}
              planeX={x}
              planeY={y}
              word={col}
              size={200}
              margin={20}
            />
          ))
        )}
      </motion.div>
    </motion.div>
  );
}
