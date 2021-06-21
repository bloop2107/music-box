import React from 'react'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const Header = ({classes}) => {
    return (
        <Grid item xs={12} className={classes.root}>
            <Paper className={classes.paper} style= {{ borderRadius: 0, padding: "20px" }} >
                    <Box display="flex" justifyContent="flex-end" >
                    <Button  variant="contained">
                        Primary
                    </Button>
                    </Box>
            </Paper>
        </Grid>
        
    )
}

export default Header
