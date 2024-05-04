import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Products from '../../components/Products/Products';

export default function SearchByProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();

    // URL의 쿼리 스트링에서 검색어 추출
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('name');
    console.log(`searchParams: ${searchParams}`);
    console.log(`name: ${name}`);

    useEffect(() => {
        async function fetchResults() {
            const ENDPOINT = process.env.REACT_APP_ENDPOINT_SEARCH;
            setLoading(true);
            setError(null);

            try {
                const res = await fetch(`${ENDPOINT}?name=${name}`); // ?name=${name}
                console.log(`response: ${res.status}`);

                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

                const data = await res.json();
                console.log('SearchByProducts data:', data);

                setProducts(data.rows);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        if (name) fetchResults().then(r => r);
    }, [name]);

    return (
        <div>
            <h2>검색 결과: {name}</h2>
            {loading && <p>로딩 중...</p>}
            {error && <p>오류: {error}</p>}
            <Products products={products} query={name} />
        </div>
    );
}