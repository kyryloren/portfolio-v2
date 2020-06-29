import React from 'react';
import { Link } from 'gatsby';
import { useGlobalStateContext } from '../context/globalContext';

// styles
import styled from '@emotion/styled';
import { Main, media, mixins } from '@styles';

// animation
import { motion } from 'framer-motion';

const StyledMainContainer = styled(motion.div)`
  ${mixins.flexCenter};
  flex-direction: column;
`;

const StyledTitle = styled(motion.h1)`
  color: var(--accent);
  line-height: 1;
  font-size: 12vw;
  ${media.bigDesktop`font-size: 200px;`}
  ${media.phablet`font-size: 120px;`};
`;

const StyledSubtitle = styled(motion.h2)`
  margin-top: 3rem;
  font-size: 3vw;
  font-weight: 400;
  ${media.bigDesktop`font-size: 50px;`};
  ${media.phablet`font-size: 30px;`};
`;

const ErrorPage = () => {
  const { state, dispatch } = useGlobalStateContext();
  const onCursor = (cursorType) => {
    cursorType =
      (state.cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType });
  };

  return (
    <Main>
      <StyledMainContainer
        className="fillHeight"
        initial="before"
        animate="after"
        variants={{
          before: {},
          after: { transition: { staggerChildren: 0.3 } },
        }}
      >
        <StyledTitle
          variants={{
            before: {
              y: -100,
              opacity: 0,
            },
            after: {
              y: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                damping: 10,
                stiffness: 200,
                velocity: 1,
              },
            },
          }}
        >
          404
        </StyledTitle>
        <StyledSubtitle
          variants={{
            before: {
              y: -100,
              opacity: 0,
            },
            after: {
              y: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                damping: 10,
                stiffness: 200,
                velocity: 1,
              },
            },
          }}
        >
          Page not found
        </StyledSubtitle>
        <motion.h1
          variants={{
            before: {
              y: -100,
              opacity: 0,
            },
            after: {
              y: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                damping: 10,
                stiffness: 200,
                velocity: 1,
              },
            },
          }}
        >
          <Link
            className="outsideInline"
            to="/"
            onMouseMove={() => onCursor('pointer')}
            onMouseLeave={() => onCursor()}
          >
            Go Home
          </Link>
        </motion.h1>
      </StyledMainContainer>
    </Main>
  );
};

export default ErrorPage;
