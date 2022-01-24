import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const NoteItem = ({
    note,
    onDeleteNote,
    onEditNote
}) => {
    return(
        <Card
            sx={{ minWidth: 275 }}
            variant="outlined"
        >
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    { note.title }
                </Typography>
                <Typography
                    color="text.secondary"
                >
                    { note.content }
                </Typography>
            </CardContent>
            <CardActions
                sx={{justifyContent:"flex-end"}}    
            >
                <Button
                    onClick={(e) => onEditNote(note.id)} 
                    size="small"
                    variant="contained"
                    startIcon={<EditIcon />}
                >
                    Edit
                </Button>
                <Button
                    onClick={(e) => onDeleteNote(note.id)} 
                    size="small"
                    variant="contained"
                    color="error"
                    startIcon={<DeleteIcon />}
                >
                    Delete
                </Button>
            </CardActions>
      </Card>
    )
}

export default NoteItem;