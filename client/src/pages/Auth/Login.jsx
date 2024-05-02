import React from 'react';
import FormComponent from '../../components/FormComponent/FormComponent';

export default function Login() {
    return (
        <>
            <div>Login</div>
            <FormComponent
                END_POINT={process.env.REACT_APP_ENDPOINT_SIGNIN}
                method={'POST'}
            />
        </>
    );
}