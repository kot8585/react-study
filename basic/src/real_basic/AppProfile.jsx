import React from 'react';
import Avatar from './real_basic/components/Avatar';
import Profile from './real_basic/components/Profile';

export default function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert('버튼이 클릭됌');
  }
  return (
    <div>
      <button onClick={handleClick}>버튼</button>
      <form onSubmit={() => {}}>
        <input type="text" />
      </form>
      <Profile image='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
      name='James Kim'
      title='프론트엔드 개발자'
      isNew={true}
      />
      <Profile image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
      name='Yuna'
      title='백엔드 개발자'
      isNew={false}
      />
      <Profile image='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
      name='James'
      title='서버 개발자'
      isNew={true}
      />
      <Avatar image='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
      isNew={true}/>
    </div>
  );
}

