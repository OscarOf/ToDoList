import React from 'react';
import './App.scss';
import './componets/button.scss';
import './componets/todo.scss';
import './componets/checkbox.scss';
import './componets/state1.scss';
import Container from './componets/Container';

function App() {
  return (
    <div className="App">
      <Container/>{/*Llamamos al contenedor principal donde se encuentran todos los componentes*/}

    </div>
  );
}

export default App;
