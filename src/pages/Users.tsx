import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import UserItem from "../components/UserItem";
import ReusableList from "../components/ReusableList";
import { useNavigate } from 'react-router-dom'

const Users: FC = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const navigate = useNavigate()
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
    <ReusableList items={users} renderItem={(user: IUser) => <UserItem onClick={(user) => navigate(`/users/${user.id}`)} key={user.id} user={user}/>} />
  );
};

export default Users;
