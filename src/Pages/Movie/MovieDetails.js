import React from "react";
import { Link } from "react-router-dom";

const MovieDetails = ({ details }) => {
  return (
    <div>
      <Link to={`/movieDetailsCard/${details?.show.id}`}>
        <div className="card w-full lg:w-[350px] rounded-none bg-dark-400 transform hover:scale-105 transition duration-300 border-b-2 border-green-400  shadow-xl">
          <figure>
            <img
              className="h-[270px] w-[200px] lg:w-[300px]"
              src={details?.show?.image?.original}
              alt=""
            />
          </figure>
          <div className="card-body text-white">
            <h2 className="card-title text-green-600">{details?.show.name}</h2>
            <div className="flex flex-row gap-4">
              <h2>{details?.show.language}</h2>
              <h2>{details?.show.genres[0]}</h2>
            </div>
            <div className="flex flex-row gap-4">
              <h2>Runtime : {details?.show.runtime}</h2>
              <h2>Ratting: {details?.show.rating.average}</h2>
            </div>
          </div>
          <Link
            className="mb-4 ml-6 w-full"
            to={`/movieDetailsCard/${details?.show.id}`}
          >
            <button className="btn bg-green-600  hover:bg-transparent text-white hover:text-green-600 font-bold py-2 px-4 rounded transition duration-300">
              Details
            </button>
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default MovieDetails;
