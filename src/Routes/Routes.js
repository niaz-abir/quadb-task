import { createBrowserRouter } from "react-router-dom";
import Movie from "../Pages/Movie/Movie";
import MovieDetailsCard from "../Pages/Movie/MovieDetailsCard";

export const routes = createBrowserRouter([
  { path: "/", element: <Movie></Movie> },
  {
    path: "/movieDetailsCard/:id",
    element: <MovieDetailsCard></MovieDetailsCard>,
  },
]);

export default routes;
