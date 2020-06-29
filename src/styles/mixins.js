import { css } from '@emotion/core';
import { media } from './theme';

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  inlineLink: css`
    position: relative;
    overflow: hidden;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: var(--accent);

    :after {
      content: '';
      background: rgba(236, 64, 122, 0.25);
      position: absolute;
      left: 12px;
      bottom: -15px;
      width: calc(100% - 8px);
      height: calc(100% - 8px);
      z-index: -1;
      -webkit-transition: 0.35s cubic-bezier(0.25, 0.1, 0, 2.05);
      transition: 0.35s cubic-bezier(0.25, 0.1, 0, 2.05);
    }

    :hover:after {
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 100%;
    }
  `,

  sidePadding: css`
    padding: 0 150px;
    ${media.desktop`padding: 0 100px;`};
    ${media.tablet`padding: 0 50px;`};
    ${media.phablet`padding: 0 25px;`};
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px var(--shadow);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--shadow);
    }
  `,
};

export default mixins;
