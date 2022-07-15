import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/pages_reducer";

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  MODAL_OPEN,
  MODAL_CLOSE,
  STICKY_OPEN,
  STICKY_CLOSE,
} from "../actions";

const initialState = {
  isSidebarOpen: false,
  isModalOpen: false,
  isStickyOpen: false,
};

const PagesContext = React.createContext();

export const PagesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Sidebar
  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  // Modal
  const openModal = () => {
    dispatch({ type: MODAL_OPEN });
  };
  const closeModal = () => {
    dispatch({ type: MODAL_CLOSE });
  };

  // Sticky Start
  useEffect(() => {
    window.scroll(function () {
      var Width = document.width();

      if (window.body.scrollTop() > 100 || window.html.scrollTop() > 100) {
        if (Width > 767) {
          dispatch({ type: STICKY_OPEN });
        }
      } else {
        dispatch({ type: STICKY_CLOSE });
      }
    });
  }, []);
  // Sticky End

  return (
    <PagesContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
        // openSticky,
        // closeSticky,
      }}
    >
      {children}
    </PagesContext.Provider>
  );
};

// Custom hook for reducing line of codes
export const usePagesContext = () => {
  return useContext(PagesContext);
};
