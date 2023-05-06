import React, { useEffect, useState } from "react";
import { BiMoviePlay } from "react-icons/bi";

import MovieDetails from "./MovieDetails";

const Movie = () => {
  const [allMovie, setMovie] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, []);
  return (
    <section className="pt-14 pb-14">
      <div className=" flex gap-4 items-center text-2xl ml-4 lg:pt-8 pl-2 lg:pl-12 text-green-500 font-bold underline ">
        <BiMoviePlay></BiMoviePlay>
        <h2>All Movie:</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-14 mt-8 ml-2 lg:ml-8 mr-4">
        {allMovie?.map((details) => (
          <MovieDetails details={details} key={details?.id}></MovieDetails>
        ))}
      </div>
    </section>
  );
};

export default Movie;
