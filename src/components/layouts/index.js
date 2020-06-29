import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

//styles
import { Global } from '@emotion/core';
import { globalStyles } from '@styles';
import CustomCursor from '@components/customCursor';
import { isMobile } from 'react-device-detect';

//components
import Nav from '@components/Nav';
import Head from './Head';
import Footer from '@components/Footer';
import { useGlobalStateContext } from '../../context/globalContext';

export default ({ children }) => {
  const { state, dispatch } = useGlobalStateContext();
  const onCursor = (cursorType) => {
    cursorType =
      (state.cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType });
  };

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }
      `}
      render={(site) => (
        <>
          <Head metadata={site.site.siteMetadata} />
          <Global styles={globalStyles} />
          {!isMobile && <CustomCursor />}
          <Nav onCursor={onCursor} />
          <div id="content">{children}</div>
          <Footer />
        </>
      )}
    />
  );
};
