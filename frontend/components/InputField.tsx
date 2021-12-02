import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import {
  Flex,
  FormHelperText,
  IconButton,
  InputGroup,
  InputProps,
  InputRightElement,
  Textarea,
  TextareaProps,
} from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";
import { BiHide, BiShow } from "react-icons/bi";

type InputFieldProps = InputProps &
  TextareaProps & {
    label: string;
    helperText?: string;
    limit?: number;
    textArea?: boolean;
  };

export const InputField: React.FC<InputFieldProps> = ({
  label,
  helperText,
  size: _,
  limit,
  textArea,
  ...props
}) => {
  const [field, { error }] = useField(props.name);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <FormControl isInvalid={!!error} mt={4}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      {textArea ? (
        <InputGroup>
          <Textarea {...field} {...props} id={field.name} />
        </InputGroup>
      ) : (
        <InputGroup>
          <Input
            maxLength={limit}
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
      )}

      {(limit || helperText) && (
        <Flex justifyContent="space-between">
          {!error && helperText && (
            <FormHelperText m={0}>{helperText}</FormHelperText>
          )}
        </Flex>
      )}

      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default InputField;
