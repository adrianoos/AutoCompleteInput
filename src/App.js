import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import List from './Components/List';
import {useSelector, useDispatch} from 'react-redux';
import { setInput, setMarkUp } from './Actions';

const App = () => {

  const reduxState = useSelector(state => state)
  const dispatch = useDispatch()

// read -> reduxState.input
// write -> dispatch(setInput('Adrian'))

  const [ users, setUsers ] = useState([])
  const [ filteredUsers, setFilteredUsers ] = useState([])

  const getData = async () => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`)
  setUsers(data)
  };

  useEffect(() => {
   getData()
  }, [reduxState.input])

  useEffect(() => {
    markMatchingLetters()
   }, [reduxState.input])


 const markMatchingLetters = () => {
  for (let item of filteredUsers) {
    if (item.username.substr(0, reduxState.input.length).toUpperCase() === reduxState.input.toUpperCase()) {
    let marked = ((item.username.substr(0, reduxState.input.length)))
    dispatch(setMarkUp(marked))
    }
  }
};

 const filterUsers = (e) => {
   const input = e.currentTarget.value
   const filtered = users.filter(user => user.username.toLowerCase().includes(input.toLowerCase()))
   setFilteredUsers(filtered)
   dispatch(setInput(input))
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
           input={reduxState.input}
           markup={reduxState.markUp}
          />
        </div>
  );
}

export default App;
