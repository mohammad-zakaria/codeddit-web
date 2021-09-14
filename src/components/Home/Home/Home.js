import React from 'react';
import Footer from '../../shared/Footer/Footer';
import NavBar from '../../shared/NavBar/NavBar';
import About from '../About/About';
import Features from '../Features/Features';
import Header from '../Header/Header';
import Team from '../Team/Team';
import Testimonial from '../Testimonial/Testimonial';

const Home = ({data}) => {
    return (
        <div>
            <NavBar/>
            <Header data={data.Header}></Header>
            <About data={data.About}></About>
            <Features data={data.Features}></Features>
           <Team data={data.Team}></Team>
           <Testimonial data={data.Testimonials}></Testimonial>
           <Footer></Footer>
        </div>
    );
};

export default Home;