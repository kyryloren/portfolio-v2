import React from 'react';
import Layout from './src/components/layouts';
import { GlobalProvider } from './src/context/globalContext';

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

export const wrapPageElement = ({ element, props }) => {
  return (
    <GlobalProvider>
      <Layout {...props}>{element}</Layout>
    </GlobalProvider>
  );
};
