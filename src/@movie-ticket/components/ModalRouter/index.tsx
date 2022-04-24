import CloseCircleOutlined from "@ant-design/icons";
import { Modal } from "antd";
import React, { CSSProperties, ReactNode, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Redirect } from "react-router-dom";

const CustomModal = ({
  width = "600px",
  closeModal,
  maskClosable = true,
  footer = true,
  children,
  headerLess = false,
  absolutePosition = false,
  title,
  ...rest
}: {
  width?: string | number;
  closeModal: () => void;
  maskClosable?: boolean;
  footer?: boolean;
  headerLess?: boolean;
  absolutePosition?: boolean;
  children: ReactNode;
  title?: string;
  [prop: string]: any;
}) => {
  console.log("Log in modalitemi");
  const [isVisible, setIsVisible] = useState(true);
  const handleClose = () => {
    setIsVisible(false);
  };
  const handleOpen = () => {
    setIsVisible(true);
  };
  closeModal = () => {
    setIsVisible(false);
  };
  const style: CSSProperties = absolutePosition
    ? {
        position: "relative",
        left: 0,
        right: 0,
        margin: "150px auto",
      }
    : { marginRight: `${"520px"}` };
  const { match, parentPath, isPathProtected } = rest;
  const { path } = match || {};
  //   if (isPathProtected) {
  //     if (!permissionsPaths?.includes(path)) {
  //       return <Redirect to={parentPath} />;
  //     }
  //   }
  return (
    <Modal
      width={width}
      visible={isVisible}
      onCancel={closeModal}
      footer={footer ? " " : null}
      centered
      title={title}
      closeIcon={<CloseIcon onClick={handleClose} />}
      style={style}
      // maskStyle={{
      //   marginRight: `${"520px"}`,
      // }}
      maskClosable={maskClosable}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
