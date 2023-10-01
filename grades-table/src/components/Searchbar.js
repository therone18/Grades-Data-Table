import React, {useState} from 'react'
import {BsSearch} from 'react-icons/bs'
import '../App.css'
export const Searchbar = () => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchChange = (event) =>{
    setSearchValue(event.target.value)
    
  }

  return (
    <div class='search-bar'>
      <label class ='search-bar-item'>Search for: </label>
      <input  class ='search-bar-item' type='text' value={searchValue} onChange={handleSearchChange}/>
      <button  class ='search-bar-item' > <BsSearch/></button>
    </div>
  )
}

export default Searchbar