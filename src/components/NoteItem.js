import React  from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useNotes } from '../context/NotesContext';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const NoteItem = ({ note }) => {
    const { notes, dispatch } = useNotes();
    
    const { id } = useParams();
    
    const navigate = useNavigate();
    
    let editMode = true;
    
    if(!note) {
        note = notes.find(note => note.id === id);
        editMode = false;
    }
    
    const onDeleteNote = (deleted) => {
        dispatch({type: 'DELETE_NOTE', note: deleted})
        if(id === deleted.id) navigate('/')
    };

    return(
        <Card
            sx={{ minWidth: 275 }}
            variant="outlined"
        >
            <CardContent
                onClick={() => navigate(`/preview/${note.id}`)}
            >
                <Typography
                    sx={{ fontSize: 21 }}
                    align='left'
                    gutterBottom
                >
                    { note.title }
                </Typography>
                <Typography
                    sx={{ fontSize: 16 }}
                    align='left'
                >
                    { note.content }
                </Typography>
            </CardContent>
            {editMode ?
                <CardActions
                    sx={{justifyContent:"flex-end"}}
                >
                    <Button
                        onClick={() => navigate(`/edit/${note.id}`)}
                        size="small"
                        variant="contained"
                        startIcon={<EditIcon />}
                    >
                        Edit
                    </Button>
                    <Button
                        onClick={() => {onDeleteNote(note)}}
                        size="small"
                        variant="contained"
                        color="error"
                        startIcon={<DeleteIcon />}
                    >
                        Delete
                    </Button>
                </CardActions> : 
                null
            }
      </Card>
    )
}

export default NoteItem;