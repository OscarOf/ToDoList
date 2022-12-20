import React, {useState} from 'react'
import FormTodo from './FormTodo';
import Tasklist from './Tasklist';

const Container = () => {
  const [list, setList] = useState([]); // Usamos el useState para almacenar un estado de la lista
  
  const handleAddItem = addItem => {
    setList([...list, addItem]); // Se crea una función flecha en el que se usa el setList para agregar elementos
  };
  return (
    <div>
      {/*Implementamos el componente Formtodo y le pasamos el método Handleitem*/}
      <FormTodo handleAddItem={handleAddItem} />
      {/*Implementamos el otro componente importado Tasklist al cual se le implementa el método setList*/}
      <Tasklist list={list} setList={setList} />
    </div>
  )
};

export default Container;