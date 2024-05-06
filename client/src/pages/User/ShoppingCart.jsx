import React from 'react';
import useFetch from "../../hooks/useFetch";

export default function ShoppingCart() {
    const {data, error, loading} = useFetch('cart');
    const cart = data?.cart;
    console.log(`cart: ${JSON.stringify(cart)}`)

    return (
        <div>
            ShoppingCart
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {cart && cart.length > 0 ? (
                cart.map((item, index) => (
                    <ul key={index}>
                        <li>{item.name}</li>
                        <li>{item.quantity}</li>
                        <li>{item.price}</li>
                        <li>{item.description}</li>
                    </ul>
                ))
            ) : (
                <div>상품이 존재하지 않습니다.</div>
            )}
        </div>
    );
}