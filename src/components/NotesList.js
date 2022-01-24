import React from "react";
import NoteItem from "./NoteItem.js";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

const NoteList = ({
    notes,
    onAddNote,
    onDeleteNote,
    onEditNote,
  }) => {

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
                        onClick={onAddNote}
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
                    {notes.map((item) => (
                        <Grid
                            item
                            key={item.id}
                        >
                            <NoteItem
                                note={item} 
                                onDeleteNote={onDeleteNote}
                                onEditNote={onEditNote}
                             />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default NoteList;