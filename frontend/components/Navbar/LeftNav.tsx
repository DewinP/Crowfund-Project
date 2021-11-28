import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const LeftNav: React.FC<{ isLoggedIn?: string; isMobile?: boolean }> = ({
  isLoggedIn = true,
  isMobile,
}) => {
  const router = useRouter();
  const pathName = router.pathname;
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      spacing={4}
      alignItems="center"
    >
      {isLoggedIn && (
        <Link href="/create-project" passHref>
          <Button
            isFullWidth={isMobile}
            variant={pathName !== "/create-project" ? "ghost" : null}
          >
            Start a Project
          </Button>
        </Link>
      )}
      <Link href="/projects" passHref>
        <Button
          isFullWidth={isMobile}
          variant={pathName !== "/projects" ? "ghost" : null}
        >
          Projects
        </Button>
      </Link>
    </Stack>
  );
};

export default LeftNav;
