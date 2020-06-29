import React, { useEffect, useRef } from 'react';
import { useGlobalStateContext } from '../context/globalContext';
import { Cursor } from '@styles';

const CustomCursor = () => {
  const { state } = useGlobalStateContext();
  const cursor = useRef(null);

  const onMouseMove = (event) => {
    const { clientX, clientY } = event;
    cursor.current.style.left = `${clientX}px`;
    cursor.current.style.top = `${clientY}px`;
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <Cursor
        className={`${
          !!state.cursorType
            ? state.cursorType === 'hovered'
              ? `hovered`
              : `hovered ${state.cursorType}`
            : ''
        }`}
        ref={cursor}
      />
    </>
  );
};

export default CustomCursor;
