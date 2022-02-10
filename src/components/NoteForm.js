import React, {useState, useMemo} from "react";
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import SaveIcon from '@mui/icons-material/Save';

const NoteForm = (props) => {
    const [note, setNote] = useState(() => {
        return {
          title: props.note ? props.note.title : 'Untitled note',
          content: props.note ? props.note.content : '',
        };
    });

    const [errorMsg, setErrorMsg] = useState({
        title: null,
        content: null,
    });

    const navigate = useNavigate();

    const CHARACTERS_LIMIT = 1000;

    const { title, content } = note;

    const titleErrors = useMemo(() => {
        if(title === '') return "Title can't be blank";
    }, [title]);

    const contentErrors = useMemo(() => {
        if(content === '') return "Content can't be blank";
        if(content.length > CHARACTERS_LIMIT) return `You have exceeded the maximum number of ${CHARACTERS_LIMIT} characters in this note`;
    }, [content]);
    
    const handleOnSubmit = (event) => {
        event.preventDefault();
        
        if(titleErrors || contentErrors) {
            return setErrorMsg({
                title: titleErrors || null,
                content: contentErrors || null,
            })
        }

        const validContent = content.replace(/(<([^>]+)>)/gi, "");
        const note = {
            id: props.editMode ? props.note.id : uuidv4(),
            title,
            content: validContent,
        };
        props.handleOnSubmit(note);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if(errorMsg.title && name === 'title') {
            setErrorMsg({...errorMsg, title: null});
        }
        if(errorMsg.content && name === 'content') {
            setErrorMsg({...errorMsg, content: null});
        }
        setNote((prevState) => ({
            ...prevState,
            [name]: value
          }));
    };

    return (
        <>
            <Typography
                variant="h4"
                align="left"
                sx={{marginBottom:'0.55em'}}
            >
                {props.editMode ? 'Edit note' : 'Create new note' }
            </Typography>
            <form onSubmit={handleOnSubmit}>
                <Grid
                    container
                    direction="column"
                >
                    <Grid
                        item
                    >
                        <TextField
                            id="title-input"
                            name="title"
                            label="Title"
                            type="text"
                            fullWidth
                            margin="normal"
                            error={!!(errorMsg.title)}
                            value={title}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid
                        item
                    >
                        <TextField
                            id="content-input"
                            name="content"
                            label="content"
                            type="text"
                            multiline
                            rows={5}
                            fullWidth
                            margin="normal"
                            error={!!(errorMsg.content)}
                            value={content}
                            onChange={handleInputChange}
                        />
                        <Typography
                            align='left'
                            color={content.length > CHARACTERS_LIMIT ? "error" : "text.secondary"}
                            sx={{marginBottom: '1em'}}
                        >
                            Characters {content.length} / {CHARACTERS_LIMIT}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        sx={{display: 'flex', justifyContent:"flex-end"}}
                    >
                        <Button
                            variant="contained"
                            color="success"
                            startIcon={<SaveIcon />}
                            type="submit"
                            size="small"
                            sx={{margin: '0 8px'}}
                        >
                            Save
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={() => navigate('/')}
                            size="small"
                            sx={{margin: '0 8px'}}
                        >
                            Cancel
                        </Button>
                    </Grid>
                </Grid>
                {(errorMsg.title || errorMsg.content) && 
                    <Alert
                        severity="error"
                        sx={{marginTop: "1em"}}
                    >

                        <Typography align="left">
                            { errorMsg.title } 
                        </Typography>
                        <Typography align="left">
                            { errorMsg.content } 
                        </Typography>
                    </Alert>
                }
            </form>
        </>
      );
}

export default NoteForm;