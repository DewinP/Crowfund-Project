import { Stack,Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useLoginUserMutation } from "../app/services/api";
import { ILoginInput } from "../interfaces";
import { toErrorMap } from "../utils/toErrorMap";
import InputField from "./InputField";


const LoginForm: React.FC =()=>{

    const router = useRouter();
    const [loginUser] = useLoginUserMutation()
    const initialFormValues:ILoginInput = {
        email: '',
        password: ''
    }
    return(
        <Box>
            <Formik
            initialValues={initialFormValues}
            onSubmit={async (values, { setErrors }) => {
            try {
                await loginUser(values).unwrap();
            } catch (error:any) {
                if (error.status === 400) {
                  setErrors(toErrorMap(error.data));
                }
                if (error.status === 401) {
                setErrors({
                    email: "Invalid email or password",
                    password: "Invalid email or password",
                });
                }
            }
            }}
        >
                {({ isSubmitting }) => (
                <Form>
                    <InputField type="text" name="email" label="Email" />
                    
                    <InputField type="password" name="password" label="Password" />
                    <Typography variant="body2" color="textSecondary" align="right">
                        Don't have an account? <Button variant="text" onClick={()=>router.push('/signup')}>Sign Up</Button>
                    </Typography>

                    <Button fullWidth variant="contained" type="submit" disabled={isSubmitting}>Login</Button>
                </Form>
                )}
            </Formik>
        </Box>
    )

}

export default LoginForm;