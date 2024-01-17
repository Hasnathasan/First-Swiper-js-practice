import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const Post = (props) => {
    const {title, body, id} = props.post;
    const navigateRead = useNavigate();
    const readMore = () => {
        navigateRead(`/post/${id}`)
    }
    const [todo, setTodo] = useState([])
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(data => setTodo(data.data))

    return (
        <div className="p-10 rounded bg-slate-200 my-2">
            <h1 className="text-4xl text-left font-semibold">{title}</h1>
            <p className="text-lg text-left mt-4 font-semibold">{body}</p>
            <Link to={`/post/${id}`}>Read more...</Link>
            <button onClick={readMore}>Read More</button>
        </div>
    );
};

export default Post;