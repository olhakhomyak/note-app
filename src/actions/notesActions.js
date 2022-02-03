export const CREATE_NOTE = "CREATE_NOTE"
export const EDIT_NOTE = "EDIT_NOTE"
export const DELETE_NOTE = "DELETE_NOTE"

export const createNote = (dispatch) => ({
  id,
  title,
  content,
}) =>
  dispatch({
    type: CREATE_NOTE,
    id,
    title,
    content,
  });

export const editNote = (dispatch) => ({
  id,
  title,
  content,
}) =>
  dispatch({
    type: EDIT_NOTE,
    id,
    title,
    content,
  });

export const deleteNote = (dispatch) => (
  id
) =>
  dispatch({
    type: DELETE_NOTE,
    id,
  });