import React, { LegacyRef, useEffect, useRef, useState } from 'react';

const  TodoForm:React.FC<{
    edit?: {
    id: number | null;
    value: string;
};
onSubmit: (todo: TodoItem) => void;}> = ({edit, onSubmit}) => {
  const [input, setInput] = useState(edit ? edit.value : '');

  const inputRef:LegacyRef<any> = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e:any) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;