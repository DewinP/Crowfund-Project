import { Stack, Flex, Text, Box, Divider } from "@chakra-ui/layout";
import { Button, Tag, TagLabel, TagRightIcon } from "@chakra-ui/react";
import dayjs from "dayjs";
import React from "react";
import { IComment } from "../intefaces";
import CardContainer from "./CardContainer";
import UserInfo from "./UserInfo";
import relativeTime from "dayjs/plugin/relativeTime";
import CoolTransition from "./CoolTransition";
import CommentForm from "./CommentForm";
import { useDeleteCommentMutation } from "../app/services/api";
import BackerTag from "./BackerTag";
dayjs.extend(relativeTime);

const Comment: React.FC<{
  comment: IComment;
  isCreator: boolean;
  isBacker: boolean;
}> = ({ comment, isCreator, isBacker }) => {
  const [editComment, setEditComment] = React.useState(false);
  const [deleteComment] = useDeleteCommentMutation();

  const handleEditComment = () => {
    setEditComment(!editComment);
  };

  return (
    <CoolTransition>
      {!editComment ? (
        <CardContainer width="100%" boxShadow="sm">
          <Stack justifyContent="left">
            <Flex justifyContent="space-between" align="center">
              <UserInfo
                name={comment.userName}
                color={isCreator && "#22577E"}
                fontWeight="700"
              />
              {isBacker && <BackerTag />}
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
                <Flex>
                  <Button size="xs" mr={4} onClick={handleEditComment}>
                    Edit Comment
                  </Button>
                  <Button
                    colorScheme="red"
                    size="xs"
                    onClick={() => deleteComment({ commentId: comment?._id })}
                  >
                    Delete
                  </Button>
                </Flex>
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
