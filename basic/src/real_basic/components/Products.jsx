import React, { useState } from 'react';
import useProducts from '../hooks/use-products';

export default function Products() {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({salesOnly: checked});
  
  const handleChange = () => setChecked((prev) => !prev);



  if(loading) {
    return (<>loading</>);
  } else if(error) {
    return (<>error 발생</>);
  } else {return (
    <>
      <input id="checkbox" 
      type="checkbox" 
      value={checked} 
      checked={checked}
      onChange={handleChange} />
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
  );}

  
}
