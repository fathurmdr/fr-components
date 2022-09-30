import React from "react";
import { useLocation } from "react-router-dom";

function ErrorPage() {
  const { pathname } = useLocation();
  return <div>this path {pathname} not found</div>;
}

export default ErrorPage;
