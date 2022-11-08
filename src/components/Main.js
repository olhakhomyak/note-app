import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import NotesList from "./NotesList.js";
import NoteItem from "./NoteItem.js";
import CreateNote from "./CreateNote";
import EditNote from "./EditNote";

function Main() {
    return(
        <>
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
                      element={<CreateNote />}
                      path="/create"
                    />
                    <Route
                      element={<EditNote />}
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
        </>   
    );
}

export default Main;
