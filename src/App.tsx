import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Global/Navbar";

function App() {
  const appRoutes = createBrowserRouter([
    { element: <Navbar />, path: "/", children: [] },
  ]);

  return (
    <>
      <RouterProvider router={appRoutes} />
    </>
  );
}

export default App;
