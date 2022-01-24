import React, {useState} from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';

const NoteForm = ({ note, onUpdateNote }) => {

    const defaultValues = {
        title: "Untitled note",
        content: "",
    };

    const [formValues, setFormValues] = useState(note || defaultValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onUpdateNote({
          ...note,
          ...formValues,
        });
      };

    if (!note) return (null)

    return (
        <form onSubmit={handleSubmit}>
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
                        required
                        margin="normal"
                        value={formValues.title}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid
                    item
                >
                    <TextField
                        id="conytent-input"
                        name="content"
                        label="content"
                        type="text"
                        multiline
                        fullWidth
                        required
                        margin="normal"
                        value={formValues.content}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Button
                    variant="contained"
                    startIcon={<SaveIcon />}
                    type="submit"
                >
                    Save
                </Button>
          </Grid>
        </form>
      );
}

export default NoteForm;