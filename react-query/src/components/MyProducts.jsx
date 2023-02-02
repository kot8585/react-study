import React from 'react';

export default function Products({products, onChange, checked}) {

  return (
    <>
      <label>
        <input type='checkbox' checked={checked} onChange={onChange} />
        Show Only 🔥 Sale
      </label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
