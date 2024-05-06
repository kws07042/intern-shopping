import React from 'react';
import {NavLink} from "react-router-dom";

export default function Footer() {
    return (
        <nav>
            <ul className={"footer-nav"}>
                <li>
                    {/*풀리퀘스트 예시입니다*/}
                    {/*NavLink사용*/}
                <NavLink to={"/shipping"}>배송정보</NavLink>
                <NavLink to={"/exchange"}>교환 및 반품</NavLink>
                <NavLink to={"/terms"}>이용약관</NavLink>
                <NavLink to={"/contact"}>문의하기</NavLink>
                <NavLink to={"/privacy"}>개인정보처리방침</NavLink>
                </li>
            </ul>
            <p>&copy; {new Date().getFullYear()} Intern Shopping. All rights reserved.</p>
        </nav>
    );
}
