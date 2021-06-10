import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {

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
   const inputText = e.currentTarget.value
   const filteredUsers = getFilteredUsers(inputText)
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
    </div>
  );
}

export default App;
