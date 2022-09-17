import React from "react";
const modalContext = React.createContext({
  modal: false,
  openModalHandler: () => 1,
  closeModalHandler: () => 0,
});

export default modalContext;
