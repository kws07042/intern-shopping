import React, {useEffect, useState} from 'react';

export default function useFetch(apiUrl, dependencies = []) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const baseUrl = process.env.REACT_APP_SITE_URL;
    console.log(`baseUrl: ${baseUrl}`);
    console.log(`apiUrl: ${apiUrl}`);

    useEffect(() => {
        fetch(`${baseUrl}/${apiUrl}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
                console.log(`useFetch: ${JSON.stringify(data)}`)
            })
            .catch(error => console.error('Error:', error));
    }, dependencies);

    return {data, error, loading}
}