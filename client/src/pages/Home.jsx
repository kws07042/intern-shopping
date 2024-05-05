import React from 'react';
import Products from "../components/Products/Products";
import CarouselSlider from "../components/CarouselSlider/CarouselSlider";
import useFetch from "../hooks/useFetch";

export default function Home() {
    const {data, error, loading} = useFetch('products');

    return (
        <>
            <CarouselSlider/>
            <div>
                {loading && <p>로딩 중...</p>}
                {error && <p>오류: {error}</p>}
                <Products products={data}/>
            </div>
        </>
    );
}