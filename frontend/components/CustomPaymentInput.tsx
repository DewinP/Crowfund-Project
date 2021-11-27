import { FormControl, FormLabel, Input } from "@chakra-ui/react";
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
  projectName,
  projectGoal,
  onChange,
}: Props) => (
  <FormControl>
    <FormLabel>
      Help Us reach our ${projectGoal.toLocaleString("en-US")}
    </FormLabel>
    <Input
      type="number"
      name={name}
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={onChange}
    />
  </FormControl>
);

export default CustomPaymentInput;
