import './App.css';

function AppJSX() {
  const name = '엘리';
  const list = ['우유', '딸기', '바나나'];
  return (
    <>
      <h1 className="orange">{`${name}, 안녕`}</h1>
      <ol>
        {list.map((item) => (<li>{item}</li>))}
      </ol>
    </>

  );
}

export default AppJSX;
