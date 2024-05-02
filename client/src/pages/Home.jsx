import React from 'react';
import {useAccount} from "../context/AuthContext";

export default function Home() {
    // Test
    const {account} = useAccount() || null;
    console.log(account);

    return (
        <div>
            Home
            <div>account: {account}</div>
        </div>
    );
}