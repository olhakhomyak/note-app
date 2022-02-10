export const getNotes = () => {
    const notes = localStorage.notes ? JSON.parse(localStorage.notes) : []

    return notes
};
  
export const saveNotes = (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes));
};