import './App.css';

function App() {
  const nineDev = 'Nine Dev';
  const arrayNineDev = [0, 1 , 2 , 3, 4];
  const a = 3;

  const arrayMap = [
    {
      name: 'Nine Dev',
      code: 'Frontend Dev'
    },
    {
      name: 'Nine Dev 002',
      code: 'Frontend Dev'
    },
    {
      name: 'Nine Dev 003',
      code: 'Frontend Dev'
    },
  ]

  const google = 'https://www.google.com'

  return (
    <div className="App">
      <h1>{nineDev}</h1>
      <div>{arrayNineDev}</div>
      <div>{a}</div>
      <div>
        {arrayMap.map((item, index) => (
          <div key={index}>
              <div>{item.name} - {index}</div>
              <div>{item.code}</div>
          </div>
        ))}
      </div>
      <a href={google}>Google</a>
    </div>
  );
}

export default App;
