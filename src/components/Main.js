import Grid from '@mui/material/Grid';
import React, { useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import NoteForm from "./NoteForm.js";
import NotesList from "./NotesList.js";

function Main() {
    const [notes, setNotes] = useState(
        localStorage.notes ? JSON.parse(localStorage.notes) : []
    );

    const [note, setNote] = useState(false);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const onAddNote = () => {
        const newNote = {
          id: uuidv4(),
          title: "Untitled note",
          content: "",
        };
    
        setNotes([newNote, ...notes]);
        setNote(newNote.id);
      };
    
      const onUpdateNote = (updated) => {
        const updatedNotes = notes.map((note) => {
          if (note.id === updated.id) {
            return updated;
          }
    
          return note;
        });
    
        setNotes(updatedNotes);
        setNote(null);
      };

      const onDeleteNote = (deleted) => {
        setNotes(notes.filter(({ id }) => id !== deleted));
      };
    
      const getNote = () => {
        return notes.find(({ id }) => id === note);
      };
    

    return(
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <NoteForm
                        note={getNote()}
                        onUpdateNote={onUpdateNote}
                    />
                </Grid>
                <Grid item xs={6}>
                    <NotesList                 
                        notes={notes}
                        onAddNote={onAddNote}
                        onEditNote={setNote}
                        setNotes={setNotes}
                        onDeleteNote={onDeleteNote}
                    />
                </Grid>
            </Grid>
        </React.Fragment>   
    );
}

export default Main;
