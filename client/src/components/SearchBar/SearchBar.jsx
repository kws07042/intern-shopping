import React from 'react';

export default function SearchBar() {
    const [userInput, setUserInput] = React.useState('');
    const onChange = (e) => setUserInput(e.target.value);


    return (
        <form action={process.env.REACT_APP_ENDPOINT_SEARCH} method={'POST'}>
            <input
                type="text"
                name={userInput}
                placeholder="상품을 검색하세요."
                onChange={onChange}
            />
            <button>검색</button>
        </form>
    );
}