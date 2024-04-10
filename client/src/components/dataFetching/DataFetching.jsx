import React from 'react';
import axios from 'axios';
import { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Data.css';
import Button from '../Button/Button';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import Search from '../search/Search';

const DataFetching = () => {
  const [todos,setTodo] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3001/todo/read")
    .then(todo =>setTodo(todo.data))
    .catch(err=>console.log(err))
  },[])
  return (
    <div className="container-fluid">
    <div className="table-responsive py-5 border-1">
      <div className='border-work'>
        <h1>Todo-List</h1>
        <Search />
        <Link to="/todo" className='Link-tag'>
          <Button icon={PlusIcon} className="icon-button" />
        </Link>
      </div>
      <table className="table table-bordered table-hover text-center">
        <thead>
          <tr className="head-color">
            <th scope="col">Todo-ID</th>
            <th scope="col">Title</th>
            <th scope="col">Created-by</th>
            <th scope="col">Created-date</th>
            <th scope="col">Dead-line</th>
            <th scope="col">Description</th>
            <th scope="col">Progress</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
        {todos.map(todo => (
            <tr key={todo._id}>
              <td>{todo.todo_id}</td>
              <td>{todo.title}</td>
              <td>{todo.created_by}</td>
              <td>{todo.created_date}</td>
              <td>{todo.dead_line}</td>
              <td>{todo.context}</td>
              <td>{todo.progress}</td>
              <td>
                <Link to={`/todoedit/${todo._id}`} className='Link-tag'>
                  <Button className='edit-button' name='Edit' icon={PencilIcon} />
                </Link>
              </td>
              <td>
                <Button className='delete-button' name='Delete' icon={TrashIcon} />
              </td>
            </tr>
))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default DataFetching;
