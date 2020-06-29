import React, { useState } from 'react';
import { Link } from 'gatsby';

//styles and anim
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { mixins, media } from '@styles';

//window
import useWindowSize from '../hooks/useWindowSize';

const StyledContainer = styled.header`
  ${mixins.flexBetween};
  position: absolute;
  top: 0;
  width: 100%;
  height: 100px;
  padding: 0 100px;
  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 25px;`};
  ${media.phone`padding: 0 5px;`};
`;

const StyledNav = styled(motion.nav)`
  ${mixins.flexBetween};
  position: relative;
  width: 100%;
`;

const StyledLogo = styled(motion.div)`
  ${mixins.flexCenter};
  color: var(--text);

  a {
    font-weight: 700;
    font-size: 1.25rem;
    letter-spacing: 1px;
    opacity: 0.5;

    :hover {
      opacity: 1;
    }

    span {
      display: inline;
    }
  }
`;

const StyledLink = styled.div`
  display: flex;
  align-items: center;
`;

const StyledList = styled.ol`
  ${mixins.flexBetween};
  padding: 0;
  margin: 0;
  list-style: none;
`;

const StyledListItem = styled(motion.li)`
  margin: 0 20px;
  position: relative;
  font-size: 20px;
  font-weight: 600;
  list-style: none;
  counter-increment: item 1;
  color: var(--text);

  ${media.tablet`margin: 0 10px;`};
`;

const StyledListLink = styled(Link)`
  padding: 12px 10px;
  display: inline-block;
  text-decoration-skip-ink: auto;
  color: inherit;
  position: relative;
  text-decoration: none;
  text-transform: lowercase;
  transition: clip-path 275ms ease;
  &:hover span::before,
  &:focus span::before {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  span {
    position: relative;
    display: inline-block;
    &::before {
      position: absolute;
      content: attr(data-content);
      color: inherit;
      text-decoration: underline;
      text-decoration-color: var(--accent);
      text-decoration-style: dashed;
      clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
      transition: clip-path 275ms ease;
    }
  }
`;

const LogoLink = styled(Link)`
  padding: 12px 10px;
  color: inherit;
  text-decoration: none;
  text-transform: lowercase;

  span {
    position: relative;
    display: inline;
  }
`;

const Nav = ({ onCursor }) => {
  const [shouldAnim, setShouldAnim] = useState(false);

  const parent = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const child = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  const LogoAnimOnHover = () => {
    onCursor('pointer');
    setShouldAnim(true);
  };

  const LogoAnimLeave = () => {
    onCursor();
    setShouldAnim(false);
  };

  return (
    <StyledContainer>
      <StyledNav variants={parent} initial="initial" animate="animate">
        <StyledLogo
          variants={child}
          onMouseEnter={LogoAnimOnHover}
          onMouseLeave={LogoAnimLeave}
        >
          {useWindowSize().width <= 410 && (
            <StyledListItem
              variants={child}
              onMouseEnter={() => onCursor('pointer')}
              onMouseLeave={onCursor}
            >
              <StyledListLink to="/" aria-label="home">
                <span data-content="kyrylo orlov">kyrylo orlov</span>
              </StyledListLink>
            </StyledListItem>
          )}
          {useWindowSize().width > 410 && (
            <LogoLink to="/" aria-label="home">
              <motion.span
                animate={shouldAnim ? { rotate: -15 } : { rotate: 0 }}
                transition={{ ease: [0.6, 0.05, -0.01, 0.9] }}
              >
                k
              </motion.span>
              <motion.span
                animate={
                  shouldAnim ? { top: '5px', rotate: 5 } : { top: 0, rotate: 0 }
                }
                transition={{ ease: [0.6, 0.05, -0.01, 0.9] }}
              >
                y
              </motion.span>
              <motion.span
                animate={shouldAnim ? { rotate: -8 } : { rotate: 0 }}
                transition={{ ease: [0.6, 0.05, -0.01, 0.9] }}
              >
                r
              </motion.span>
              <motion.span
                animate={shouldAnim ? { bottom: '5px' } : { bottom: 0 }}
                transition={{ ease: [0.6, 0.05, -0.01, 0.9] }}
              >
                y
              </motion.span>
              <motion.span
                animate={shouldAnim ? { top: '2px' } : { top: 0 }}
                transition={{ ease: [0.6, 0.05, -0.01, 0.9] }}
              >
                l
              </motion.span>
              <motion.span
                animate={
                  shouldAnim
                    ? { right: '2px', bottom: '3px' }
                    : { right: 0, bottom: 0 }
                }
                transition={{ ease: [0.6, 0.05, -0.01, 0.9] }}
              >
                o
              </motion.span>{' '}
              <motion.span
                animate={
                  shouldAnim
                    ? { left: '2px', bottom: '2px' }
                    : { left: 0, bottom: 0 }
                }
                transition={{ ease: [0.6, 0.05, -0.01, 0.9] }}
              >
                o
              </motion.span>
              <motion.span
                animate={
                  shouldAnim
                    ? { rotate: -8, top: '3px', left: '1.5px' }
                    : { rotate: 0, top: 0, left: 0 }
                }
                transition={{ ease: [0.6, 0.05, -0.01, 0.9] }}
              >
                r
              </motion.span>
              <motion.span
                animate={
                  shouldAnim
                    ? { rotate: -5, bottom: '2px' }
                    : { rotate: 0, bottom: 0 }
                }
                transition={{ ease: [0.6, 0.05, -0.01, 0.9] }}
              >
                l
              </motion.span>
              <motion.span
                animate={shouldAnim ? { top: '2px' } : { top: 0 }}
                transition={{ ease: [0.6, 0.05, -0.01, 0.9] }}
              >
                o
              </motion.span>
              <motion.span
                animate={
                  shouldAnim
                    ? { rotate: 15, bottom: '2px', right: '2px' }
                    : { rotate: 0, bottom: 0, right: 0 }
                }
                transition={{ ease: [0.6, 0.05, -0.01, 0.9] }}
              >
                v
              </motion.span>
            </LogoLink>
          )}
        </StyledLogo>
        <StyledLink>
          <StyledList>
            <StyledListItem
              variants={child}
              onMouseEnter={() => onCursor('pointer')}
              onMouseLeave={onCursor}
            >
              <StyledListLink to="/#about">
                <span data-content="about">about</span>
              </StyledListLink>
            </StyledListItem>
            <StyledListItem
              variants={child}
              onMouseEnter={() => onCursor('pointer')}
              onMouseLeave={onCursor}
            >
              <StyledListLink to="/#contact">
                <span data-content="contact">contact</span>
              </StyledListLink>
            </StyledListItem>
          </StyledList>
        </StyledLink>
      </StyledNav>
    </StyledContainer>
  );
};

export default Nav;
