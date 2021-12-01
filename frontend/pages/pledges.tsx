import { Button, Center, Heading, Tbody, Td } from "@chakra-ui/react";
import { Table, TableCaption, Th, Thead, Tr } from "@chakra-ui/table";
import dayjs from "dayjs";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import {
  useFindAllPledgesByUserQuery,
  useFindProjectQuery,
} from "../app/services/api";
import CardContainer from "../components/CardContainer";

const Pledges: NextPage = () => {
  const { data: pledges, isLoading } = useFindAllPledgesByUserQuery();
  return (
    <CardContainer width="100%">
      <Center p={3}>
        <Heading variant="h3">List of all your pledges</Heading>
      </Center>
      <Table size="lg" variant="simple">
        <TableCaption>
          {" "}
          {!isLoading
            ? `${pledges.length} pledges on file`
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
          ? pledges.map((p) => {
              return (
                <Tbody>
                  <Tr>
                    <Td>{dayjs(p.createdAt).format("MMMM D, YYYY h:mm A")}</Td>
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
  );
};

export default Pledges;
