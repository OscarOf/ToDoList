import React, {useState} from 'react'
import FormTodo from './FormTodo';
import Tasklist from './Tasklist';

const Container = () => {
  const [list, setList] = useState([]); // (B-1)
  // (A-2)
  const handleAddItem = addItem => {
    setList([...list, addItem]); // (B-2)
  };
  return (
    <div>
      {/*(A-1)*/}
      <FormTodo handleAddItem={handleAddItem} />
      {/*(C)*/}
      <Tasklist list={list} setList={setList} />
    </div>
  )
};

export default Container;