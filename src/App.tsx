import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ROUTES from "./utils/routes";

// Import pages
import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import Player from "./pages/player/Player";
import UploadAudio from "./pages/uploading/UploadAudio";

const BrowserRouter = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: ROUTES.PLAYER, element: <Player /> },
      { path: ROUTES.UPLOADING, element: <UploadAudio /> },
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
