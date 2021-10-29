import { Grid, makeStyles } from '@material-ui/core';
import React from 'react'
import Typed from 'react-typed';
import heroImg2 from '../assets/ggg.jpg';

const useStyles = makeStyles(() => ({
    divStyle: {
        backgroundImage: `url(${heroImg2})`,
        height: '30em',
        backgroundSize: "cover",
        paddingBottom:"6rem",
        display:'flex'
    },
    typeStyle: {
        color: '#FFF',
        fontSize: '4rem',
        fontWeight: 'bold'
    },
}))

function Hero() {
    const classes = useStyles();
    return (
        <div className={classes.divStyle}>
            <Grid container direction='row' alignItems='flex-end' justifyContent='center'>
                <Grid item md={12}></Grid>
                <Grid item md={9}>
                    <Grid container >                        
                        <Grid item md={12}>
                            <Typed className={classes.typeStyle}
                                strings={[
                                    'Learn new Technologies.',
                                    'Learn from plenty of categories.',
                                    'Upgrade your Skills.']}
                                typeSpeed={60}
                                backSpeed={70}
                                loop
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


        </div>
    )
}

export default Hero;
