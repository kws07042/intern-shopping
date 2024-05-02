import React from 'react';

export default function FormComponent({ END_POINT, method }) {
    return (
        <form action={END_POINT} method={method}>
            <input type="email" name={'uid'}/> {/*exam01@ansan.ac.kr*/}
            <input type="text" name={'password'}/>
            <button>전송</button>
        </form>
    );
}