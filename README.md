# LifecycleComponent

Este componente de React, `LifecycleComponent`, es un simple contador que puede ser iniciado, detenido y reiniciado por el usuario. Utiliza el hook `useState` para gestionar el estado del contador y el hook `useInterval` para controlar el intervalo de tiempo.

## Uso

Para utilizar este componente, simplemente importa `LifecycleComponent` en tu archivo y añádelo a tu renderizado de React.

Funcionalidades
Iniciar: Comienza a incrementar el contador en 1 cada segundo.
Detener: Detiene el incremento automático del contador.
Reiniciar: Restablece el contador a 0.

```javascript
import React from 'react';
import LifecycleComponent from './LifecycleComponent';

function App() {
  return (
    <div>
      <LifecycleComponent />
    </div>
  );
}

export default App;
