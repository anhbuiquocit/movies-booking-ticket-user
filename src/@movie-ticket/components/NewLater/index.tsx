import { TextField } from "@mui/material";
import { Input, Button } from "antd";
import { useForm, Controller } from "react-hook-form";
import "./styles.scss";
interface Props {
  onSubmit?: any;
}
type FormData = {
  email: string;
};
const NewLater = (props: Props) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({});
  const onSubmit = (data: any) => {
    console.log("dataSubmit: ", data);
  };
  return (
    <div className="newlater-section padding-bottom">
      <div className="grid">
        <div className="newlater-container bg_img">
          <div className="newslater-wrapper">
            <h5 className="cate">SUBCRIBE TO BOLETO</h5>
            <h3 className="title">TO GET EXCLUSIVE BENIFITS</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="newlater-form">
              <Input className="email-intput" size="large"/>
              <Button className="button-subcribe">Subcribe</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewLater;
