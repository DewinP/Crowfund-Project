import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { IconButton, InputGroup, InputProps, InputRightElement } from "@chakra-ui/react";
import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";
import { BiShow, BiHide } from "react-icons/bi";

type InputFieldProps =  InputProps & {
  label: string;
  setImageURL?: (url: string) => void;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  size: _,
  ...props
}) => {
  const [field, { error }] = useField(props.name);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <FormControl isInvalid={!!error} mt={4}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <InputGroup>
        <Input
          {...field}
          {...props}
          id={field.name}
          type={props.type === "password" && show ? "text" : props.type}
        />
        {props.type === "password" && (
          <InputRightElement width="4.5rem">
            <IconButton
              variant="link"
              onClick={handleClick}
              aria-label={show ? "Show password" : "Hide password"}
              icon={show ? <BiShow /> : <BiHide />}
            />
          </InputRightElement>
        )}
      </InputGroup>

      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default InputField;
