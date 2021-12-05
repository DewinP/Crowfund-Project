import { Stack, Flex, Text, Box, Divider } from "@chakra-ui/layout";
import { Button, Tag, TagLabel, TagRightIcon } from "@chakra-ui/react";
import dayjs from "dayjs";
import React from "react";
import { IComment } from "../intefaces";
import CardContainer from "./CardContainer";
import UserInfo from "./UserInfo";
import relativeTime from "dayjs/plugin/relativeTime";
import CoolTransition from "./CoolTransition";
import { useAppSelector } from "../app/hooks";
import { selectCurrentUser } from "../app/services/Auth.slice";
import { cpuUsage } from "process";
import CommentForm from "./CommentForm";
dayjs.extend(relativeTime);

const Comment: React.FC<{ comment: IComment; isCreator: boolean }> = ({
  comment,
  isCreator,
}) => {
  const [editComment, setEditComment] = React.useState(false);
  const handleEditComment = () => {
    setEditComment(!editComment);
  };
  return (
    <CoolTransition>
      {!editComment ? (
        <CardContainer width="100%" boxShadow="sm">
          <Stack justifyContent="left">
            <Flex justifyContent="space-between">
              <UserInfo name={comment.userName} fontWeight="700" />

              <Box>
                <Text fontSize="sm" color="gray.500">
                  Posted {dayjs(comment.createdAt).fromNow()}
                </Text>
                {comment.createdAt !== comment.updatedAt && (
                  <Text fontSize="sm" color="gray.500">
                    {`Edited ${dayjs(comment.updatedAt).fromNow()}`}
                  </Text>
                )}
              </Box>
            </Flex>
            <Text fontSize="sm" color="gray.500" align="left">
              {comment.body}
            </Text>
            {isCreator && (
              <>
                <Divider />
                <Button width="100px" size="xs" onClick={handleEditComment}>
                  Edit Comment
                </Button>
              </>
            )}
          </Stack>
        </CardContainer>
      ) : (
        <CommentForm setEditComment={handleEditComment} comment={comment} />
      )}
    </CoolTransition>
  );
};

export default Comment;
