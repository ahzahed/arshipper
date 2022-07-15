import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  MODAL_OPEN,
  MODAL_CLOSE,
  STICKY_OPEN,
  STICKY_CLOSE,
} from "../actions";

const pages_reducer = (state, action) => {
  // Sidebar
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  // Modal
  if (action.type === MODAL_OPEN) {
    return { ...state, isModalOpen: true };
  }
  if (action.type === MODAL_CLOSE) {
    return { ...state, isModalOpen: false };
  }
  // Sidebar
  if (action.type === STICKY_OPEN) {
    return { ...state, isStickyOpen: true };
  }
  if (action.type === STICKY_CLOSE) {
    return { ...state, isStickyOpen: false };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default pages_reducer;
