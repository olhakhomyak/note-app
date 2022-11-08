import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useNotes } from '../context/NotesContext';
import NoteForm from './NoteForm';

const EditNote = () => {
    const [notes, dispatch] = useNotes();

    const navigate = useNavigate();

    const { id } = useParams();

    const note = notes.find(item => item.id === id)

    const handleOnSubmit = (updatedNote) => {
        dispatch.editNote(updatedNote)
        navigate('/');
    };

    return (
        <NoteForm
            note={note}
            editMode={true}
            handleOnSubmit={handleOnSubmit}
        />
  );
};

export default EditNote;