import { Heading, Text } from "@chakra-ui/layout";
import { Box, Button, ButtonGroup, Icon } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { SiCheckmarx } from "react-icons/si";
import { useCreatePledgeMutation } from "../../../app/services/api";
import CardContainer from "../../../components/CardContainer";
import CoolTransition from "../../../components/CoolTransition";
import { IPledge } from "../../../intefaces";

const Pledge: NextPage = () => {
  const router = useRouter();
  let projectId = router.query.projectId as string;
  let sessionId = router.query.session_id as string;
  const [createPledge] = useCreatePledgeMutation();
  const [isLoading, setIsLoading] = useState(true);
  const [pledge, setPledge] = useState<IPledge | null>(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        let pledge = await createPledge({ projectId, sessionId }).unwrap();
        setIsLoading(false);
        setPledge(pledge);
      } catch (error) {
        router.push(`/projects/${projectId}`);
      }
    };
    sessionId && projectId && createOrder();
  }, [sessionId, projectId]);

  return (
    <CoolTransition>
      <CardContainer>
        {isLoading && !pledge && <Heading>Loading</Heading>}
        {pledge && (
          <Box textAlign="center" py={10} px={6}>
            <Icon as={SiCheckmarx} boxSize={"50px"} color={"green.500"} />
            <Heading as="h3" size="xl" mt={6} mb={2}>
              Successfully pledged{" "}
              <Text as="span" color="green">
                {" "}
                ${pledge?.amount}
              </Text>
            </Heading>
            <Text color={"gray.500"}>Thank you for your pledge!</Text>
            <ButtonGroup
              mt={3}
              variant="link"
              justifyContent="space-between"
              spacing={6}
            >
              <Link href="/pledges">
                <Button color="green">Check all your pledges</Button>
              </Link>
              <Link href={`/projects/${projectId}`}>
                <Button>Project page</Button>
              </Link>
            </ButtonGroup>
          </Box>
        )}
      </CardContainer>
    </CoolTransition>
  );
};
export default Pledge;
