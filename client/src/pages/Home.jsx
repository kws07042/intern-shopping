import React from 'react';
import SearchBar from "../components/SearchBar/SearchBar";
import Products from "../components/Products/Products";

export default function Home() {
    const url = '';
    return (
        <div>
            Home
            <div>
                <SearchBar/>
            </div>
            <div>
                <Products/>
            </div>
        </div>
    );
}