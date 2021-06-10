import React from 'react';
import axios from 'axios'

const App = () => {

  const getData = async () => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
  console.log(response)
  }

 getData()


  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
