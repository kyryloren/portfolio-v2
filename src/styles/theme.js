import config from '@utils/config';
import { css } from '@emotion/core';

export const theme = {
  colors: {
    lightMode: {
      main: config.themeColor,
      background: config.backgroundColor,
      text: config.textColor,
      accent: '#F397D6',
      container: '#f2f2f2',
      warning: '#D64045',
      shadow: 'rgba(33, 33, 33, 0.2)',
    },

    darkMode: {
      main: config.themeColor,
      background: config.textColor,
      text: config.backgroundColor,
      accent: '#F397D6',
      container: '#141414',
      warning: '#FE4A49',
      shadow: 'rgba(212, 212, 212, 0.3)',
    },
  },

  fonts: {
    Paytone: "'Paytone One', sans-serif",
    Raleway: "'Raleway', sans-serif",
  },
};

const sizes = {
  giant: 1440,
  bigDesktop: 1200,
  desktop: 1000,
  tablet: 768,
  thone: 600,
  phablet: 480,
  phone: 376,
  tiny: 330,
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
