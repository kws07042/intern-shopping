import React from 'react';
import {NavLink} from "react-router-dom";
import {FaRegUser} from "react-icons/fa";
import {BsCart3} from "react-icons/bs";

export default function Navbar() {
    return (
        <nav className={'s-navbar flex'}>
            <div>
                <NavLink to={'/'}>Logo</NavLink>
            </div>
            <ul className={'s-nav-list flex'}>
                <li>
                    <NavLink to={'/user/my-account'}>
                        <span><FaRegUser/></span>
                        <span>마이페이지(Test)</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/user/shopping-cart'}>
                        <span><BsCart3/></span>
                        <span>장바구니</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/auth/login'}>로그인</NavLink>
                </li>
                <li>
                    <NavLink to={'/auth/register'}>회원가입</NavLink>
                </li>
            </ul>
        </nav>
    );
}