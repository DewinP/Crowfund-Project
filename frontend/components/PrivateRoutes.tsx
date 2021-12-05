import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAppSelector } from "../app/hooks";
import { useMeQuery } from "../app/services/api";
import { selectCurrentUser } from "../app/services/Auth.slice";
import FullPageLoader from "../components/FullPageLoader";

interface PrivateRoutesProps {
  protectedRoutes: string[];
  children: React.ReactNode;
}

const PrivateRoutes: React.FC<PrivateRoutesProps> = ({
  protectedRoutes,
  children,
}) => {
  const router = useRouter();
  let { isLoggedIn, isFetching } = useAppSelector(selectCurrentUser);
  useMeQuery();
  const pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1;

  useEffect(() => {
    if (!isFetching && !isLoggedIn && pathIsProtected) {
      router.push("/login");
    }
  }, [isFetching, isLoggedIn, pathIsProtected]);

  if ((isFetching || !isLoggedIn) && pathIsProtected) {
    return <FullPageLoader />;
  }

  return <>{children}</>;
};

export default PrivateRoutes;
