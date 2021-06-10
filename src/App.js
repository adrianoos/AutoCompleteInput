import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import UserList from './Components/UserList'

const App = () => {

  const [ input, setInput ] = useState('')
  const [ users, setUsers ] = useState([])
  const [ filteredUsers, setFilteredUsers ] = useState([])

  const getData = async () => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`)
  setUsers(data)
  };

  useEffect(() => {
   getData()
  }, [])

 const filterUsers = (e) => {
   setInput(e.currentTarget.value)
   const filteredUsers = getFilteredUsers(input)
   setFilteredUsers(filteredUsers)
 };

 const getFilteredUsers = (inputText) => {
    return users.filter(item => item.username.toLowerCase().includes(inputText.toLowerCase()))
 };

 console.log(filteredUsers)

  return (
    <div id='MainContainer'>
        <h2>Search by UserName</h2>
        <form id='SubmitForm'>
           <input id='Input' placeholder='UserName' type='text' onInput={filterUsers}></input>
           <button id='SubmitButton' type='submit'>SUBMIT</button>
        </form>
        <UserList
          filteredUsers ={filteredUsers}
          input={input}
          />
    </div>
  );
}

export default App;
