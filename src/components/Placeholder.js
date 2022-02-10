import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Placeholder = () => {
    return(
        <Card
            sx={{ minWidth: 275, marginTop: '2em', padding: '2em' }}
            variant="outlined"
        >
            <CardContent>
                <Typography
                    sx={{ fontSize: 21 }}
                >
                    No saved notes yet
                </Typography>
            </CardContent>
      </Card>
    )
}

export default Placeholder;