import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import MenuBar from '../../components/MenuBar/MenuBar';
import './Home.css'

const Home = () => {
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch('./fakeDetails1.JSON')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    return (
        <div>
            <MenuBar></MenuBar>
            <Banner></Banner>
            <div>
                <h2 className='text-center my-5 fs-1' style={{
                    fontFamily: 'Satisfy',
                    color: 'red'
                }}>Our Popular Services</h2>
            </div>
            <div className='row my-5 container-fluid' style={{
                overflowX: 'hidden'
            }}>
                {
                    details.map(detail => <div className='col-md-4 '>
                        <div className='ms-2 mb-1 g-2' style={{
                            border: '2px solid black'
                        }}>
                            <div className='w-50 mx-auto my-2'>
                                <img width='200px' height='200px' src={detail.thumbnail} alt="" />
                            </div>
                            <h5 className='text-center fs-2' style={{
                                fontFamily: 'Satisfy'
                            }}>{detail.courseName}</h5>
                            <p className='text-center fs-5' style={{
                                fontFamily: 'Lobster'
                            }}>Intention: {detail.designation}</p>
                            <h4 className='text-center fs-5' style={{
                                fontFamily: 'Lobster'
                            }}>Course Fee: <span className='fs-2'>${detail.courseFee}</span></h4>
                            <div>
                                <button className='btn btn-outline-success cust-btn'>Enroll Now</button>
                            </div>
                            <Link to={`/services/${detail.id}`}>
                                <button className='btn my-3 btn-outline-success cust-btn'>See More Details</button>
                            </Link>
                        </div>
                    </div>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;