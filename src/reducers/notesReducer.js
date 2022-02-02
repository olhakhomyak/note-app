export default function notesReducer(notes, action) {
    switch (action.type) {
      case "CREATE_NOTE":
        const { note } = action;

        return([note, ...notes]);
      case "EDIT_NOTE": {
          const { note } = action;
          const filteredNotes = notes.filter(({ id }) => id !== note.id);

          return([note, ...filteredNotes]);
        }
      case "DELETE_NOTE": {
          const { note } = action;
          const filteredNotes = notes.filter(({ id }) => id !== note.id);

          return filteredNotes;
       }
      default:
        return notes
    }
  }
  