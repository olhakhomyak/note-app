import NoteForm from './NoteForm';

const CreateNote = ({ handleOnSubmit }) => {
  return (
    <NoteForm
        handleOnSubmit={handleOnSubmit}
    />
  );
};

export default CreateNote;