import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import pages
import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

function App() {
  return (
    <RouterProvider
      fallbackElement={<div>loading...</div>}
      router={BrowserRouter}
    />
  );
}

export default App;
