import React from 'react';

export default function Products({products}) {
    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <button>상품 담기</button>
                </div>
            ))}
        </div>
    );
}