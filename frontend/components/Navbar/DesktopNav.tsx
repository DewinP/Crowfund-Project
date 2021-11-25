import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const DesktopNav: React.FC<{ isLoggedIn?: string }> = ({
  isLoggedIn = true,
}) => {
  const router = useRouter();
  const pathName = router.pathname;
  return (
    <Stack direction="row" spacing={4} alignItems="center">
      {isLoggedIn && (
        <Link href="/create-project" passHref>
          <Button variant={pathName !== "/create-project" ? "ghost" : null}>
            Start a Project
          </Button>
        </Link>
      )}
      <Link href="/projects" passHref>
        <Button variant={pathName !== "/projects" ? "ghost" : null}>
          Projects
        </Button>
      </Link>
      <Link href="/funded" passHref>
        <Button variant={pathName !== "/funded" ? "ghost" : null}>
          Fully Funded
        </Button>
      </Link>
    </Stack>
  );
};

export default DesktopNav;
