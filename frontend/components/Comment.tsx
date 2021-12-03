import { Stack, Flex, Text } from "@chakra-ui/layout";
import { Tag, TagLabel, TagRightIcon } from "@chakra-ui/react";
import React from "react";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IComment } from "../intefaces";
import CardContainer from "./CardContainer";
import UserInfo from "./UserInfo";

const Comment: React.FC<{ comment?: IComment }> = ({ comment }) => {
  return (
    <CardContainer width="100%" boxShadow="sm">
      <Stack>
        <Flex justifyContent="space-between">
          <UserInfo name="dewin" fontWeight="700" />
          <Flex>
            <Tag mr={2} aria-label="Backer Badge" size="sm" colorScheme="green">
              <TagLabel>Backer</TagLabel>
              <TagRightIcon as={FaHandHoldingUsd} />
            </Tag>
            <Text fontSize="sm" color="gray.500">
              2 days ago
            </Text>
          </Flex>
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
