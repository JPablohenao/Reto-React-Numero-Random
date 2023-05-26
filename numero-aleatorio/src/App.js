import {useState} from 'react';
const App = () => {
  const [num, setNum] = useState(0);
  function randomNumberInRange(min, max) {
    //  obtener el número entre min (inclusive) y max (inclusive)
    // 
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const handleClick = () => {
    setNum(randomNumberInRange(100000, 999999));
  };
  return (
    <div>
      <h2>El numero es: {num}</h2>
      <button onClick={handleClick}>Generar un numero aleatorio</button>
    </div>
  );
};
export default App;
