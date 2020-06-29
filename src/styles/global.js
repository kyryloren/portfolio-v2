import { css } from '@emotion/core';
import { theme, media } from './theme';
import { isMobile } from 'react-device-detect';
import mixins from './mixins';
const { fonts, colors } = theme;

const normalize = `
  *,::after,::before{box-sizing:border-box}:root{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}hr{height:0}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:SFMono-Regular,Consolas,'Liberation Mono',Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{padding:0}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}
`;

const globalStyles = css`
  ${normalize}

  ${!isMobile &&
  `
    * {
      cursor: none;
    }
  `}
  
  html, body {
    max-width: 100%;
    --paytone: ${fonts.Paytone};
    --raleway: ${fonts.Raleway};
  }

  body {
    font-family: ${fonts.Raleway};
    transition: color 0.1s ease-out, background 0.1s ease-out;

    -bg: ${colors.lightMode.background};
    --main: ${colors.lightMode.main};
    --text: ${colors.lightMode.text};
    --accent: ${colors.lightMode.accent};
    --container: ${colors.lightMode.container};
    --warning: ${colors.lightMode.warning};
    --shadow: ${colors.lightMode.shadow};
    --hover: ${colors.lightMode.hover};

    background: var(--bg);
  }

  body.dark {
    -webkit-font-smoothing: antialiased;

    --bg: ${colors.darkMode.background};
    --main: ${colors.darkMode.main};
    --text: ${colors.darkMode.text};
    --accent: ${colors.darkMode.accent};
    --container: ${colors.darkMode.container};
    --warning: ${colors.darkMode.warning};
    --shadow: ${colors.darkMode.shadow};
    --hover: ${colors.darkMode.hover};

    background: var(--bg);

    .invertIcon {
      filter: invert(1);
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fonts.Paytone};
    color: var(--text);
    margin: 0 0 10px 0;
  }

  h1 {
    &.big-title {
      font-size: 80px;
      line-height: 1.1;
      margin: 0;
      ${media.desktop`font-size: 70px;`};
      ${media.tablet`font-size: 60px;`};
      ${media.phablet`font-size: 50px;`};
      ${media.phone`font-size: 40px;`};
    }

    &.medium-title {
      font-size: 60px;
      line-height: 1.1;
      margin: 0;
      ${media.desktop`font-size: 50px;`};
      ${media.tablet`font-size: 40px;`};
    }
    &.sub-title {
      font-size: 4rem;
      line-height: 1.1;
      margin: 0;
      ${media.phone`font-size: 3rem;`};
    }
    &.animated-text {
      font-size: 7rem;
      line-height: 1;
      margin: 0;
      padding: 0;
      ${media.tablet`font-size: 5rem;`};
    }
  }

  h3 {
    font-size: 30px;
    font-weight: 500;
    line-height: 1.1;
    letter-spacing: 1.3;
    margin: 0;
    font-family: ${fonts.Raleway};

    ${media.desktop`font-size: 20px;`};
  }

  .outsideInline {
    ${mixins.inlineLink};
  }

  p {
    margin: 0 0 15px 0;
    color: var(--text);
  }

  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  a:hover,
  a:focus,
  a:-webkit-any-link {
    text-decoration: none;
    outline: none;
  }

  ul,
  ol {
    padding: 0;
    margin: 0;
  }
`;

export default globalStyles;
