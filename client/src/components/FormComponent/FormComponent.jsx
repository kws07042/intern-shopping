import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

export default function FormComponent({ END_POINT, method, fields }) {
    const navigate = useNavigate();

    // user 객체를 초기화할 때, fields 배열에 따라 동적으로 초기화
    const [user, setUser] = useState(fields.reduce((acc, field) => {
        acc[field.name] = '';
        return acc;
    }, {}));

    // input 요소의 값이 변경될 때마다 호출
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(END_POINT, {
                method,
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(user)
            });
            if (!res.ok) throw new Error('Server response was not OK');

            const data = await res.json();
            console.log(data);

            if (data.redirect) {
                navigate(data.redirect);
            }
        } catch (error) {
            console.error('Failed to submit form:', error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {fields.map((field, index) => (
                <input
                    key={index}
                    type={field.type}
                    name={field.name}
                    value={user[field.name]}
                    placeholder={field.placeholder}
                    onChange={handleChange}
                />
            ))}
            <button>전송</button>
        </form>
    );
}