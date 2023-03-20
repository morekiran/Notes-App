import React from 'react'
import "./Note.css"
import {AiFillDelete} from "react-icons/ai"

const Note = (props) => {

    const deleteItem=()=>{
       props.delete(props.id)
    }
  return (
    <div className='Note'>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <AiFillDelete className='delete' size="20px" onClick={deleteItem}/>
    </div>
  )
}

export default Note