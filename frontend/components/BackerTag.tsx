import { Box } from "@chakra-ui/layout";
import { Tag, TagLabel, TagRightIcon } from "@chakra-ui/tag";
import React from "react";
import { FaHandHoldingUsd } from "react-icons/fa";

const BackerTag: React.FC = () => {
  return (
    <Tag
      aria-label="Backer Badge"
      h="20px"
      variant="subtle"
      size="sm"
      colorScheme="green"
    >
      <TagLabel>Backer</TagLabel>
      <TagRightIcon as={FaHandHoldingUsd} />
    </Tag>
  );
};

export default BackerTag;
