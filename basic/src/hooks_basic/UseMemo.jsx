import React, { useState, useMemo, useCallback } from 'react';
import Child from './Child';

export default function UseMemo() {
  const [parentAge, setParentAge] = useState(0);
  
  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  console.log('부모 컴포넌트가 렌더링이 되었다');

  const name = useMemo(() => ({
    lastName: '홍',
    firstName: '길동',
  }), []);

  const tellMe = useCallback(() => {
    console.log('길동아 안녕');
  }, []);

  return (
    <div style={{ border: '2px solid navy', padding: '10px' }}>
      <h1>👨‍👩‍👦 부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child name={name} tellMe={tellMe}/>
    </div>
  );
}

