import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { IComment } from "../intefaces";
import CoolTransition from "./CoolTransition";
import Comment from "./Comment";

const CommentList: React.FC<{ comments?: IComment[] }> = ({ comments }) => {
  return (
    <CoolTransition>
      <Stack>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </Stack>
    </CoolTransition>
  );
};

export default CommentList;
