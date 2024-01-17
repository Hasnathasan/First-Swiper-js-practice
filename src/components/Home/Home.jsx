import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Loading from '../Loding/Loading';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div>
            <Loading></Loading>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;