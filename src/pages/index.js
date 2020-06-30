import React from 'react';
import PropTypes from 'prop-types';
import Hero from '@sections/hero';
import About from '@sections/about';
import Projects from '@sections/projects';
import Github from '@sections/github';
import Contact from '@sections/contact';
import styled from '@emotion/styled';
import { Main } from '@styles';
import { useGlobalStateContext } from '../context/globalContext';
import { graphql } from 'gatsby';

const StyledMainContainer = styled(Main)`
  counter-reset: section;
`;

const HomePage = ({ data }) => {
  const { state, dispatch } = useGlobalStateContext();
  const onCursor = (cursorType) => {
    cursorType =
      (state.cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType });
  };

  return (
    <StyledMainContainer className="fillHeight">
      <Hero onCursor={onCursor} />
      <About onCursor={onCursor} data={data.about.edges} />
      <Projects onCursor={onCursor} data={data.projects.edges} />
      <Github onCursor={onCursor} data={data.github.edges} />
      <Contact onCursor={onCursor} />
    </StyledMainContainer>
  );
};

export default HomePage;

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  {
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            title
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 700
                  quality: 90
                  traceSVG: { color: "#64ffda" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            tech
            github
            external
          }
          html
        }
      }
    }
    github: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/github/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            tech
            github
            external
          }
          html
        }
      }
    }
  }
`;
