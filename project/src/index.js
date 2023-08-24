import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FavouritesContextProvider } from "./store/context";

import "./styles/app.scss";

import { App } from "./pages/App";
import { Meetups } from "./pages/Meetups";
import { Favorites } from "./pages/Favorites";
import { NewMeetup } from "./pages/NewMeetup";
import { Error } from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/meetups",
    element: <Meetups />,
  },
  {
    path: "/favourites",
    element: <Favorites />,
  },
  {
    path: "/new-meetup",
    element: <NewMeetup />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FavouritesContextProvider>
      <RouterProvider router={router} />
    </FavouritesContextProvider>
  </React.StrictMode>
);
