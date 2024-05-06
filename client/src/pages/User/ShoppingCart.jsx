import React from 'react';
import useFetch from "../../hooks/useFetch";

export default function ShoppingCart() {
    const {data, error, loading} = useFetch('cart');
    const cart = data?.cart;

    return (
        <div>
            ShoppingCart
            {!loading && <div>Loading...</div>}
            {!error && <div>{error}</div>}
            {cart && cart.length > 0 ? (
                cart.map((item, index) => (
                    <div key={index}>
                        {item.product_id}
                    </div>
                ))
            ) : (
                <div>상품이 존재하지 않습니다.</div>
            )}
        </div>
    );
}