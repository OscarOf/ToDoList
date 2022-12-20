import React from "react";
import Checkbox from "./Checkbox";

const TaskList = props => {
    //Agregamos list a una props
    const { list, setList } = props;
    const onChangeStatus = e => {
        const { name, checked } = e.target;
        //al hacer clic en el elemento lo selecciona
        const updateList = list.map(item => ({
            ...item,
            done: item.id === name ? checked : item.done
        }));
        setList(updateList);
    };/* traemos el updatelist como parametro del método setList*/
    // creamos la función para eliminar elementos de la lista mediante el filtro y actualizamos la lista con el método setList
    const onClickRemoveItem = e => {
        const updateList = list.filter(item => !item.done);
        setList(updateList);
    };
    //
    const chk = list.map(item => (
        <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
    ));
    return (
        <div className="todo-list">
            {/*(A-1)*/}
            {list.length ? chk : "No tasks"}
            {/*(B)*/}
            {list.length ? (
                <p>
                    <button className="button blue" onClick={onClickRemoveItem}>
                        Delete all done
                    </button>
                </p>
            ) : null}
        </div>
    )
};

export default TaskList;