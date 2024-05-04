import React from 'react';
import SearchBar from "../components/SearchBar/SearchBar";
import Products from "../components/Products/Products";
import CarouselSlider from "../components/CarouselSlider/CarouselSlider";
import {useSearchParams} from "react-router-dom";

export default function Home() {
    const param = useSearchParams();
    console.log(`param: ${param}`);

    return (
        <div>
            <div><SearchBar/></div>
            <CarouselSlider/>
            <div><Products/></div>
        </div>
    );
}