import { useNavigate } from 'react-router-dom';
import { useNotes } from '../context/NotesContext';
import NoteForm from './NoteForm';

const CreateNote = () => {
  const navigate = useNavigate();

  const [ _, dispatch ] = useNotes();

  const handleOnSubmit = (newNote) => {
    dispatch.createNote(newNote)
    navigate('/');
};

  return (
    <NoteForm
        handleOnSubmit={handleOnSubmit}
    />
  );
};

export default CreateNote;