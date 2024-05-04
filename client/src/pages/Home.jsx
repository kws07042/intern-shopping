import React from 'react';
import SearchBar from "../components/SearchBar/SearchBar";
import Products from "../components/Products/Products";
import CarouselSlider from "../components/CarouselSlider/CarouselSlider";

export default function Home() {
    const url = '';
    return (
        <div>
            <div><SearchBar/></div>
            <CarouselSlider/>
            <div><Products/></div>
        </div>
    );
}