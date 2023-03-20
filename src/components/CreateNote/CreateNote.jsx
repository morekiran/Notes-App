import React, { useState } from 'react'
import "./CreateNote.css"
import {FcPlus} from "react-icons/fc"

const CreateNote = (props) => {

  const [note,setNote]=useState({
      title:"",
      content:"",
});

   const inputHandler = (e) => {
     const {value,name} = e.target
        setNote((prevData)=>{
          return{
            ...prevData,
            [name]:value,
          };
        });
        console.log(note)
   };

const createNoteHandler =(e)=>{
      e.preventDefault();
      props.passNote(note)
      setNote({
        title:"",
        content:"",})
}
  return (
    <div className='createNote-container'>
         <div className='createNote'>
        <form>
            <input type="text" name="title" value={note.title} onChange={inputHandler} placeholder='Title'autoComplete='off' />

            <textarea name="content" value={note.content} onChange={inputHandler} rows="4" placeholder='Add Note'autoComplete='off'></textarea>
            <button><FcPlus size="30px" onClick={createNoteHandler}/></button>
        </form>
    </div>

    </div>
      )
}

export default CreateNote