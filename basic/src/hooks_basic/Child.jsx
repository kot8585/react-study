import React, {memo} from 'react';

const Child = ({name, tellMe}) => {

  console.log('아이 컴포넌트가 렌더링이 되었다');
  return (
    <div style={{border: '2px solid powderblue', padding: '10px'}}>
      <h3>👶🏻 자녀</h3>
      <p>name: {name.lastName}{name.firstName}</p>
      <button onClick={tellMe}>엄마 안녕</button>
    </div>
  );
}

export default memo(Child);

