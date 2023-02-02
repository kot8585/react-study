import React, { useState } from 'react';
import EllieProducts from './EllieProducts';

export default function MainProducts() {
  const [showLeftProducts, setShowLeftProducts] = useState(true);
  const [showRightProducts, setShowRightProducts] = useState(true);
  return (
    <main className='container'>
      <div>
        {showLeftProducts && <EllieProducts />}
        <button onClick={() => setShowLeftProducts((show) => !show)}>
          Toggle
        </button>
      </div>
      <div>
        {showRightProducts && <EllieProducts />}
        <button onClick={() => setShowRightProducts((show) => !show)}>
          Toggle
        </button>
      </div>
    </main>
  );
}
