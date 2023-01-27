import React from "react";

/**
 * wrap을 통해 컴포넌트 안의 내용들을 커스텀해서 재사용할 수 있다. 
 * prop으로 children을 받아와서 사용할 수 있음
 */
export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar 
        img='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
        name='Bob' 
        size={200}
        />
        <p>안녕하세요</p>
      </Navbar>
      <Navbar>
        <p>안녕하세요</p>
      </Navbar>
    </div>
  )
}

function Navbar({children}) {
  return (
    <header style={{backgroundColor: 'yellow'}}>{children}</header>
  );
}

function Avatar({img, name, size}) {
  return (
    <img 
      src={img} 
      alt={`${name}`} 
      width={size} 
      height={size}
      style={{borderRadius: '50%'}}
    />
  );
}