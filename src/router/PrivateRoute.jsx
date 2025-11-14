// import { Navigate, Outlet } from "react-router-dom";

// const PrivateRoute = () => {
//   let user = null;

//   try {
//     const storedUser = localStorage.getItem("user");
//     user = storedUser ? JSON.parse(storedUser) : null;
//   } catch (err) {
//     console.warn("Failed to parse user from localStorage:", err);
//     user = null; 
//   }

//   if (!user || !user.accessToken) {
//     return <Navigate to="/home" replace />;
//   }

//   return <Outlet />;
// };

// export default PrivateRoute;


import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isLoggedIn = true; 

  return isLoggedIn ? <Outlet /> : <Navigate to="/home" replace />;
};

export default PrivateRoute;
