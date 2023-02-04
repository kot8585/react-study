import {useState} from 'react';
import './App.css';
import Page from './components/Page';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    //2. 하위컴포넌트들을 context로 감싸기
    <ThemeContext.Provider value={{isDark, setIsDark}}>
      <Page isDark={isDark} setIsDark={setIsDark}/>
    </ThemeContext.Provider>
  );
}

export default App;
