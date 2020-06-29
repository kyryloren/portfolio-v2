import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

//styles
import { mixins, media, Section } from '@styles';
import styled from '@emotion/styled';
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

const StyledGrid = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  position: relative;
  ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
`;

const StyledProjectInner = styled.div`
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 2rem 1.75rem;
  height: 100%;
  border-radius: 3px;
  background-color: var(--container);
`;

const StyledProjectHeader = styled.div`
  ${mixins.flexBetween};
  margin-bottom: 30px;
`;

const StyledFolder = styled.div`
  color: var(--text);
  svg {
    width: 40px;
    height: 40px;
  }
`;

const StyledProjectLinks = styled.div`
  margin-right: -10px;
  color: var(--text);
`;

const StyledIconLink = styled(motion.a)`
  position: relative;
  top: -10px;
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;

const StyledProjectName = styled.h5`
  margin: 0 0 10px;
  font-size: 25px;
  color: var(--text);
`;

const StyledProjectDescription = styled.div`
  font-size: 17px;
  color: var(--text);
  a {
    ${mixins.inlineLink};
  }
`;

const StyledTechList = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;
  li {
    opacity: 0.8;
    font-family: var(--raleway);
    font-size: 16px;
    color: var(--text);
    line-height: 1.75;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const Github = ({ onCursor, data }) => {
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

  const projects = data.filter(({ node }) => node);

  const string = Array.from('More work');
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
        <StyledGrid>
          {projects.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { github, external, title, tech } = frontmatter;

            return (
              <StyledProjectInner key={i} tabIndex={0}>
                <header>
                  <StyledProjectHeader>
                    <StyledFolder>
                      <FormattedIcon name="Folder" />
                    </StyledFolder>
                    <StyledProjectLinks>
                      {github && (
                        <StyledIconLink
                          href={github}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          aria-label="GitHub Link"
                          onMouseEnter={() => onCursor('pointer')}
                          onMouseLeave={() => onCursor()}
                          whileHover={{ scale: 1.4 }}
                        >
                          <FormattedIcon name="GitHub" />
                        </StyledIconLink>
                      )}
                      {external && (
                        <StyledIconLink
                          href={external}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          aria-label="External Link"
                          onMouseEnter={() => onCursor('pointer')}
                          onMouseLeave={() => onCursor()}
                          whileHover={{ scale: 1.4 }}
                        >
                          <FormattedIcon name="External" />
                        </StyledIconLink>
                      )}
                    </StyledProjectLinks>
                  </StyledProjectHeader>
                  <StyledProjectName>{title}</StyledProjectName>
                  <StyledProjectDescription
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                </header>
                <footer>
                  {tech && (
                    <StyledTechList>
                      {tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </StyledTechList>
                  )}
                </footer>
              </StyledProjectInner>
            );
          })}
        </StyledGrid>
      </StyledContainer>
    </MainContainer>
  );
};

export default Github;

Github.propTypes = {
  onCursor: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};
