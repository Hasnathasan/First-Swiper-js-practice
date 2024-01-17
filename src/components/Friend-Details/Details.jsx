import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Details = () => {
    const friend = useLoaderData();
    console.log(friend);
    const {name, email, id, phone, username} = friend;
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <h1 className="text-3xl font-bold">Name: {name}</h1>
            <h1>Email: {email}</h1>
            <h1>Phone: {phone}</h1>
            <h1>{username}</h1>
            <button onClick={goBack}>Back</button>
        </div>
    );
};

export default Details;