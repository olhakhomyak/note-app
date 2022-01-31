import React, { useState, useEffect} from "react";
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import NotesContext from '../context/NotesContext';
import Grid from '@mui/material/Grid';
import NotesList from "./NotesList.js";
import NoteItem from "./NoteItem.js";
import CreateNote from "./CreateNote";
import EditNote from "./EditNote";

function Main() {
    const [notes, setNotes] = useState(
        localStorage.notes ? JSON.parse(localStorage.notes) : []
    );

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const navigate = useNavigate();

    const handleOnSubmit = (newNote) => {
        setNotes([newNote, ...notes]);
        navigate('/');
    };

    return(
        <React.Fragment>
          <NotesContext.Provider
            value={{ notes, setNotes }}
          >
            <Grid
              container
              spacing={10}
            >
                <Grid
                  item
                  xs={6}
                >
                  <Routes>
                      <Route
                        element={<NoteItem />}
                        path="/preview/:id"
                      />
                      <Route
                        element={<CreateNote handleOnSubmit={handleOnSubmit} />}
                        path="/create"
                      />
                      <Route
                        element={<EditNote handleOnSubmit={handleOnSubmit} />}
                        path="/edit/:id"
                      />
                      <Route
                        element={() => <Navigate to="/" />}
                      />
                  </Routes>
                </Grid>
                <Grid
                  item
                  xs={6}
                >
                  <NotesList />
                </Grid>
            </Grid>
          </NotesContext.Provider>
        </React.Fragment>   
    );
}

export default Main;
