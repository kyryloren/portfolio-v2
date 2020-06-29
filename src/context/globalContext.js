import React, { createContext, useReducer, useContext } from 'react';

//Define Conext
const GlobalStateContext = createContext();

//Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'CURSOR_TYPE': {
      return {
        ...state,
        cursorType: action.cursorType,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

//Provider

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    cursorType: false,
    cursorStyles: ['pointer', 'hovered', 'locked'],
  });

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

//custom hooks for when we want to use our global state
export const useGlobalStateContext = () => useContext(GlobalStateContext);
