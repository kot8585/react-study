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
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        console.log('data', data);
        setProducts(data);
      })
      .catch((error) => {
        setError('에러 발생');
        console.log("에러발생");
      })
      .finally(() => setLoading(false));
      return () => {
        console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
      }
  }, [salesOnly]);

  return [loading, error, products];
}

