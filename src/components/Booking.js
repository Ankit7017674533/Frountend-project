import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Booking() {
  const [customerName, setCustomerName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!customerName || !carModel || !serviceType || !bookingDate || !contactNumber || !address) {
      setErrorMessage("All fields are required!");
      return;
    }

    const bookingData = {
      customerName,
      carModel,
      serviceType,
      bookingDate,
      contactNumber,
      address,
    };

    try {
      const response = await axios.post('http://localhost:8081/api/booking', bookingData, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
      });

      setSuccessMessage("Booking successful!");
      setErrorMessage('');
      setCustomerName('');
      setCarModel('');
      setServiceType('');
      setBookingDate('');
      setContactNumber('');
      setAddress('');

      navigate('/');
    } catch (error) {
      setErrorMessage(error.response ? error.response.data : "Something went wrong. Please try again.");
      setSuccessMessage('');
    }
  };

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4">Book Your Car Detailing Service</h1>
        <p className="lead text-muted">Ensure your car shines like new! Fill out the form below to schedule your service.</p>
      </div>

      {errorMessage && <div className="alert alert-danger text-center">{errorMessage}</div>}
      {successMessage && <div className="alert alert-success text-center">{successMessage}</div>}

      <form onSubmit={handleBooking} className="card p-4 shadow-lg" style={{ maxWidth: '600px', margin: 'auto' }}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="customerName"
            placeholder="Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
          <label htmlFor="customerName">Customer Name</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="carModel"
            placeholder="Car Model"
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
            required
          />
          <label htmlFor="carModel">Car Model</label>
        </div>

        <div className="form-floating mb-3">
          <select
            className="form-select"
            id="serviceType"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            required
          >
            <option value="" disabled>Select Service</option>
            <option value="basic">Basic Wash</option>
            <option value="premium">Premium Detail</option>
            <option value="full-service">Full Service</option>
          </select>
          <label htmlFor="serviceType">Service Type</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="datetime-local"
            className="form-control"
            id="bookingDate"
            placeholder="Booking Date"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            required
          />
          <label htmlFor="bookingDate">Booking Date</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="tel"
            className="form-control"
            id="contactNumber"
            placeholder="Contact Number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
          <label htmlFor="contactNumber">Contact Number</label>
        </div>

        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            id="address"
            placeholder="Address"
            style={{ height: '100px' }}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></textarea>
          <label htmlFor="address">Address</label>
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-4 py-2" style={{ fontSize: '1.2em' }}>Book Now</button>
      </form>
    </div>
  );
}

export default Booking;
