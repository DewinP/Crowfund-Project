import { Stack, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { IComment } from "../intefaces";
import CardContainer from "./CardContainer";
import UserInfo from "./UserInfo";

const Comment: React.FC<{ comment?: IComment }> = ({ comment }) => {
  return (
    <CardContainer width="700px" boxShadow="sm">
      <Stack>
        <Flex justifyContent="space-between">
          <UserInfo name="dewin" fontWeight="700" />
          <Text fontSize="sm" color="gray.500">
            2 days ago
          </Text>
        </Flex>
        <Text fontSize="sm" color="gray.500" align="left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eos
          quia doloremque, quae, quam dolorum quisquam sum dolor sit amet
          consectetur adipisicing elit. Quisquam eos quia doloremque, quae, quam
          dolorum quisquam
        </Text>
      </Stack>
    </CardContainer>
  );
};

export default Comment;
