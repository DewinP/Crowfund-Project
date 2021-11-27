import { Stripe } from "@stripe/stripe-js";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import Layout from "../components/Layout";
import getStripe from "../utils/getStripe";

const pledgeSuccess: NextPage = () => {
  const router = useRouter();
  const [stripe, setStripe] = useState<Stripe | null>(null);
  const sessionId = router.query.session_id as string;
  useEffect(() => {
    async function getStripeStuff() {
      let stripe = await getStripe();
      setStripe(stripe);
    }

    getStripeStuff();
  }, []);

  return (
    <Layout>
      <CardContainer>hHello</CardContainer>
    </Layout>
  );
};

export default pledgeSuccess;
