import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles(() => ({

}));

function Footer() {
    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item><Typography variant='h4'>CERTICOURSE</Typography></Grid>
            </Grid>
        </div>
    )
}

export default Footer;
