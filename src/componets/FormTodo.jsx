import React, { useState } from "react";

const FormTodo = props => {
  const { handleAddItem } = props; //Se agrega el handdleaddItem a props 
  const [description, setDescription] = useState(""); //Usamos el useState para almacenar la descripción
  const handleSubmit = e => {
    e.preventDefault(); // Se crea una función flecha y el primer evento evita que se recargue la página
    // llamamos las props por medio de handleadditem
    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description
    });
    setDescription(""); //Indicamos con el método que la descripción está vacía
  };
  return (
    <form onSubmit={handleSubmit}>
      {/*Pasamos el método handlesubmit al formulario*/}
      <div className="todo-list">
        <div className="file-input">
          {/*creamos dos div con sus respectivas clases*/}
          <input
            type="text"
            className="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          {/*Creamos una etiqueta con el valor de description y pasamos el evento de agregar una descripción sobre la etiqueta*/}
          <button
            className="button pink"
            disabled={description ? "" : "disabled"}>{/*Si la descripción está vacía el botón no estará funcional*/}
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormTodo;