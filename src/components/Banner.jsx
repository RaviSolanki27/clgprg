import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import StarsRoundedIcon from '@material-ui/icons/StarsRounded';
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';

const useStyles = makeStyles(() => ({

    mainStyle: {
        backgroundColor: "#f7f9fa",
        padding:"4rem 0"
    },
    iconStyle:{
        fontSize:"2.3rem"
    },

}));

function Banner() {

    const classes = useStyles();

    return (
        <div>

            <Grid container className={classes.mainStyle} direction='row' justifyContent='space-around'>
                <Grid item>
                    <Grid container className={classes.sectionStyle} spacing={2} alignItems='center'>
                        <Grid item>
                            <PlayCircleFilledRoundedIcon  className={classes.iconStyle}/>
                        </Grid>
                        <Grid item>
                            <Typography variant='h5'><strong>LEARN IN-DEMAND SKILLS</strong></Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container className={classes.sectionStyle} spacing={2} alignItems='center'>
                        <Grid item>
                            <StarsRoundedIcon className={classes.iconStyle} />
                        </Grid>
                        <Grid item>
                            <Typography variant='h5'><strong>GET GINUIEN AND AUTHENTIC COURSES</strong></Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <Grid container className={classes.sectionStyle} spacing={2} alignItems='center'>
                        <Grid item>
                            <ShareRoundedIcon className={classes.iconStyle} />
                        </Grid>
                        <Grid item>
                            <Typography variant='h5'><strong>HELP OTHERS TO GROW</strong></Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
}

export default Banner;
