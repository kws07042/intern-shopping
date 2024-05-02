import React from 'react';
import FormComponent from "../../components/FormComponent/FormComponent";

const signUpFields = [
    { name: 'uid', type: 'email', placeholder: '이메일' },
    { name: 'password', type: 'password', placeholder: '비밀번호' },
    { name: 'confirmPassword', type: 'password', placeholder: '비밀번호 확인' }
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