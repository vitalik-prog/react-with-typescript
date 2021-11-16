import React from 'react';
import EventsExample from "./components/EventsExample";
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import Users from "./pages/Users";
import Todos from "./pages/Todos";
import UserItemPage from "./pages/UserItemPage";
import TodoItemPage from "./pages/TodoItemPage";

function App() {
  return (
    <BrowserRouter>
        <div style={{ marginBottom: 40 }}>
          <Link style={{ marginRight: 20 }} to={'/users'}>Users</Link>
          <Link style={{ marginRight: 20 }} to={'/todos'}>Todos</Link>
          <Link style={{ marginRight: 20 }} to={'/events'}>Events</Link>
        </div>
        <Routes>
          <Route path={'/users'} element={<Users />} />
          <Route path={'/todos'} element={<Todos />} />
          <Route path={'/events'} element={<EventsExample />} />
          <Route path={'/users/:id'} element={<UserItemPage />} />
          <Route path={'/todos/:id'} element={<TodoItemPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
