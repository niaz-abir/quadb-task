import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetailsCard = () => {
  const [movieCard, setMovieCard] = useState();

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => setMovieCard(data));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const movie = form.movie.value;
    console.log(email, name, movie);
  };
  return (
    <div className="flex justify-center pt-8 pb-16 text-white">
      {/* <h1>status:{movieCard?.averageRuntime}</h1> */}
      <div className="card w-[370px] lg:w-[700px] bg-dark-400  shadow-xl">
        <figure>
          <img
            className=" w-[300px] lg:w-[500px] h-[220px] mt-4"
            src={movieCard?.image?.original}
            alt=""
          />
        </figure>
        <div className=" ml-2 lg:ml-12 mt-6 mb-4">
          <div className="mb-4">
            <h2 className="text-2xl mb-4 text-green-600 font-bold">
              {movieCard?.name}
            </h2>
            <p>Details : {movieCard?.summary}</p>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-4 mb-2 ">
            <p>premiered: {movieCard?.premiered}</p>
            <p>RunTime : {movieCard?.runtime}</p>
            <p>averageRuntime : {movieCard?.averageRuntime}</p>
          </div>
          <div className="flex flex-col lg:flex-row  gap-4 mb-2 ">
            <p>Type: {movieCard?.type}</p>
            <p>Language : {movieCard?.language}</p>
            <p>genres : {movieCard?.genres[0]}</p>
          </div>
          {/* modal start here */}
          <div>
            {/* The button to open modal */}
            <label
              htmlFor="my-modal-3"
              className="btn bg-green-600  hover:bg-transparent text-white hover:text-green-600 font-bold py-2 px-4 rounded transition duration-300 mt-2"
            >
              open modal
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box w-4/5 lg:w-full bg-dark-400 relative">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                {/* form start here */}
                <form onSubmit={handleSubmit}>
                  <h1 className="text-green-500 mb-2 text-2xl font-bold">
                    Booking Form
                  </h1>
                  <label>Name : </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered rounded-none w-full max-w-xs mb-4"
                  />

                  <div>
                    <label>Email : </label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      className="input input-bordered rounded-none w-full max-w-xs mb-4"
                    />
                  </div>

                  <div>
                    <label>Movie : </label>
                    <input
                      type="text"
                      name="movie"
                      placeholder="Movie"
                      className="input input-bordered rounded-none w-full max-w-xs mb-4"
                    />
                  </div>
                  <button className="btn bg-green-600  hover:bg-transparent text-white hover:text-green-600 font-bold py-2 px-4 rounded transition duration-300 mt-6">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsCard;
