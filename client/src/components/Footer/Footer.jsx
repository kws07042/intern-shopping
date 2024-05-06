import React from 'react';

export default function Footer() {
    return (
        <footer className={'col-12'}>
            <section>
                <ul className={'flex'}>
                    <li>배송정보</li>
                    <li>교환 및 반품</li>
                    <li>이용약관</li>
                    <li>문의하기</li>
                    <li>개인정보처리방침</li>
                </ul>
            </section>
            <p>&copy; {new Date().getFullYear()} Intern Shopping. All rights reserved.</p>
        </footer>
    );
}