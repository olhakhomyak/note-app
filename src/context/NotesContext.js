import React, { useReducer, useEffect, useContext, useState } from "react";
import notesReducer from "../reducers/notesReducer";
import { getNotes, saveNotes } from "../services/fetchNotes"
import { createNote, editNote, deleteNote } from "../actions/notesActions";

export const NotesContext = React.createContext(null);

export function NotesProvider(props) {
  const [initialNotes] = useState(() => getNotes());
  console.log(initialNotes, 777)
  const [notes, dispatch] = useReducer(notesReducer, initialNotes);

  useEffect(() => { saveNotes(notes) }, [notes]);

  const contextValue = [
    notes,
    dispatch,
  ];

  return (
    <NotesContext.Provider value={contextValue}>
      {props.children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const [state, dispatch] = useContext(NotesContext);
  const [actions] = useState(() => ({
      createNote: createNote(dispatch),
      editNote: editNote(dispatch),
      deleteNote: deleteNote(dispatch),
  }));

  return [state, actions];
}
