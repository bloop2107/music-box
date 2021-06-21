import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SearchInput from './SearchInput'


const SearchVideo = ({classes}) => {
    return (
        <Grid item xs={4}>
            <Paper  className={classes.paper}>
                <SearchInput />
            </Paper>
        </Grid>
    )
}

export default SearchVideo
