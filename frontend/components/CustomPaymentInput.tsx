import {
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import React from "react";

type Props = {
  name: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  projectName: string;
  projectGoal: number;
};

const CustomPaymentInput = ({
  name,
  value,
  min,
  max,
  step,
  onChange,
}: Props) => (
  <FormControl>
    <FormLabel>Amount to pledge</FormLabel>
    <NumberInput
      min={min}
      name={name}
      max={max}
      step={step}
      defaultValue={value}
    >
      <NumberInputField onChange={onChange} />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  </FormControl>
);

export default CustomPaymentInput;
