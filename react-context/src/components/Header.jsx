import React, {useContext} from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

export default function Header() {
  //3. useContext를 이용해 value로 전달해준 값을 가져올 수 있다. 
  const {isDark} = useContext(ThemeContext);
  const user = useContext(UserContext);

  console.log(user);
  return (
    <header className="header" style={{backgroundColor: isDark? 'black' : 'lightgray', color: isDark? 'white' : 'black'}}>
      <h1>Welcome {user}!</h1>
    </header>
  );
}

