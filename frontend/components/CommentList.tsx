import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { IComment } from "../intefaces";
import CoolTransition from "./CoolTransition";
import Comment from "./Comment";
import { useAppSelector } from "../app/hooks";
import { selectCurrentUser } from "../app/services/Auth.slice";
import { useFindAllPledgesByUserQuery } from "../app/services/api";
import CommentForm from "./CommentForm";

const CommentList: React.FC<{ comments: IComment[] }> = ({ comments }) => {
  let { user } = useAppSelector(selectCurrentUser);
  const { data: pledges } = useFindAllPledgesByUserQuery();
  const isBacker = pledges?.some(
    (pledge) => pledge.user === comments?.[0]?.user
  );
  return (
    <CoolTransition>
      <Stack justifyContent="center">
        {user && <CommentForm isBacker={isBacker} />}
        {comments?.map((comment) => {
          return (
            <Comment key={comment._id} isBacker={isBacker} comment={comment} />
          );
        })}
        {!comments?.length && <Text>No comments yet</Text>}
      </Stack>
    </CoolTransition>
  );
};

export default CommentList;
