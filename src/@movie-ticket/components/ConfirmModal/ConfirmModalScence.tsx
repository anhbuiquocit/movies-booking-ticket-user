import { Checkbox } from "antd";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { string } from "yup";
interface ConfirmationModalProps {
  values?: any;
  isSubmitting?: any;
  handleSubmit?: any;
  handleNoClick?: any;
  setFieldValue?: any;
  confirmationMessage?: string;
  children?: ReactNode;
  visibleKey?: string;
  yes?: string;
  no?: string;
}
const ConfirmationModal = ({
  values,
  isSubmitting,
  handleSubmit,
  handleNoClick,
  setFieldValue,
  confirmationMessage,
  children,
  visibleKey = "confirm",
  yes = "Đồng ý",
  no = "Hủy bỏ",
}: ConfirmationModalProps) => {
  // const { i18n } = useTranslation();
  // const noClick = () => setFieldValue(visibleKey, false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setFieldValue(visibleKey, true);
  };

  const handleClose = () => {
    setFieldValue(visibleKey, false);
  };
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Dialog
        open={values[visibleKey]}
        style={{ minWidth: "500px" }}
        // TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"XÁC NHẬN"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {/* Bạn chắc chắn chứ? */}
            {confirmationMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              // setFieldValue(values[visibleKey], false);
              handleClose();
            }}
          >
            {no}
          </Button>
          <Button
            type="submit"
            onLoad={isSubmitting}
            disabled={isSubmitting}
            onClick={() => {
              handleSubmit();
              handleClose();
            }}
          >
            {yes}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmationModal;
