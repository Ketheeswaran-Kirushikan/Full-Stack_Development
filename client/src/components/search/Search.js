import React from 'react'
import Input from '../Input/Input';
import Button from '../Button/Button';
import {SearchIcon} from '@heroicons/react/outline'; 
import './Search.css'

const Search = () => {
  return (
    <div className='search-container'>
        <Input className='inputTypeSearch' placeholder="Search" id="Search" type="text"/>
        <Button icon={SearchIcon} className="search-button"/>
    </div>
  )
}

export default Search;