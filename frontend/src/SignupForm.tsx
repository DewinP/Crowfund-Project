import Button from "@mui/material/Button";
import  Box  from "@mui/system/Box";
import { Form, Formik } from "formik";
import {  useSignupUserMutation } from "../app/services/api";
import {  ISignupInput } from "../interfaces";
import { toErrorMap } from "../utils/toErrorMap";
import InputField from "./InputField";
import Typography  from "@mui/material/Typography";
import { useRouter } from "next/router";


const SignupForm: React.FC =()=>{
    const router = useRouter()
    const [singupUser] = useSignupUserMutation();
    const initialFormValues:ISignupInput = {
        email: "",
    password: "",
    passwordConfirmation: "",
    name: "",
    }
    return(
        <Box>
            <Formik
            initialValues={initialFormValues}
            onSubmit={async (values, { setErrors }) => {
              try {
                await singupUser(values).unwrap();
              } catch (error:any) {
                console.log(error.data);
                if (error.status === 400) {
                  setErrors(toErrorMap(error.data));
                }
              }
            }}
        >
                {({ isSubmitting }) => (
                <Form>
                     <InputField
              label="First Name"
              type="text"
              name="firstName"
            />
            <InputField
              label="Last Name"
              type="text"
              name="lastName"
            />

            <InputField
              label="Email"
              type="email"
              name="email"
            />

            <InputField
              label="Password"
              type="password"
              name="password"
            />

            <InputField
              label="Confirm Password"
              type="password"
              name="passwordConfirmation"
            />
                    <Typography variant="body2" color="textSecondary" align="right">
                        Already have an account? <Button onClick={()=>router.push("/login")}>Login</Button>
                    </Typography>
                    <Button fullWidth variant="contained" type="submit" disabled={isSubmitting}>SignUp</Button>
                </Form>
                )}
            </Formik>
        </Box>
    )

}

export default SignupForm;