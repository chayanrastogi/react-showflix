import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const ShowSummary = ({ sendMovie }) => {
  const [show, setShow] = useState([]);
  const { id } = useParams();

  // fetching data through axios using movie id
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://api.tvmaze.com/shows/${id}`)
        .then((response) => {
          setShow(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    fetchData();
  }, [id]);


 // sending movie name to app.js 
  const handleClick = (movieName) => {
    sendMovie(movieName);
  }

  return (
    <>
      <h1 id='show-name'>{show.name}</h1>
      <div id='info-container'>
        <div id='show-info'>
          <img id="img" src={show.image?.medium ? show.image?.medium : "https://i.ibb.co/4Nw3Tdt/replace.png"} alt="img" />
          <p>IMDB: &#11088;{show.rating?.average ? show.rating?.average : "N/A"}</p>
          <p>{show.language}</p>
          <p>Runtime: {show.runtime} mins</p>
          <p id='summary'>{show.summary}</p>
          <Link to={`/booking`} show={show.name}>
            <button id='summary-btn' onClick={handleClick(show.name)}>Book Movie Ticket</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShowSummary;
