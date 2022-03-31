import { Formik, FormikHelpers } from "formik"
import { Input } from 'antd';
interface Props{
    onSubmit?: any,
}
const NewLater = (props: Props) => {

    return (
        <div className="newlater-section padding-bottom">
        <div className="grid">
            <div className="newlater-container bg_img">
                <div className="newslater-Fwrapper">
                    <h5>SUBCRIBE TO BOLETO</h5> 
                    <h3>TO GET EXCLUSIVE BENIFITS</h3>
                    <Formik
                        initialValues={{
                            email: '',
                        }}
                        onSubmit={props.onSubmit}
                        render={formikProps => {
                            const {setFie}
                        }}
                    />
                </div>
            </div>
        </div>
    </div>

    )
}
export default NewLater