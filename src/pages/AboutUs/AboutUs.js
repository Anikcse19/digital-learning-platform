import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import MenuBar from '../../components/MenuBar/MenuBar';
import './About.css'

const AboutUs = () => {
    const [trainers, setTrainers] = useState([])


    useEffect(() => {
        fetch('./fakeDetails.JSON')
            .then(res => res.json())
            .then(data => setTrainers(data))
    }, [])
    return (
        <div className='bg-about'>
            <MenuBar></MenuBar>
            <div className='row my-5 container-fluid' style={{
                overflowX: 'hidden'
            }}>
                <div className="col-md-6 p-5">
                    <h1 className='fs-1 fw-bolder'>Our team <br /> is all over the <span className='text-warning'>world.</span></h1>
                    <h4>Educating and empowering the Digital learning community by providing the freshest news and latest best practices via the industry’s smartest practitioners.Launched in 2003, Digital learning is unique in its community-based approach to search marketing content. Virtually all of our contributed articles come from real online marketing experts, both independent and in-house. <span className='text-danger'> Digital Learning</span> is owned by <span className='text-warning'>Alpha Brand Media</span>.</h4>
                </div>
                <div className="col-md-6">
                    <div>
                        <img className='img-fluid' src="https://cdn.searchenginejournal.com/wp-content/uploads/2018/08/About-2x_619996714.png" alt="" />
                    </div>
                </div>

            </div>
            <h3 className='text-center text-success'>Our Honorable Trainers</h3>
            <div className='row text-center'>
                {
                    trainers.map(trainer => <div className="col-md-5 ms-5 ps-5 my-4 ">
                        <div className='d-flex'>
                            <div>
                                <img width='60px' height='60px' src={trainer.trainerPic} alt="" />
                            </div>
                            <div>
                                <h3 className='mx-2'>{trainer.trainerName}</h3>
                                <h6 className='m-0'>{trainer.courseName}</h6>
                            </div>
                        </div>
                    </div>)
                }

            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;