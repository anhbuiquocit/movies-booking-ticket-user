import React from "react";
import Popup from "reactjs-popup";

const Modal = ({ children }: { children: any }) => {
  return <Popup modal> {children}</Popup>;
};
export default Modal;
