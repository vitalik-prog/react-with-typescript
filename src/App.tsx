import React, {useEffect, useState} from 'react';
import UserList from "./components/UserList";
import {IUser} from "./types/types";
import axios from "axios";

function App() {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div>
      <UserList users={users} />
    </div>
  );
}

export default App;
