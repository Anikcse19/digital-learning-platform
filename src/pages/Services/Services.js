import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import MenuBar from '../../components/MenuBar/MenuBar';
import './Service.css'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('./fakeDetails.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <MenuBar></MenuBar>
            <div className='service-bg'>
                <h1 className='text-center pt-3 fs-1' style={{
                    fontFamily: 'Satisfy',
                    color: 'Black'
                }}>EXPLORING MORE SERVICES</h1>
                <h5 className='text-center  ' style={{
                    fontFamily: 'Satisfy',
                    color: 'blue'
                }}>ENJOY IT</h5>

                <div className='row my-5 container-fluid' style={{
                    overflowX: 'hidden'
                }}>
                    {
                        services.map(service => <div className='col-md-4  '>
                            <div className='ms-2 mb-1 g-2 cart' style={{
                                border: '2px solid black'
                            }}>
                                <div className='w-50 mx-auto my-2'>
                                    <img width='200px' height='200px' src={service.thumbnail} alt="" />
                                </div>
                                <h5 className='text-center fs-2' style={{
                                    fontFamily: 'Satisfy'
                                }}>{service.courseName}</h5>
                                <p className='text-center fs-5' style={{
                                    fontFamily: 'Lobster'
                                }}>Intention: {service.designation}</p>
                                <h4 className='text-center fs-5' style={{
                                    fontFamily: 'Lobster'
                                }}>Course Fee: <span className='fs-2'>${service.courseFee}</span></h4>
                                <div>
                                    <button className='btn btn-outline-success cust-btn'><span className="fw-bolder">Enroll Now</span></button>
                                </div>
                                <Link to={`/services/${service.id}`}>
                                    <button className='btn my-3 btn-outline-success cust-btn'><span className="fw-bolder">See More Details</span></button>
                                </Link>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;