import React from 'react';
import styled from '@emotion/styled';

const StyledContainer = styled.footer`
  color: var(--text);
  background-color: var(--container);
  text-align: center;
  font-size: 1em;
  padding-top: 3px;
  padding-bottom: 3px;
`;

const Footer = () => {
  return (
    <StyledContainer>
      <small>
        Designed and developed by Kyrylo Orlov. Made with{' '}
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
