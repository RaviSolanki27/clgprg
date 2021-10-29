import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Hero from './Hero';
import MajorCard from './MajorCard';


export default function Home() {
    return (
        <div>
            <Hero/>

            <Banner/>

            <MajorCard/>

            <Footer/>
        </div>
    )
}
