import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Form, Modal } from "antd";
import { FormikProps } from "formik";
import i18n from "@movie-ticket/translation";
import React from "react";

interface MyConfirmationProps extends FormikProps<any> {
  title?: string;
  yes?: string;
  confirmationMessage?: string | React.ReactNode;
  children?: any;
  visibleKey?: string;
  width?: string;
}

const ConfirmationModal = ({
  title = "確認",
  yes = "Có",
  values = {},
  isSubmitting,
  handleSubmit,
  setFieldValue,
  confirmationMessage = i18n.t("main.confirmMessage"),
  children,
  visibleKey = "confirm",
  width = "50vw",
}: MyConfirmationProps) => {
  return (
    <Modal
      title={title}
      visible={values[visibleKey]}
      centered
      footer="　"
      closable={!isSubmitting}
      onCancel={() => setFieldValue(visibleKey, false)}
      width={width}
      destroyOnClose
    >
      {children}
      {confirmationMessage}
      <div className="modal-footer">
        <Form>
          <Button
            type="primary"
            loading={isSubmitting}
            disabled={isSubmitting}
            onClick={() => handleSubmit()}
            icon={<CheckOutlined />}
            htmlType="submit"
            className="modal-footer-button"
            id="confirmationYes"
            data-testid="confirmationYes"
          >
            {yes}
          </Button>
          <Button
            icon={<CloseOutlined />}
            onClick={() => setFieldValue(visibleKey, false)}
            disabled={isSubmitting}
            className="modal-footer-button"
            id="confirmationNo"
          >
            いいえ
          </Button>
        </Form>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
