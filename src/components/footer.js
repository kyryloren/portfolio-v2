import React from 'react';
import styled from '@emotion/styled';
import { socialMedia } from '@utils/config';

const StyledContainer = styled.footer`
  color: var(--text);
  background-color: var(--container);
  text-align: center;
  font-size: 1em;
  padding-top: 3px;
  padding-bottom: 3px;

  a {
    text-decoration: underline;
    color: inherit;
  }
`;

const Footer = ({ onCursor }) => {
  return (
    <StyledContainer>
      <small>
        Designed and developed by{' '}
        <a
          href={socialMedia[0].url}
          target="_blank"
          rel="nofollow noopener noreferrer"
          onMouseEnter={() => onCursor('pointer')}
          onMouseLeave={onCursor}
        >
          Kyrylo Orlov
        </a>{' '}
        and inspiration from{' '}
        <a
          href="https://brittanychiang.com"
          target="_blank"
          rel="nofollow noopener noreferrer"
          onMouseEnter={() => onCursor('pointer')}
          onMouseLeave={onCursor}
        >
          Brittany Chiang
        </a>
        . Made with{' '}
        <span role="img" aria-label="love">
          ❤️
        </span>{' '}
        in the{' '}
        <span role="img" aria-label="United States">
          🇺🇸
        </span>
        .
      </small>
    </StyledContainer>
  );
};

export default Footer;
