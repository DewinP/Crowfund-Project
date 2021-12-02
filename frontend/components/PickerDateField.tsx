import React from "react";
import { useField, useFormikContext } from "formik";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import { InputGroup, InputProps } from "@chakra-ui/input";
import "react-datepicker/dist/react-datepicker.css";
import { FormControl, FormLabel } from "@chakra-ui/form-control";

type PickerDateFieldProps = InputProps &
  Omit<ReactDatePickerProps, "onChange"> & {
    label: string;
  };

export const PickerDateField: React.FC<PickerDateFieldProps> = ({
  label,
  onChange: _,
  ...props
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, { error }] = useField(props.name);

  return (
    <FormControl isInvalid={!!error} mt={4}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <InputGroup>
        <DatePicker
          {...field}
          {...props}
          selected={(field.value && new Date(field.value)) || null}
          onChange={(val) => {
            setFieldValue(field.name, val);
          }}
        />
      </InputGroup>
    </FormControl>
  );
};

export default PickerDateField;
