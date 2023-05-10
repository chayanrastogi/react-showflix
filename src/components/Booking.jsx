import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Booking = ({ displayName }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [phone, setPhone] = useState('');

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   // making an object to store the user info
    const formData = {
      displayName,
      name,
      date,
      phone,
      email
    };

    // checking wether all the queries are filled or not
    if (name !== "" && phone !== "" && date !== "" && email !== "") {
      alert("Booking Done");

      localStorage.setItem('bookingData', JSON.stringify(formData));

      setName("");
      setDate("");
      setPhone("");
      setEmail("");
    } else {
      alert("Please fill all the queries");
    }

  };

  return (
    <>
      <Link to={`/`}>
        <h1 id="show-name">Book Tickets - {displayName}</h1>
      </Link>
      <div id='book-form'>
        <form id="form" onSubmit={handleSubmit}>
          <label>Booking Date:</label>
          <input type="date" value={date} onChange={handleDateChange} />
          <br />
          <input type="text" value={name} onChange={handleNameChange} placeholder='Full Name' />
          <br />
          <input type="text" placeholder='Phone no.' value={phone} onChange={handlePhoneChange} />
          <br />
          <input type="email" value={email} onChange={handleEmailChange} placeholder='Email' />
          <br />
          <button id='summary-btn' className='submit' type="submit">Submit</button>
        </form>
      </div>
      <footer><a href='https://github.com/chayanrastogi' target='_blank'>GitHub </a> || <a href='https://github.com/chayanrastogi' target='_blank'> @Chayan Rastogi</a></footer>
    </>
  );
};

export default Booking;
