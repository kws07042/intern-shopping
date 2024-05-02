import React from 'react';
import FormComponent from "../../components/FormComponent/FormComponent";

export default function Register() {
    return (
        <>
            <div>Register</div>
            <FormComponent
                END_POINT={process.env.REACT_APP_ENDPOINT_SIGNUP}
                method={'POST'}
            />
        </>
    );
}