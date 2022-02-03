import React, { useReducer, useEffect, useContext, useState } from "react";
import notesReducer from "../reducers/notesReducer";
import { createNote, editNote, deleteNote } from "../actions/notesActions";

export const NotesContext = React.createContext(null);

const initialNotes = localStorage.notes ? JSON.parse(localStorage.notes) : []

export function NotesProvider(props) {
  const [notes, dispatch] = useReducer(notesReducer, initialNotes);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

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
