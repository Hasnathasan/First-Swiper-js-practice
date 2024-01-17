import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const navigateBack = useNavigate();
    const goBack = () => {
        navigateBack(-1)
    }
    const post = useLoaderData();
    const {userId, id, title, body} = post;
    console.log(post);
    return (
        <div>
            <h4>UserId : {userId}</h4>
            <h1>{title}---{id}</h1>
            <p>{body}</p>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;