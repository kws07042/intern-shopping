import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";

export default function Header({ children }) {
    return (
        <header>
            <Navbar/>
            <SearchBar/>
        </header>
    );
}