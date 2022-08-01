import { BaseLayout } from "components/Layout";
import SuspenseLoader from "components/Loader";
import { lazy, Suspense } from "react";

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const ConnectWallet = Loader(lazy(() => import("pages/wallet")));
const Home = Loader(lazy(() => import("pages/home")));
const UserProfile = Loader(lazy(() => import("pages/UserProfile")));
const ViewArtist = Loader(lazy(() => import("pages/ViewArtist")));
const Genres = Loader(lazy(() => import("pages/genres")));
const Charts = Loader(lazy(() => import("pages/charts")));
const Favorites = Loader(lazy(() => import("pages/favorites")));
const Playlist = Loader(lazy(() => import("pages/playlist")));
const Collections = Loader(lazy(() => import("pages/collections")));
const Settings = Loader(lazy(() => import("pages/settings")));
const NotFound = Loader(lazy(() => import("components/NotFound")));

export const routes = [
  {
    path: "/connect",
    element: <ConnectWallet />,
  },
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user-profile",
        element: <UserProfile />,
      },
      {
        path: "/view-artist",
        element: <ViewArtist />,
      },
      {
        path: "/gen",
        element: <Genres />,
      },
      {
        path: "/charts",
        element: <Charts />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/playlist",
        element: <Playlist />,
      },
      {
        path: "/collections",
        element: <Collections />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
