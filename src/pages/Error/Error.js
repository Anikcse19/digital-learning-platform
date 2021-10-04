import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div className="text-center">
            <h1 className='text-danger text-center mt-5'>404 ERROR!!!!</h1>
            <h2 className='text-danger text-center'>Page Not Found</h2>
            <NavLink to='/home'>
                <button className='btn btn-primary'>Back to home</button>
            </NavLink>
        </div>
    );
};

export default Error;