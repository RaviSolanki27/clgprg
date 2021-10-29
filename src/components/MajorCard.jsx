import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import cardImg from '../assets/ideas.jpg'

const useStyles = makeStyles(() => ({

    cardStyle: {
        padding: '3rem 0'
    },

}));

function MajorCard() {
    const classes = useStyles();

    return (
        <div className={classes.cardStyle} >

            <Grid container>
                <Grid item md={1}></Grid>
                <Grid item md={4} >
                    <img src={cardImg} alt="" style={{ width: '100%' }} />
                </Grid>
                <Grid item md={1}></Grid>
                <Grid item md={5}>
                    <Grid container direction='column' spacing={4}>
                        <Grid item>
                            <Typography variant='h4'><u><strong>START LEARNING NOW</strong></u></Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h6'>Team CERTICOURSE welcomes you to the Ginuien and Authentic courses providing platform.We are glad that you choose us to help you out. On CERTICOURSE You will get the information of the courses you are looking for. Once you find your desired course then you can learn and improve your skills as well. Another function CERTICOURS provide is that you can also upload the courses which will be helpful for other users.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={1}></Grid>
            </Grid>

        </div>
    )
}

export default MajorCard;
