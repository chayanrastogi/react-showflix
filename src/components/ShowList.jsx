import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const ShowList = () => {
  const [shows, setShows] = useState([]);

  // fetching data using axios
  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://api.tvmaze.com/search/shows?q=all')
        .then((response) => {
          setShows(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    fetchData();
  }, []);


  return (
    <>
      <h1 id='heading'>ShowFLix</h1>
      <div id='grid'>
        {shows.map((show) => (
          <div id='card' key={show.show.id}>
            {/* if the value of img from api is null, a generic img will appear  */}
            <img src={show.show.image?.medium ? show.show.image?.medium : "https://i.ibb.co/4Nw3Tdt/replace.png"} alt='img' />
            <div id="container">
              <h3>{show.show.name}</h3>
              <p>IMDB: &#11088;{show.show.rating?.average ? show.show.rating?.average : "N/A"}</p>
              <p>{show.show.language}</p>
              <p>{show.show.genres[0]}, {show.show.genres[1]}</p>
            </div>
            <Link to={`/summary/${show.show.id}`}>
              <button id='summary-btn' >View Summary</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowList;
