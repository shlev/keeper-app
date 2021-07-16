import React, { useState} from 'react';
import {v4 as uuidv4} from 'uuid'


function CreateArea(props) {

    const [newNote, setNewNote] = useState(initNote());

    function initNote() {
      const uuid = uuidv4();
      return {
         title: '', content: '', uuid: uuid
      }
    }
    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        const updatedNote = { ...newNote, [name]:value};
        setNewNote(updatedNote);

    }

    function handleAddClick( event) {
        console.log("CreateArea handleAddClick")
        props.addNewNote(newNote);
        setNewNote(initNote())
        event.preventDefault();
    }
    return (
      <div>
        <form>
          <input name="title" onChange={handleChange} placeholder="Title" value={newNote.title}/>
          <textarea name="content" onChange={handleChange} placeholder="Take a note..."  value={newNote.content} rows="3" />
          <button onClick={handleAddClick}>Add</button>
        </form>
      </div>
    );
}

export default CreateArea;
