import React, { useEffect } from "react";
import cookies from "js-cookie";
import { Outlet, useNavigate } from "react-router-dom";

const Protected = () => {
  const navigate = useNavigate();
  console.log("cookies.get(token)", cookies.get("token"));
  useEffect(() => {
    if (!cookies.get("token")) {
      navigate("/signin");
    }
  });
  return !!cookies.get("token") ? <Outlet /> : "";
};

export default Protected;
