import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import NotesContext from '../context/NotesContext';
import NoteItem from "./NoteItem.js";
import Placeholder from "./Placeholder";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';


const NoteList = () => {
    const { notes } = useContext(NotesContext);

    const navigate = useNavigate();

    return(
        <React.Fragment>
            <Grid
                container
                direction="column"
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    sx={{ marginBottom: "36px" }}
                >
                    <Typography
                        variant="h4"
                        align="left"
                    >
                        Notes list
                    </Typography>
                    <Button 
                        onClick={() => navigate('/create')}
                        variant="contained"
                        startIcon={<AddIcon />}
                    >
                        Create note
                    </Button>    
                </Grid>
                <Grid
                    container
                    direction="column"
                    spacing={{ xs: 4 }}
                >
                    {notes?.length ?
                        notes.map((note) => (
                            <Grid
                                item
                                key={note.id}
                            >
                                <NoteItem
                                    note={note}
                                />
                            </Grid>
                        )) :
                        <Placeholder />
                    }
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default NoteList;