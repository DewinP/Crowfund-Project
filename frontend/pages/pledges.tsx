import { Button, Heading, Tbody, Td } from "@chakra-ui/react";
import { Table, TableCaption, Th, Thead, Tr } from "@chakra-ui/table";
import dayjs from "dayjs";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { useFindAllPledgesQuery } from "../app/services/api";
import CardContainer from "../components/CardContainer";

const Pledges: NextPage = () => {
  const { data: pledges, isLoading } = useFindAllPledgesQuery();
  return (
    <CardContainer width="100%">
      <Table size="lg" variant="simple">
        <TableCaption>Pledges made by you</TableCaption>
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
                      <Link href={`/projects/${p.projectId}`} passHref>
                        <Button variant="link">{p.projectName}</Button>
                      </Link>
                    </Td>
                    <Td isNumeric>{p.amount}</Td>
                  </Tr>
                </Tbody>
              );
            })
          : null}
      </Table>
      {pledges?.length < 1 && !isLoading && (
        <Heading>You havent supported any projects yet.</Heading>
      )}
    </CardContainer>
  );
};

export default Pledges;
