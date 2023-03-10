import React, {useEffect, useState} from 'react';

export default function useProducts({salesOnly}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    setLoading(true);
    setError(undefined);

    fetch(salesOnly ? '/data/sale_products.json' : '/data/products.json')
      .then(res => res.json())
      .then(data => {
        console.log('π₯λ¨λν λ°μ΄ν°λ₯Ό λ€νΈμν¬μμ λ°μμ΄');
        console.log('data', data);
        setProducts(data);
      })
      .catch((error) => {
        setError('μλ¬ λ°μ');
        console.log("μλ¬λ°μ");
      })
      .finally(() => setLoading(false));
      return () => {
        console.log('π§Ή κΉ¨λνκ² μ²­μνλ μΌλ€μ ν©λλ€.');
      }
  }, [salesOnly]);

  return [loading, error, products];
}

