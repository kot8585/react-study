import React, { useState } from 'react';
import Products from './Products';
import {useQuery} from 'react-query';

export default function MainProducts() {
  const [showLeftProducts, setShowLeftProducts] = useState(true);
  const [showRightProducts, setShowRightProducts] = useState(true);

  //react-query
  const [salesOnly, setSalesOnly] = useState(false);
  const handleChange = () => {
    return setSalesOnly((prev) => !prev);
  };

  const {isLoading, error, data} = useQuery({
    queryKey: ['salesOnly', salesOnly], 
    queryFn: () => {
      return fetch(`data/${salesOnly ? 'sale_' : ''}products.json`).then(res => {
        console.log("🔥fetching...")
        return res.json();
      });
    }
  });

  if(isLoading) return 'Loading...';
  if(error) return 'An error has occurred';

  return (
    <main className='container'>
      <div>
        {showLeftProducts && <Products products={data} onChange={handleChange} checked={salesOnly}/>}
        <button onClick={() => setShowLeftProducts((show) => !show)}>
          Toggle
        </button>
      </div>
      <div>
        {showRightProducts && <Products products={data} onChange={handleChange} checked={salesOnly}/>}
        <button onClick={() => setShowRightProducts((show) => !show)}>
          Toggle
        </button>
      </div>
    </main>
  );
}
