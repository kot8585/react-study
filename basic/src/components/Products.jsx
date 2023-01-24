import React, { useEffect, useState } from 'react';

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
      fetch(checked ? '/data/sale_products.json' : '/data/products.json')
        .then(res => res.json())
        .then(data => {
          console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
          setProducts(data);
        });
        return () => {
          console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
        }
  }, [checked])

  return (
    <>
      <input id="checkbox" type="checkbox" value={checked} onChange={handleChange} />
      <label htmlFor='checkbox'>Sale Only 🔥 Sale</label>
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
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}