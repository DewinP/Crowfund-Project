import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/layout";
import Link from "next/link";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const MAX_AMOUNT = 1000;
  const AMOUNT_STEP = 5;
  const MIN_AMOUNT = 5;
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    customPayment: MIN_AMOUNT,
  });
  let { isLoggedIn } = useAppSelector(selectCurrentUser);

  console.log("input:", input.customPayment);

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
      projectName: project.name,
      projectId: project._id,
    }).unwrap();

    // Redirect to stripe checkout page.
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
        projectName={project.name}
        projectGoal={project.pledgeGoal}
        name={"customDonation"}
        value={input.customPayment}
        min={MIN_AMOUNT}
        max={MAX_AMOUNT}
        step={AMOUNT_STEP}
        onChange={handleInputChange}
      />
      <Text align="left">Use stripe's test card: 4242 4242 4242</Text>
      {isLoggedIn ? (
        <Button my={4} type="submit" colorScheme="teal" isLoading={loading}>
          Pledge Now
        </Button>
      ) : (
        <Link href="/login">
          <Button my={4} type="submit">
            Login to Pledge
          </Button>
        </Link>
      )}
    </form>
  );
};

export default PaymentForm;
