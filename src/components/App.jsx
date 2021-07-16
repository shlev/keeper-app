import React, { useState} from 'react'
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => [...notes, newNote] );
    }

    function deleteNote(uuid) {
      setNotes(prevNotesc => prevNotes.filter((note) => note.uuid != uuid));
    }
    
    return (
        <div>
            <Header /> 
            <CreateArea onAdd = {addNote}/>
            {notes.map(note=>
             <Note 
             key={note.uuid}
             id = {note.uuid}
             title = {note.title}
             content = {note.content}
             onDelete = {deleteNote}
             />)}
            <Footer />
        </div>
    );
}

export default App;