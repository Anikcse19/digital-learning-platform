import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import MenuBar from '../../components/MenuBar/MenuBar';

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([])


    useEffect(() => {
        fetch("./fakeReviews.JSON")
            .then(res => res.json())
            .then(data => setFeedbacks(data))
    }, [])
    return (
        <div>
            <MenuBar></MenuBar>
            <div>
                <h2 className='text-danger m-2 bg-info p-3'>What are people thinking about Us???</h2>
                <br />
                <br />
                <h3 className='p-5 text-primary'><span className='fs-1'>4</span> Exclusive Reviews</h3>
                {
                    feedbacks.map(feedback => <div className='d-flex m-5'>
                        <img width=" 300px" src={feedback.img} alt="" />
                        <h2 className='fs-4 ms-2' style={{
                            fontFamily: 'Lobster'
                        }}>"{feedback.reviews}"</h2>
                    </div>)
                }
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Feedback;