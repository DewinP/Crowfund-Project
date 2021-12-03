import {
  Button,
  Center,
  Heading,
  Stack,
  Tag,
  TagLabel,
  TagRightIcon,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { Table, TableCaption, Th, Thead, Tr } from "@chakra-ui/table";
import dayjs from "dayjs";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { FaHandHoldingUsd } from "react-icons/fa";
import { useFindAllPledgesByUserQuery } from "../app/services/api";
import CardContainer from "../components/CardContainer";
import CoolTransition from "../components/CoolTransition";

const Pledges: NextPage = () => {
  const { data: pledges, isLoading } = useFindAllPledgesByUserQuery();
  return (
    <CoolTransition>
      <Stack px={{ base: 0, md: 10 }}>
        <Heading mb={4}>List of all your pledges</Heading>
        <CardContainer width="100vw">
          <Table size="sm" variant="simple">
            <TableCaption fontSize="md">
              {" "}
              {!isLoading
                ? `${pledges?.length} pledges on file`
                : "Fetching pledges..."}
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Project</Th>
                <Th isNumeric>Amount</Th>
              </Tr>
            </Thead>
            {pledges?.length > 0
              ? pledges?.map((p) => {
                  return (
                    <Tbody key={p._id}>
                      <Tr>
                        <Td>
                          {dayjs(p.createdAt).format("MMMM D, YYYY h:mm A")}
                        </Td>
                        <Td>
                          <Link href={`/projects/${p.project}`} passHref>
                            <Button variant="link">{p.projectName}</Button>
                          </Link>
                        </Td>
                        <Td isNumeric>${p.amount}</Td>
                      </Tr>
                    </Tbody>
                  );
                })
              : null}
          </Table>
        </CardContainer>
      </Stack>
    </CoolTransition>
  );
};

export default Pledges;
