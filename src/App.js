import React from 'react';
import axios from 'axios';
import './App.css';

const App = () => {

  const getData = async () => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
  console.log(response)
  }

 getData()


  return (
    <div id='MainContainer'>
        <form id='SubmitForm'>
           <input id='Input' placeholder='UserName' type='text' ></input>
           <button id='SubmitButton' type='submit'>SUBMIT</button>
        </form>
    </div>
  );
}

export default App;
