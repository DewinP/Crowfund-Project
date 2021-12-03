import { Avatar } from "@chakra-ui/avatar";
import { Stack, Text, TextProps } from "@chakra-ui/layout";
import React from "react";

const UserInfo: React.FC<
  { avatar?: boolean; by?: boolean; name: string } & TextProps
> = ({ name, avatar = true, ...props }) => {
  const nameCapitalized = name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );
  return (
    <Stack direction="row" align="center" spacing={1}>
      {avatar && <Avatar size="xs" w="20px" h="20px" name={name} />}
      <Text {...props}>{nameCapitalized}</Text>
    </Stack>
  );
};

export default UserInfo;
