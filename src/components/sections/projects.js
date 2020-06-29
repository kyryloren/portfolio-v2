import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

// styles and anim
import styled from '@emotion/styled';
import { mixins, media, Section } from '@styles';
import { FormattedIcon } from '@components/icons';

// scroll behaviour
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const MainContainer = styled.section`
  ${mixins.flexCenter};
  position: relative;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  overflow-x: hidden;
  margin-bottom: 15rem;

  ${media.desktop`margin-top: 7rem;`};
`;

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;

const StyledHeading = styled(motion.h1)`
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

const StyledContent = styled.div`
  position: relative;
  grid-column: 1 / 7;
  grid-row: 1 / -1;
  ${media.thone`
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
    z-index: 5;
  `};
  ${media.phablet`padding: 30px 25px 20px;`};
`;

const StyledLabel = styled.h4`
  font-size: 17px;
  font-weight: normal;
  color: var(--accent);
  margin-top: 10px;
  padding-top: 0;
  font-family: var(--raleway);
`;

const StyledProjectName = styled.h5`
  font-size: 28px;
  margin: 0 0 20px;

  ${media.tablet`font-size: 24px;`};
  ${media.thone`color: var(--text);`};
  a {
    text-decoration: none;
    color: var(--text);
    ${media.tablet`display: block;`};

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
  }
`;

const StyledDescription = styled.div`
  ${mixins.boxShadow};
  position: relative;
  z-index: 2;
  padding: 25px;
  background-color: var(--container);
  color: var(--text);
  font-size: 18px;
  border-radius: 3px;
  ${media.thone`
    background-color: transparent;
    padding: 20px 0;
    box-shadow: none;
    &:hover {
      box-shadow: none;
    }
  `};
  p {
    margin: 0;
  }
  a {
    ${mixins.inlineLink};
  }
`;

const StyledTechList = styled.ul`
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 25px 0 10px;
  list-style: none;

  li {
    opacity: 0.8;
    font-size: 16px;
    color: var(--text);
    margin-right: 20px;
    margin-bottom: 7px;
    white-space: nowrap;
    &:last-of-type {
      margin-right: 0;
    }
    ${media.thone`
      color: var(--text);
      margin-right: 10px;
    `};
  }
`;

const StyledLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  color: var(--text);
  a {
    padding: 10px;
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

const StyledFeaturedImg = styled(Img)`
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  border-radius: 3px;
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1) brightness(90%);
  ${media.tablet`
    object-fit: cover;
    width: auto;
    height: 100%;
    filter: grayscale(100%) contrast(1) brightness(80%);
  `};
`;

const StyledImgContainer = styled.a`
  ${mixins.boxShadow};
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  position: relative;
  z-index: 1;
  background-color: #fff;
  border-radius: 4px;
  ${media.tablet`height: 100%;`};
  ${media.thone`
    grid-column: 1 / -1;
    opacity: 0.25;
  `};
  &:hover,
  &:focus {
    background: transparent;
    &:before,
    ${StyledFeaturedImg} {
      background: transparent;
      filter: none;
    }
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    background-color: #232323;
    mix-blend-mode: screen;
  }
`;

const StyledProject = styled(motion.div)`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  margin-bottom: 100px;
  ${media.thone`
    margin-bottom: 70px;
  `};
  &:last-of-type {
    margin-bottom: 0;
  }
  &:nth-of-type(odd) {
    ${StyledContent} {
      grid-column: 7 / -1;
      text-align: right;
      ${media.thone`
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
      `};
      ${media.phablet`padding: 30px 25px 20px;`};
    }
    ${StyledTechList} {
      justify-content: flex-end;
      li {
        margin-left: 20px;
        margin-right: 0;
      }
    }
    ${StyledLinkWrapper} {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }
    ${StyledImgContainer} {
      grid-column: 1 / 8;
      ${media.tablet`height: 100%;`};
      ${media.thone`
        grid-column: 1 / -1;
        opacity: 0.25;
      `};
    }
  }
`;

function Projects({ onCursor, data }) {
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

  const featuredProjects = data.filter(({ node }) => node);

  const string = Array.from('My works');
  return (
    <MainContainer ref={contentRef}>
      <TextContainer>
        <StyledHeading
          animate={animation}
          initial="before"
          variants={{
            before: {},
            after: { transition: { staggerChildren: 0.03 } },
          }}
          className="sub-title"
        >
          {string.map((letter, index) => (
            <motion.span
              style={{
                position: 'relative',
                display: 'inline',
              }}
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
      </TextContainer>
      <StyledContainer>
        {featuredProjects.map(({ node }, i) => {
          const { frontmatter, html } = node;
          const { external, title, tech, github, cover } = frontmatter;

          return (
            <StyledProject
              key={i}
              animate={contentAnim}
              initial="before"
              variants={{
                before: {
                  opacity: 0,
                  y: 50,
                  transition: {
                    type: 'spring',
                    damping: 16,
                    stiffness: 200,
                    delay: 0.4,
                  },
                },
                after: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'spring',
                    damping: 16,
                    stiffness: 200,
                    delay: 0.4,
                  },
                },
              }}
            >
              <StyledContent>
                <StyledLabel>Featured Project</StyledLabel>
                <StyledProjectName>
                  {external ? (
                    <a
                      href={external}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      aria-label="External Link"
                    >
                      {title}
                    </a>
                  ) : (
                    title
                  )}
                </StyledProjectName>
                <StyledDescription dangerouslySetInnerHTML={{ __html: html }} />
                {tech && (
                  <StyledTechList>
                    {tech.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </StyledTechList>
                )}
                <StyledLinkWrapper>
                  {github && (
                    <motion.a
                      href={github}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      aria-label="GitHub Link"
                      onMouseEnter={() => onCursor('pointer')}
                      onMouseLeave={() => onCursor()}
                      whileHover={{ scale: 1.4 }}
                    >
                      <FormattedIcon name="GitHub" />
                    </motion.a>
                  )}
                  {external && (
                    <motion.a
                      href={external}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      aria-label="External Link"
                      onMouseEnter={() => onCursor('pointer')}
                      onMouseLeave={() => onCursor()}
                      whileHover={{ scale: 1.4 }}
                    >
                      <FormattedIcon name="External" />
                    </motion.a>
                  )}
                </StyledLinkWrapper>
              </StyledContent>

              <StyledImgContainer
                href={external ? external : github ? github : '#'}
                target="_blank"
                rel="nofollow noopener noreferrer"
                onMouseEnter={() => onCursor('pointer')}
                onMouseLeave={() => onCursor()}
              >
                <StyledFeaturedImg
                  fluid={cover.childImageSharp.fluid}
                  alt={title}
                />
              </StyledImgContainer>
            </StyledProject>
          );
        })}
      </StyledContainer>
    </MainContainer>
  );
}

export default Projects;

Projects.propTypes = {
  onCursor: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};
