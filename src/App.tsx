import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ROUTES from "./utils/routes";

// Import pages
import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import Player from "./pages/player/Player";

const BrowserRouter = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: ROUTES.PLAYER, element: <Player /> },
    ],
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
