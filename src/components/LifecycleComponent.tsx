import { useState } from 'react';

const LifecycleComponent = () => {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const startCounter = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const stopCounter = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={startCounter}>Iniciar</button>
      <button onClick={stopCounter}>Detener</button>
      <button onClick={resetCounter}>Reiniciar</button>
    </div>
  );
};

export default LifecycleComponent;
