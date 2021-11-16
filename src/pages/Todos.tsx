import React, {useEffect, useState} from 'react';
import ReusableList from "../components/ReusableList";
import {ITodo} from "../types/types";
import TodoItem from "../components/TodoItem";
import axios from "axios";

const Todos = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos(response.data)
    } catch (e) {
      alert(e)
    }
  }
  return (
    <ReusableList items={todos} renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo}/>} />
  );
};

export default Todos;
