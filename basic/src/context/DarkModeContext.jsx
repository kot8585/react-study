import {createContext, useState} from 'react';

//다크모드에 필요한 데이터 간직
export const DarkModeContext = createContext();

// 특정 컴포넌트에 적용될 수 있도록 우산을 만든다.
export function DarkModeProvider({children}) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);

  //자식 컴포넌트와 공유하고 싶은 데이터를 value에 할당
  return (
  <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
    {children}
    </DarkModeContext.Provider>
    )
}