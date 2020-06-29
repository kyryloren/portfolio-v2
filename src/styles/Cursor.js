import styled from '@emotion/styled';

export const Cursor = styled.div`
  position: fixed;
  top: 400px;
  left: 400px;
  width: 32px;
  height: 32px;
  background: var(--main);
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;

  &.pointer {
    border: 4px solid var(--text) !important;
  }
  &.hovered {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid var(--main);
    border: 4px solid var(--main);
    cursor: none;
  }
  &.locked {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid var(--text) !important;
    top: ${(props) => props.theme.top} !important;
    left: ${(props) => props.theme.left} !important;
  }
  &.nav-open {
    background: var(--text);
  }
  &.nav-open,
  &.locked {
    border: 4px solid var(--text) !important;
  }
`;

export default Cursor;
