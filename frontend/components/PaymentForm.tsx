import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/layout";
import Link from "next/link";
import React, { useState } from "react";
import { useAppSelector } from "../app/hooks";
import { useCreateCheckoutSessionMutation } from "../app/services/api";
import { selectCurrentUser } from "../app/services/Auth.slice";
import { IProject } from "../intefaces";
import getStripe from "../utils/getStripe";
import CustomPaymentInput from "./CustomPaymentInput";

interface PaymentFormProps {
  project: IProject;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ project }) => {
  const MAX_AMOUNT = 1000;
  const AMOUNT_STEP = 5;
  const MIN_AMOUNT = 5;
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    customPayment: Math.round(MAX_AMOUNT / AMOUNT_STEP),
  });
  let { isLoggedIn } = useAppSelector(selectCurrentUser);

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
    console.warn(error.message);
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

      <Link href={!isLoggedIn ? "/login" : "#"}>
        <Button type="submit" isLoading={loading}>
          Donate
        </Button>
      </Link>
    </form>
  );
};

export default PaymentForm;
