import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and condition</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit possimus aliquid nostrum blanditiis culpa doloremque deserunt cum id veniam?</p>
            <p>Go back to <Link to="/register">Register</Link> </p>
        </div>
    );
};

export default Terms;