import React from 'react';
import {useAccount} from "../../context/AuthContext";
import {jwtDecode} from "jwt-decode";
import {Link} from "react-router-dom";

export default function MyAccount() {
    const {...account} = useAccount();
    console.log(`account: ${JSON.stringify(account)}`);

    // 토큰 디코딩
    let userEmail = '사용자 이메일 없음 (로그인 해주세요)';
    let username = '사용자 이름 없음 (로그인 해주세요)';

    if (account && account.token) {
        const decoded = jwtDecode(account.token);
        userEmail = `이메일 : ${decoded.email}`;
        username = `사용자 이름: ${decoded.username}`;
    }

    return (
        <div>
            <div>
                {account && account.token ? '로그인됨' : '로그인 안됨'}
            </div>
            <div>
                {account && account.token ? `테스트용 토큰 정보: ${account.token}` : '테스트용 토큰 정보 없음 (로그인 해주세요)'}
            </div>
            <div>{userEmail}</div>
            <div>{username}</div>
            <div>
                {account && account.token && (
                    <button onClick={account.logout}>로그아웃</button>
                )}
            </div>
            <div>
                <h2>주문내역</h2>
                <Link to={'/user/my-orders'}>바로가기</Link>
            </div>
        </div>
    );
}