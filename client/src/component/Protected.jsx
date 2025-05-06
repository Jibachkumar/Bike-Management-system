import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Spin } from "antd";

function Protected({ children, authentication = true, role = "user" }) {
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const user = useSelector((state) => state.auth);
  const { status } = user;
  const userRole = user.userData?.data?.role;

  useEffect(() => {
    console.log(user);

    // not authenticated and try to access protected route
    if (authentication && !status) {
      navigate("/login", { state: { from: location.pathname }, replace: true });
    } else if (
      authentication &&
      status &&
      role === "admin" &&
      userRole !== "admin"
    ) {
      navigate("/", { replace: true });
    } // ✅ Redirect admin users to /admin if they're logged in and not already there
    else if (status && userRole === "admin" && location.pathname === "/login") {
      navigate("/admin", { replace: true });
    }

    setLoader(false);
  }, [status, authentication, navigate, role, userRole, location]);

  return loader ? <Spin /> : <>{children}</>;
}

export default Protected;
