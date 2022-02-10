export default function notesReducer(notes, action) {
    switch (action.type) {
      case "CREATE_NOTE":
        const { id, title, content } = action;

        return([{
          id,
          title,
          content,
        }, ...notes]);
      case "EDIT_NOTE": {
          const { id, title, content } = action;
          const filteredNotes = notes.filter(item => item.id !== id);

          return([{
            id,
            title,
            content,
          }, ...filteredNotes]);
        }
      case "DELETE_NOTE": {
          const { id } = action;
          const filteredNotes = notes.filter(item => item.id !== id);

          return filteredNotes;
       }
      default:
        return notes
    }
  }
  