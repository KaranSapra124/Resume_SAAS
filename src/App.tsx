import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Global/Navbar";
import Home from "./Pages/Home";
import Login from "./Components/Auth/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const appRoutes = createBrowserRouter([
    {
      element: <Navbar />,
      path: "/",
      children: [
        {
          element: <Home />,
          path: "/",
        },
        {
          element: <Login />,
          path: "/login",
        },
      ],
    },
  ]);

  return (
    <>
      <GoogleOAuthProvider clientId="653138472300-tuibkerth5h75lpopv61co6fiahddjno.apps.googleusercontent.com" >
        <RouterProvider router={appRoutes} />
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
