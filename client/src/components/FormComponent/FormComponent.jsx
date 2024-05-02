import React from 'react';

export default function FormComponent({ END_POINT, method, fields }) {
    return (
        <form action={END_POINT} method={method}>
            {fields.map((field, index) => (
                <input key={index} type={field.type} name={field.name} placeholder={field.placeholder}/>
            ))}
            <button>전송</button>
        </form>
    );
}