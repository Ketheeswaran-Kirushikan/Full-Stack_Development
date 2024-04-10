import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.css';
import Button from '../Button/Button';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import Search from '../search/Search';

const Table = (props) => {
  const [todoId, setTodoId] = useState(1);
  const incrementTodoId = () => {
    setTodoId(prevId => prevId + 1);
  };
  const [title, setTitle] = useState("Sample Title 1");
  const [createdBy, setCreatedBy] = useState("User 1");
  const [createdDate, setCreatedDate] = useState("2024-04-01");
  const [updatedDate, setUpdatedDate] = useState("");
  const [deadline, setDeadline] = useState("2024-04-15");
  const [description, setDescription] = useState("Description 1");
  const [progress, setProgress] = useState("50%");

  const handleEdit = () => {
    const currentDate = new Date().toISOString().slice(0, 10);
    setUpdatedDate(currentDate);
  };

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
              <th scope="col">Updated-date</th>
              <th scope="col">Dead-line</th>
              <th scope="col">Description</th>
              <th scope="col">Progress</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{todoId}</td>
              <td>{title}</td>
              <td>{createdBy}</td>
              <td>{createdDate}</td>
              <td>{updatedDate}</td>
              <td>{deadline}</td>
              <td>{description}</td>
              <td>{progress}</td>
              <td>
                <Link to="/todoedit" className='Link-tag'>
                  <Button className='edit-button' name='Edit' icon={PencilIcon} onClick={handleEdit} />
                </Link>
              </td>
              <td><Button className='delete-button' name='Delete' icon={TrashIcon} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
