import { Stack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const NotAuthNav: React.FC = () => {
  return (
    <Stack
      flex={{ base: 1, md: 0 }}
      justify={"flex-end"}
      direction={"row"}
      spacing={6}
    >
      <Link href="/login" passHref>
        <Button as={"a"} fontSize="sm" fontWeight={400} colorScheme="teal">
          Login
        </Button>
      </Link>
      <Link href="/signup" passHref>
        <Button
          display={{ base: "none", md: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"pink.400"}
          _hover={{
            bg: "pink.300",
          }}
        >
          Sign Up
        </Button>
      </Link>
    </Stack>
  );
};

export default NotAuthNav;
