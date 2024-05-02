import React from 'react';
import FormComponent from '../../components/FormComponent/FormComponent';

const loginFields = [
    { name: 'uid', type: 'email', placeholder: '이메일' },
    { name: 'password', type: 'password', placeholder: '비밀번호' }
];

export default function Login() {
    return (
        <>
            <div>Login</div>
            <FormComponent
                END_POINT={process.env.REACT_APP_ENDPOINT_SIGNIN}
                method={'POST'}
                fields={loginFields}
            />
        </>
    );
}