import React from 'react';
import {NavLink} from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <div>
                <NavLink to={'/'}>Logo</NavLink>
            </div>
            <ul>
                <li>
                    <NavLink to={'/user/my-account'}>마이페이지(Test)</NavLink>
                    <NavLink to={'/user/shopping-cart'}>장바구니</NavLink>
                    <NavLink to={'/auth/login'}>로그인</NavLink>
                    <NavLink to={'/auth/register'}>회원가입</NavLink>
                </li>
            </ul>
        </nav>
    );
}