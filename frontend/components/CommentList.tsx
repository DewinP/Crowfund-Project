import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { IComment } from "../intefaces";
import CoolTransition from "./CoolTransition";
import Comment from "./Comment";
import { useAppSelector } from "../app/hooks";
import { selectCurrentUser } from "../app/services/Auth.slice";
import { useFindAllPledgesByProjectQuery } from "../app/services/api";
import CommentForm from "./CommentForm";

const CommentList: React.FC<{ comments: IComment[]; projectId: string }> = ({
  projectId,
  comments,
}) => {
  let { user } = useAppSelector(selectCurrentUser);
  const { data: pledges } = useFindAllPledgesByProjectQuery({
    projectId: projectId,
  });
  return (
    <CoolTransition>
      <Stack justifyContent="center">
        {user && <CommentForm />}
        {comments?.map((comment) => {
          const isCreator = comment.user === user?._id;
          const isBacker = pledges?.some(
            (pledge) => pledge.user === comment.user
          );
          return (
            <Comment
              isBacker={isBacker}
              isCreator={isCreator}
              key={comment._id}
              comment={comment}
            />
          );
        })}
        {!comments?.length && <Text>No comments yet</Text>}
      </Stack>
    </CoolTransition>
  );
};

export default CommentList;
