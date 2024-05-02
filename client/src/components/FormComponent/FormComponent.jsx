import React from 'react';

export default function FormComponent({ END_POINT }) {
    console.log(END_POINT);
    return (
        <form action={END_POINT} method={'POST'}>
            <input type="text" name={'uid'}/> {/*exam01@ansan.ac.kr*/}
            <input type="text" name={'password'}/>
            <button>전송</button>
        </form>
    );
}