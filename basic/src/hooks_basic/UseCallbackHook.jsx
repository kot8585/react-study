import React, {useState, useEffect, useCallback} from 'react';


export default function useCallbackHook() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  //toggle이 변경되어도 someFunction은 다시 할당되지 않음!
  const someFunction = useCallback(() => {
    console.log(`someFunc: number: ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    //왜 처음에는 두번 호출이 되는거야?
    console.log("someFunction이 변경되었습니다.")
  }, [someFunction]);

  return (
    <div>
      <input 
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={() => {
          console.log('응?');
          setToggle(!toggle)
          }}>
            {toggle.toString()}
          </button>
        <br />
        <button onClick={someFunction}>Call someFunc</button>
    </div>
  );
}

