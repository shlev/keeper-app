import React, { useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {

    const [newNote, setNewNote] = useState(initNote());

    function initNote() {
      const uuid = uuidv4();
      return {
         title: '', content: '', uuid: uuid
      }
    }
    function handleChange(event) { 
      const {name, value} = event.target;
      setNewNote({ ...newNote, [name]:value});
    }

    function handleAddClick( event) {
        console.log("CreateArea handleAddClick")
        props.onAdd(newNote);
        setNewNote(initNote())
        event.preventDefault();
    }
    return (
      <div>
        <form className="create-note">
          <input
            name="title"
            onChange={handleChange}
            placeholder="Title"
            value={newNote.title}
          />
          <textarea
            name="content"
            onChange={handleChange}
            placeholder="Take a note..."
            value={newNote.content}
            rows="3"
          />
          <Zoom in={true}>
            <Fab onClick={handleAddClick}>
              <AddIcon />
            </Fab>
          </Zoom>
        </form>
      </div>
    );
}

export default CreateArea;
