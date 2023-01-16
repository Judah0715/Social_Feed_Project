import React, { useState } from 'react';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import AddPost from './Components/DisplayPost/AddPost/AddPost';
import './App.css';

function App() {

  const [entries, setEntries] = useState([{name:"Alec", post:"I like Pizza", date:"01-10-2023"}, {name:"Trenton", post:"Me too, but with mushrooms", date:"01-10-2023"}, {name:"Maddie", post:"I just got a new Kitty", date:"01-14-2023"}])

  function addNewEntry(entry){
    let tempEntries =[...entries, entry];
 
    setEntries(tempEntries);
  }
  return(
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-6'>
          <div className='border-box'>
        <AddPost addNewEntryProperty={addNewEntry} />
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='border-box'>
      <DisplayPost parentEntries={entries} />
      </div>
      </div>
      </div>
     </div>
  
  );
}

export default App;