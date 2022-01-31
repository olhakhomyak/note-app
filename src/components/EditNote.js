import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NotesContext from '../context/NotesContext';
import NoteForm from './NoteForm';

const EditNote = () => {
    const { notes, setNotes } = useContext(NotesContext);

    const { id } = useParams();

    const navigate = useNavigate();

    const note = notes.find(item => item.id === id)

    const handleOnSubmit = (updated) => {
        const filteredNotes = notes.filter(item => item.id !== updated.id);
        setNotes([updated, ...filteredNotes]);
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