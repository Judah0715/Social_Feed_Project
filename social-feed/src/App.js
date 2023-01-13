import React, { useState } from 'react';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import AddPost from './Components/DisplayPost/AddPost/AddPost';
import './app.css';

function App() {

  const [entries, setEntries] = useState([{name:"Dev", post:"I like sandwiches", date:"04-21-2022"}, {name:"JJ", post:"Me too", date:"04-21-2022"}, {name:"Megan", post:"I hate sandwiches", date:"04-21-2022"}])

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