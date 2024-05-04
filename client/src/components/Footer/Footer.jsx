import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <nav>
                {/*React에서는 a 태그 대신에 Link사용*/}
                <ul className="footer-nav">
                    <li><Link to="/shipping">배송정보</Link></li>
                    <li><Link to="/exchange">교환 및 반품</Link></li>
                    <li><Link to="/terms">이용약관</Link></li>
                    <li><Link to="/contact">문의하기</Link></li>
                    <li><Link to="/privacy">개인정보처리방침</Link></li>
                </ul>
            </nav>
            <p>&copy; {new Date().getFullYear()} Intern Shopping. All rights reserved.</p>
        </footer>
    );
}
