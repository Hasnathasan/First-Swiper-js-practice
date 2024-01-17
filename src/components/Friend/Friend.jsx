import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name, id, email} = props.friend;
    return (
        <div className="friend">
            <h2>name: {name}</h2>
            <h2>email: {email}</h2>
            <Link to={`/friend/${id}`}>Details</Link>
        </div>
    );
};

export default Friend;