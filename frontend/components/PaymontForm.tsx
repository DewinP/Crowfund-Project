import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { useCreateCheckoutSessionMutation } from "../app/services/api";
import CustomPaymentInput from "../components/CustomPaymentInput";
import { IProject } from "../intefaces";
import getStripe from "../utils/getStripe";

interface PaymentFormProps {
  project: IProject;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ project }) => {
  const MAX_AMOUNT = 10000;
  const AMOUNT_STEP = 5;
  const MIN_AMOUNT = 10;
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    customPayment: Math.round(MAX_AMOUNT / AMOUNT_STEP),
  });

  const [createSession] = useCreateCheckoutSessionMutation();
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setInput({
      customPayment: Number(e.target.value),
    });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Create a Checkout Session.
    const session = await createSession({
      amount: input.customPayment,
      projectName: project.title,
      projectId: project.projectId,
    }).unwrap();

    // Redirect to Checkout.
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      sessionId: session.id,
    });
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CustomPaymentInput
        projectName={project.title}
        projectGoal={project.pledgeGoal}
        name={"customDonation"}
        value={input.customPayment}
        min={MIN_AMOUNT}
        max={MAX_AMOUNT}
        step={AMOUNT_STEP}
        onChange={handleInputChange}
      />
      <Text>Use stripe's test card: 4242 4242 4242</Text>
      <Button type="submit" isLoading={loading}>
        Donate
      </Button>
    </form>
  );
};

export default PaymentForm;
