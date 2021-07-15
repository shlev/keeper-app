import React, { useState} from 'react'
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from '../notes';
import CreateArea from './CreateArea';

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        console.log("App Add Note")
        console.log("New Note -> " + newNote);
        setNotes(function(prevNotes) { return  [...notes, newNote]} )
        console.log(notes);
    }
    
    return (
        <div>
            <Header />
            <CreateArea addNewNote = {addNote}/>
            {notes.map(note=>
             <Note 
             key={note.key}
             title = {note.title}
             content = {note.content}    
             />)}
             {/* <Note key={1} title="Note Title" content="Note Content" /> */}
            <Footer />
        </div>
    );
}

export default App;