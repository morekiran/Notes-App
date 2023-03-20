import { useState } from 'react';
import './App.css';
import CreateNote from './components/CreateNote/CreateNote';
import Note from './components/Note/Note';

function App() {
const [addItem,setAddItem]=useState([])

  const CreateNotes =(note)=>{
    setAddItem((oldData)=>{
      return[...oldData,note];
    });
    console.log(note);
 };

 const deleteNote = (id) => {
   setAddItem((olddata)=>
    olddata.filter((currentValue,index)=>{
      return index !== id;
    })
   )
 }

  return (
    <div>
      <h1>Notes App</h1>
      <CreateNote passNote={CreateNotes}/>
      <div className='Note-container'>
        
      {addItem.map((value,index)=>{
         return(
          <Note
          key={index}
          id={index}
          title={value.title}
          content={value.content}
          delete={deleteNote}
          />
      );
    })};
      </div>
    </div>
  );
}

export default App;
