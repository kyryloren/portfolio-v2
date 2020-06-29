import React, { useEffect } from 'react';
import { email as Email } from '@utils/config';

// styles and animation
import styled from '@emotion/styled';
import { Section, mixins } from '@styles';

// scroll behaviour
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
`;

const Links = styled(motion.div)`
  ${mixins.flexBetween};
  flex-wrap: wrap;
  margin-top: 3rem;
`;

const Contact = ({ onCursor }) => {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });

  useEffect(() => {
    if (inView) {
      animation.start('after');
    }
  }, [animation, inView]);

  const parent = {
    before: {},
    after: {
      transition: {
        staggerChildren: 0.95,
      },
    },
  };

  const child = {
    before: { y: 200, opacity: 0 },
    after: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  return (
    <StyledContainer ref={contentRef} id="contact">
      <motion.div animate={animation} initial="before" variants={parent}>
        <motion.h1 className="big-title" variants={child}>
          <motion.div style={{ display: 'inline' }}>
            If you have a project, program, or an idea in mind that you think I
            could help with, please don't hesitate to say hello...
          </motion.div>
          <Links>
            <a
              href={`mailto:${Email}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              onMouseMove={() => onCursor('pointer')}
              onMouseLeave={() => onCursor()}
              className="outsideInline"
            >
              Contact me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="nofollow noopener noreferrer"
              onMouseMove={() => onCursor('pointer')}
              onMouseLeave={() => onCursor()}
              className="outsideInline"
            >
              Resume
            </a>
          </Links>
        </motion.h1>
      </motion.div>
    </StyledContainer>
  );
};

export default Contact;
