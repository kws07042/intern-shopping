import React, {useEffect} from 'react';
import Products from "../components/Products/Products";
import CarouselSlider from "../components/CarouselSlider/CarouselSlider";

export default function Home() {
    const [products, setProducts] = React.useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                console.log(`response data: ${data.rows}`);
                setProducts(data.rows);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div>
            <CarouselSlider/>
            <div><Products products={products}/></div>
        </div>
    );
}