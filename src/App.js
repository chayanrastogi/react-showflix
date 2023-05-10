import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowSummary from './components/ShowSummary';
import Booking from './components/Booking';


const App = () => {
  const [selectedMovie, setSelectedMovie] = useState('');

  // function to recieve movie name and send it to booking
  const recieveMovie = (movieName) => {
    setSelectedMovie(movieName);
  }
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<ShowList />} />
          <Route path="/summary/:id" element={<ShowSummary sendMovie={recieveMovie} />} />
          <Route path="/booking" element={<Booking displayName={selectedMovie} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
