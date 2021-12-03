import { Stack, Flex, Text } from "@chakra-ui/layout";
import { Tag, TagLabel, TagRightIcon } from "@chakra-ui/react";
import dayjs from "dayjs";
import React from "react";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IComment } from "../intefaces";
import CardContainer from "./CardContainer";
import UserInfo from "./UserInfo";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const Comment: React.FC<{ comment: IComment; isBacker: boolean }> = ({
  comment,
  isBacker,
}) => {
  return (
    <CardContainer width="100%" boxShadow="sm">
      <Stack>
        <Flex justifyContent="space-between">
          <UserInfo name={comment.userName} fontWeight="700" />
          <Flex>
            {isBacker && (
              <Tag
                mr={2}
                aria-label="Backer Badge"
                size="sm"
                colorScheme="green"
              >
                <TagLabel>Backer</TagLabel>
                <TagRightIcon as={FaHandHoldingUsd} />
              </Tag>
            )}
            <Text fontSize="sm" color="gray.500">
              {dayjs(comment.createdAt).fromNow()}
            </Text>
          </Flex>
        </Flex>
        <Text fontSize="sm" color="gray.500" align="left">
          {comment.body}
        </Text>
      </Stack>
    </CardContainer>
  );
};

export default Comment;
