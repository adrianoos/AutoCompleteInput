import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import List from './Components/List';
//import {useSelector} from 'react-redux';

const App = () => {

//const users2 = useSelector(state => state.users2)

  //console.log(users2)

  const [ input, setInput ] = useState('')
  const [ users, setUsers ] = useState([])
  const [ filteredUsers, setFilteredUsers ] = useState([])
  const [ markUp, SetMarkUp ] = useState('')

  const getData = async () => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`)
  setUsers(data)
  };

  useEffect(() => {
   getData()
  }, [])

  useEffect(() => {
    markMatchingLetters()
   }, [input])

  const markMatchingLetters = () => {
    for (let item of filteredUsers) {
      if (item.username.substr(0, input.length).toUpperCase() === input.toUpperCase()) {
      let marked = ((item.username.substr(0, input.length)))
      SetMarkUp(marked)
      }
    }
  };


 const filterUsers = (e) => {
   setInput(e.currentTarget.value)
   const filteredUsers = getFilteredUsers(input)
   setFilteredUsers(filteredUsers)
 };

 const getFilteredUsers = (inputText) => {
    return users.filter(item => item.username.toLowerCase().includes(inputText.toLowerCase()))
 };

  return (
    <div id='MainContainer'>
      <h2>Search by UserName</h2>
        <form id='SubmitForm' autoComplete='off'>
            <input id='Input' type='text' placeholder='UserName' onInput={filterUsers}></input>
            <button id='SubmitButton' type='submit'>SUBMIT</button>
        </form>
           <List
           filteredUsers={filteredUsers}
           input={input}
           markup={markUp}
          />
        </div>
  );
}

export default App;
