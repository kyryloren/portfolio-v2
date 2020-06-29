import React from 'react';
import styled from '@emotion/styled';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

const ThemeSwitchWrapper = styled.span`
  padding: 0 1.5px;
  display: inline;

  label {
    input {
      display: none;
    }

    :after {
      content: 'o';
      color: var(--accent);
    }
  }
`;

class ThemeToggle extends React.Component {
  render() {
    return (
      <ThemeSwitchWrapper
        onMouseEnter={() => this.props.onCursor('pointer')}
        onMouseLeave={() => this.props.onCursor()}
      >
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label>
              <input
                type="checkbox"
                aria-label="Toggle dark theme"
                onChange={(e) =>
                  toggleTheme(e.target.checked ? 'dark' : 'light')
                }
                checked={theme === 'dark'}
              />
            </label>
          )}
        </ThemeToggler>
      </ThemeSwitchWrapper>
    );
  }
}

export default ThemeToggle;
