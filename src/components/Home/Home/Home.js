import React from 'react';
import NavBar from '../../shared/NavBar/NavBar';
import Header from '../Header/Header';

const Home = ({data}) => {
    return (
        <div>
            <NavBar/>
            <Header data={data.Header}></Header>
        </div>
    );
};

export default Home;