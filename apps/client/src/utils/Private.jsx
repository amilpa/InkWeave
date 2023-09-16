/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export default function Private({ redirect }) {
  const { session } = useContext(AuthContext);

  if (!session[0].ready) {
    return (
      <div
        className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
        role="status"
        aria-label="loading"
      >
        <span class="sr-only">Loading...</span>
      </div>
    );
  }

  if (session[0].ready && !session[0].user) {
    return <Navigate to={redirect} replace />;
  }
  return <Outlet />;
}
