import {  InputProps  } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Box from "@mui/system/Box";
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";


type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & InputProps &{
    label: string;
    name: string;
    helperText?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, helperText, ...props  }) => {
    const [field, { error }] = useField(props.name);
    helperText = error ? error : helperText;
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    return(
        <Box maxWidth="600px" marginY={1} >
            <FormControl  fullWidth >
            <InputLabel htmlFor={field.name} >{label}</InputLabel>
            <OutlinedInput 
            type={show ? 'text' : props.type}
            endAdornment={
            props.type === "password" ? <InputAdornment position='end'>
            <IconButton
             aria-label="toggle password visibility"
             onClick={handleClick}
             edge="end"
           >
             {show ? <VisibilityOff /> : <Visibility />}
           </IconButton>
       </InputAdornment> : null 
            } 
            error={!!error} 
            label={label} 
            id={field.name}  
            {...field}
          {...props} aria-describedby={helperText}/>
          {helperText && <FormHelperText error={!!error} >{helperText}</FormHelperText>}
        </FormControl>
        </Box>
    )
}

export default InputField;