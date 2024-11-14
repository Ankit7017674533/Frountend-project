import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // For navigation to Home page

function ServicePage() {
  const services = [
    { name: 'Exterior Wash', description: 'A thorough wash of the car’s exterior to remove dirt, grime, and stains.' },
    { name: 'Interior Detailing', description: 'Detailed cleaning of the interior including seats, carpets, and dashboard.' },
    { name: 'Waxing and Polishing', description: 'Enhance the shine of your car’s exterior with premium wax and polish.' },
    { name: 'Engine Cleaning', description: 'Professional cleaning of the engine bay to ensure it looks and performs like new.' },
    { name: 'Full Car Detailing', description: 'A comprehensive service covering both exterior and interior detailing.' },
    { name: 'Paint Protection', description: 'Application of protective layers to keep your car’s paint looking pristine.' },
    { name: 'Ceramic Coating', description: 'Advanced protection with a ceramic layer to keep the car looking new.' },
    { name: 'Odor Removal', description: 'Complete odor removal to ensure a fresh interior environment.' },
  ];

  return (
    <div className="container my-5">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 rounded">
        <div className="container-fluid">
          <div className="d-flex justify-content-between w-100">
            {/* Left side elements: Navbar links */}
            <div className="d-flex align-items-center">
              <Link className="navbar-brand" to="/">Home</Link>
            </div>

            {/* Centered Title */}
            <div className="mx-auto">
              <Link className="navbar-brand" to="/">JAI DURGA CAR DETAILING</Link>
            </div>

            {/* Right side elements: Search Form */}
            <div>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-light" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="text-center mb-4">
        <h1 className="display-4">Our Services</h1>
        <p className="lead text-muted">High-quality car detailing services tailored to meet your needs.</p>
      </div>

      {/* Services List */}
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{service.name}</h5>
                <p className="card-text">{service.description}</p>
              </div>
              <div className="card-footer text-center">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicePage;
