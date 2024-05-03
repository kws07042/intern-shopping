import React from 'react';
import FormComponent from "../../components/FormComponent/FormComponent";

const signUpFields = [
    { name: 'email', type: 'email', placeholder: '이메일' },
    { name: 'password', type: 'password', placeholder: '비밀번호' },
    { name: 'confirmPassword', type: 'password', placeholder: '비밀번호 확인' },
    { name: 'username', type: 'username', placeholder: '사용자 이름' }
];

export default function Register() {
    return (
        <>
            <div>Register</div>
            <FormComponent
                END_POINT={process.env.REACT_APP_ENDPOINT_SIGNUP}
                method={'POST'}
                fields={signUpFields}
            />
        </>
    );
}