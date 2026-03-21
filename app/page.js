'use client';
import { useState, useEffect } from 'react';
import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  // 1. STATE & DATA
  const [openId, setOpenId] = useState(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);


   // FAQ
  const faqs = [
    {
      id: 1,
      question: "How do I book a ride with Aavoride?",
      answer: "You can book a ride directly through the Aavoride website by entering your pickup and drop location."
    },
    {
      id: 2,
      question: "Can I schedule a ride in advance?",
      answer: "Yes, Aavoride allows you to book rides in advance so your driver arrives at the scheduled time."
    },
    {
      id: 3,
      question: "What types of rides does Aavoride offer?",
      answer: "Aavoride offers local city rides, outstation trips, and airport transfers."
    },
    {
      id: 4,
      question: "How will i know my driver details?",
      answer: "Once your booking is confirmed, you will receive the driver's name, phone number, and vehicle details brfore the pickup. "
    },
    {
      id: 5,
      question: "What payment method are available?",
      answer: "You can pay using options or other available payment methods during booking."
    }
  ];

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
  <main className='overflow-x-hidden'>

      {/* 1. Header/Navbar*/}
      <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white border-bottom py-3 shadow-sm">
        <div className="container d-flex justify-content-between align-items-center">

          <a className="navbar-brand text-orange fw-bold fs-3" href="" style={{ color: '#ff471a'}}>
            AAVORide
          </a>

          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navMenu' aria-controls='aavorideNavbar' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className="collapse navbar-collapse" id='navMenu'>
            <ul className='navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4'>
              <li className="nav-item">
                <a href="" className="nav-link text-orange active" style={{ color: '#ff471a'}}>Home</a>
              </li>

              <li className="nav-item">
                <a href="" className="nav-link">Services</a>
              </li>

              <li className="nav-item">
                <a href="" className="nav-link">Contact</a>
              </li>
            </ul>

            <div className="d-flex gap-3 align-items-center">
              <span className="text-muted"><i className="bi bi-globe"></i> EN </span>
              <span className="text-muted">Help </span>
              <button className="btn btn-outline-dark border-0">Login</button>
              <button className="btn btn-orange text-white px-4 rounded-3">SignUp</button>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section*/}
      <section className="hero-section text-white py-5">
        <div className="container py-5">
          <div className="row align-items-center mt-5">
            <div className="col-md-6">
              <h1 className="fw-bold display-4" data-aos="fade-left">
                Your Trusted for Outstation Travel
              </h1>
              <p className="lead opacity-100 my-4" data-aos="fade-up">
                Easy cab booking for long-distance journeys, airport rides, weddings and corporate travel.
              </p>
              <button className="btn btn-orange" data-aos="zoom-in">Book Ride</button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How its work*/}
      <section className="py-5 mt-5" style={{ backgroundColor: '#efe8e4'}}>
        <div className="container text-center">
          <h2 className="text-orange fw-bold mb-5" data-aos="fade-up">How its work</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            
            <div className="col-md-4">
              <div className="p-4">
                <div className="num display-1 fw-bold opacity-10 mb-3" data-aos="zoom-in" style={{ color: '#ff471a'}}>1</div>
                <h4 className="fw-semibold my-3 text-left" data-aos="fade-up" style={{ textAlign: 'left', fontSize: '1.2rem', fontWeight: 'bold'}}>Search & Choose Your Ride</h4>
                <p className="text-muted text-left" data-aos-delay="200" style={{ textAlign: 'left'}}>Enter your pickup and drop location, travel date, and select the perfect cab for your journey.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4">
                <div className="num display-1 fw-bold opacity-10 mb-3" data-aos="zoom-in" style={{ color: '#ff471a'}}>2</div>
                <h4 className="fw-semibold my-3 text-left" data-aos="fade-up" style={{ textAlign: 'left', fontSize: '1.2rem', fontWeight: 'bold'}}>Confirm Your Booking</h4>
                <p className="text-muted text-left" data-aos-delay="200" style={{ textAlign: 'left'}}>Check fare details, choose your preferred vihicle, and confirm your booking instantly with transparent pricing.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4">
                <div className="num display-1 fw-bold opacity-10 mb-3" data-aos="zoom-in" style={{ color: '#ff471a'}}>3</div>
                <h4 className="fw-semibold my-3 text-left" data-aos="fade-up" style={{ textAlign: 'left',  fontSize: '1.2rem', fontWeight: 'bold'}}>Sit Back & Enjoy the Ride</h4>
                <p className="text-muted text-left" data-aos-delay="200" style={{ textAlign: 'left'}}>Your professional driver will arrive at your pickup location and take you safely to your destination.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Cabs for Every Travel Need*/}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-orange fw-bold text-center mb-5" data-aos="zoom-in">Cabs for Every Travel Need</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm" data-aos="fade-up">
                <div className="card-body">
                  <img src="/images/sedan 2.jpg" className="card-img-top mb-2" alt="City travel" style={{ objectFit: 'cover', height: '200px'}}/>
                  <h5 className="card-title fw-bold" data-aos="fade-left"> City Travel Made Simple</h5>
                  <p className="card-text text-muted" data-aos="fade-left">Convenient local car rentals with fair pricing and dependable pickups.</p>
                  <button className="btn btn-orange w-100 mt-2" data-aos="fade-left">Book Now</button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm" data-aos="fade-up">
                <div className="card-body">
                  <img src="/images/long road trip.jpg" className="card-img-top mb-2" alt="Smooth Outstation" style={{ objectFit: 'cover', height: '200px'}}/>
                  <h5 className="card-title fw-bold" data-aos="fade-left">Smooth Outstation Journeys</h5>
                  <p className="card-text text-muted" data-aos="fade-left">Enjoy long-distance trips with professional drivers & transparent fares.</p>
                  <button className="btn btn-orange w-100 mt-2" data-aos="fade-left">Book Now</button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm" data-aos="fade-up">
                <div className="card-body">
                  <img src="/images/travell.jpeg" className="card-img-top mb-2 object-cover card-img-top-hover:scale-110 transition duration-700" alt="Hassle-Free" style={{ objectFit: 'cover', height: '200px'}}/>
                  <h5 className="card-title fw-bold" data-aos="fade-left">Hassle-Free Airport Transfer</h5>
                  <p className="card-text text-muted" data-aos="fade-left">Timely airport pickups and drop-offs with fixed, worry-free pricing.</p>
                  <button className="btn btn-orange w-100 mt-2" data-aos="fade-left">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Ride with AAORide */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          
          <h2 className="fw-bold mb-5" data-aos="fade-up" style={{ color: '#ff471a' }}>
            Why Ride with AAVORide?
          </h2>
          
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
            <div className="col-lg-3 col-md-3">
              <div className="card p-4 border-0 shadow-sm rounded h-100" data-aos="fade-up" style={{ backgroundColor: '#f8f9fa', }}>
                <div className="mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-check" viewBox="0 0 16 16">
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.11.118l-.84-.858a.5.5 0 0 1 .71-.707l.56.572.933-1.554a.5.5 0 1 1 .832.503ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                    <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
                  </svg>
                </div>
                <h6 className="fw-bold mb-2" data-aos="zoom-in">Verified Drivers</h6>
                <p className="text-muted extra-small mb-0" data-aos="zoom-in">
                  Professional and background-checked drivers to ensure a safe and reliable travel experience.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="card p-4 border-0 shadow-sm rounded h-100" data-aos="fade-up" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-briefcase" viewBox="0 0 16 16">
                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                  </svg>
                </div>
                <h6 className="fw-bold mb-2" data-aos="zoom-in">Outstation Trips</h6>
                <p className="text-muted extra-small mb-0" data-aos="zoom-in">
                  Travel to your favorite destinations anytime with our comfortable and reliable outstation cab services.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="card p-4 border-0 shadow-sm rounded h-100" data-aos="fade-up" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cash-stack" viewBox="0 0 16 16">
                    <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                    <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z"/>
                  </svg>
                </div>
                <h6 className="fw-bold mb-2" data-aos="zoom-in">Transparent Pricing</h6>
                <p className="text-muted extra-small mb-0" data-aos="zoom-in">
                  No hidden charges. Enjoy clear and upfront pricing so you always know what you are paying for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Choose Your Ride */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5" data-aos="fade-up" style={{ color: '#ff471a'}}>Choose Your Ride</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            <div className="col-md-3">
              <div className="card border-0 shadow-sm h-100 text-left" data-aos="fade-up">
                <img src="/images/hatchback.jpg" alt="Hatchback" className="img-fluid mb-3 hover:scale-110 transition duration-700 rounded-1"/>
                <div className="card-body" data-aos="fade-left">
                  <h6 className="fw-bold mb-1">Hatchback</h6>
                  <p className="text-danger small mb-3">Budget Friendly</p> 
                  <p className="text-muted extra-small">Perfect for quick city rides and short road trips.</p>
                  <button className="btn w-100 text-white fw-bold mt-auto" style={{ backgroundColor: '#ff471a'}}>
                    Choose Vehicle
                  </button>

                  <div className="d-flex justify-content-between mt-3 text-muted" data-aos="fade-left" style={{ fontSize: '0.75rem'}}>
                    <div className="d-flex align-items-center gap-1">
                      <i className="bi bi-people-fill"></i>
                      <span>4 Seater</span>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <i className="bi bi-briefcase-fill"></i>
                      <span>2 Bags</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm h-100 text-left" data-aos="fade-up">
                <img src="/images/sedan.jpg" alt="sedan" className="img-fluid mb-3 hover:scale-110 transition duration-700 rounded-1"/>
                <div className="card-body" data-aos="fade-left">
                  <h6 className="fw-bold mb-1">Sedan</h6>
                  <p className="text-danger small mb-3">Comfort Ride</p>
                  <p className="text-muted extra-small">Ideal for business trips and comfortable long drives.</p>
                  <button className="btn w-100 text-white fw-bold mt-auto" style={{ backgroundColor: '#ff471a'}}>
                    Choose Vehicle
                  </button>

                  <div className="d-flex justify-content-between mt-3 text-muted" data-aos="fade-left" style={{ fontSize: '0.75rem'}}>
                    <div className="d-flex align-items-center gap-1">
                      <i className="bi bi-people-fill"></i>
                      <span>4 Seater</span>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <i className="bi bi-briefcase-fill"></i>
                      <span>3 Bags</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm h-100 text-left" data-aos="fade-up">
                <img src="/images/SUV.jpg" alt="suv" className="img-fluid mb-3 hover:scale-110 transition duration-700 rounded-1"/>
                <div className="card-body" data-aos="fade-left">
                  <h6 className="fw-bold mb-1">SUV</h6>
                  <p className="text-danger small mb-3">Family Trips</p>
                  <p className="text-muted extra-small">Spacious and powerful-perfect for family outstation trips. </p>
                  <button className="btn w-100 text-white fw-bold mt-auto" style={{ backgroundColor: '#ff471a'}}>
                    Choose Vehicle
                  </button>

                  <div className="d-flex justify-content-between mt-3 text-muted" data-aos="fade-left" style={{ fontSize: '0.75rem'}}>
                    <div className="d-flex align-items-center gap-1">
                      <i className="bi bi-people-fill"></i>
                      <span>6-7 Seater</span>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <i className="bi bi-briefcase-fill"></i>
                      <span>5-6 Bags</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm h-100 text-left" data-aos="fade-up">
                  <img src="/images/bus.jpg" alt="Van" className="img-fluid  mb-3 image-fluid-hover:scale-110 transition duration-700 rounded-1"/>
                <div className="card-body" data-aos="fade-left">
                  <h6 className="fw-bold mb-1">Confort Van</h6>
                  <p className="text-danger small mb-3">Group Travel</p>
                  <p className="text-muted extra-small">Best choice for group tours and special events.</p>
                  <button className="btn w-100 text-white fw-bold mt-auto" style={{ backgroundColor: '#ff471a'}}>
                    Choose Vehicle
                  </button>

                  <div className="d-flex justify-content-between mt-3 text-muted" data-aos="fade-left" style={{ fontSize: '0.75rem'}}>
                    <div className="d-flex align-items-center gap-1">
                      <i className="bi bi-people-fill"></i>
                      <span>9-10 Seater</span>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <i className="bi bi-briefcase-fill"></i>
                      <span>Large Storage</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <section className="py-5 bg-white overflow-x: hidden">
        <div className="container">
          <h2 className="text-center fw-bold mb-5" data-aos="fade-up" style={{ color: '#ff471a' }}>What Our Customers Say</h2>
          <div className="row g-4">
              <div className="col-md-6">
                <div className="card border-0 shadow-sm p-2 h-100" data-aos="fade-right">
                  <div className="d-flex align-items-start gap-2">
                    <img src="/images/female-client.webp" alt="Customer" className="rounded-2" style={{ width: '200px', height: '240px', objectFit: 'cover' }} />
                    <div data-aos-delay="200">
                      <div className="text-orange mb-2">★★★★★</div>
                      <p className="small text-muted italic">"AavoRide made my airport transfer completely stress-free. The driver arrived on time and the car was clean, and the ride was very comfortable. I highly recommend their service for anyone lookin for reliable travel."</p>
                      <div className="d-flex g-3">
                        <h6 className="fw-bold mb-0">Ananya Verma</h6>
                        <small className="text-muted" style={{ marginLeft: '7%'}}>Marketing Manager</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card border-0 shadow-sm p-2 h-100" data-aos="fade-left">
                  <div className="d-flex align-items-start gap-2">
                    <img src="/images/male client.jpg" alt="Customer" className="rounded" style={{ width: '200px', height: '240px', objectFit: 'cover' }} />
                    <div data-aos-delay="200">
                      <div className="text-orange mb-2">★★★★★</div>
                      <p className="small text-muted italic">"I booked an outstation trip with AavoRide the experience was execellent. The driver professional and the pricing was transparent, it's one of the most convenient cab services i've used."</p>
                      <div className="d-flex">
                        <h6 className="fw-bold mb-0">Rahul Masha</h6>
                        <small className="text-muted" style={{ marginLeft: '7%'}}>Business Consultant</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* 8. Safe & Secure Banner */}
      <section className="position-relative overflow-hidden" style={{ background: 'linear-gradient(90deg, #ebdcdc 50%, #e9c7c0 100%)' }}>
        <div className="container-fluid overflow-hidden">
          <div className="row align-items-center">
            <div className="col-md-6 position-relative">
              <img src="/images/safe-ride.jpg" alt="Safe Ride" className="img-fluid w-100" style={{ height: '380px', objectFit:'cover'}} />
              <div className="position-absolute top-0 end-0 h-100 w-25" style={{ background: 'linear-gradient(to right, transparent, #f5ddd9)', zIndex: 1}}></div>
            </div>
            
            <div className="col-md-6">
              <div className="ps-md-5" >
                <h2 className="fw-bold mb-4 mt-4" data-aos="fade-up">Safe, Secure & Reliable Rides</h2>
                <p className="text-muted" data-aos="fade-left">At Aavoride, passenger safety is our top priority. From well-maintained vehicles to real-time tracking.</p>
                <ul className=" mb-4" data-aos="fade-left">
                  <li> Fully sanitized cars</li>
                  <li> Live GPS ride tracking</li>
                  <li> 24/7 customer assistance</li>
                  <li> Quick emergency support</li>
                </ul>
                <button className="btn btn-orange mb-3" data-aos="fade-up">Book a Safe Ride</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
     {/* 9. FAQ Section */}
     <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5" data-aos="fade-up" style={{ color: '#ff471a' }}>
            Frequently Asked Questions
          </h2>

          <div className="mx-auto" style={{ maxWidth: '800px' }}>
            {faqs.map((faq) => (
              <div key={faq.id} className="mb-4 shadow-sm rounded border" data-aos="fade-up">

                {/* The Question Bar */}
                <div 
                  onClick={() => toggleFaq(faq.id)}
                  className="d-flex justify-content-between align-items-center p-3"
                  style={{ cursor: 'pointer', transition: '0.3s' }}
                >
                  <span className="fw-semibold">{faq.question}</span>
                  <span style={{ color: '#ff471a', fontSize: '1.2rem', fontWeight: 'bold' }}>
                    {openId === faq.id ? '−' : '+'}
                  </span>
                </div>

                {/* The Answer Box (Conditional Rendering) */}
                {openId === faq.id && (
                  <div 
                    className="p-4" 
                    style={{ borderTop: '1px solid #eee', backgroundColor: '#fffcfb' }}
                  >
                    <p className="text-muted mb-0">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 10. Main Footer */}
      <footer className="py-5 text-white" data-aos="fade-up" style={{ backgroundColor: '#ff471a' }}>
        <div className="container">
          <div className="row g-5">
            <div className="col-md-4" data-aos="fade-up">
              <h3 className="fw-bold mb-4">AAVORide</h3>
              <div className="social-icon d-flex gap-3 fs-4 mt-5">
                <a href=""><i className='bi bi-twitter text-white'></i></a>
                <a href=""><i className='bi bi-facebook text-white'></i></a>
                <a href=""><i className='bi bi-instagram text-white'></i></a>
                <a href=""><i className='bi bi-github text-white'></i></a>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up">
              <h6 className="fw-bold mb-3">Company</h6>
              <ul className="list-unstyled opacity-75 small d-grid gap-2">
                <li>About</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="col-md-4" data-aos="fade-up">
              <h6 className="fw-bold mb-3">Help</h6>
              <ul className="list-unstyled opacity-75 small d-grid gap-2">
                <li>Help Center</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Delete Account</li>
              </ul>
            </div>
          </div>
          <hr className="opacity-25" />
          <p className="text-center small opacity-75">© 2026 AAVORide. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}






