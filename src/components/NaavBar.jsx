import React from 'react'
import { Button, Grid, makeStyles } from '@material-ui/core';
import Register from './Register';
import logo from '../assets/logof.png';


const useStyles = makeStyles(() => ({
    NavStyle: {
        backgroundColor: '#f2f2f2',
    },
    logoStyle: {
        height: '2.5rem'
    },
    btnStyle: {
        fontSize: '1rem',
        width: "auto",
        fontWeight: 'bold'
    },
}));

function NaavBar() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseClick = () => {
        setOpen(false);
    };

    return (
        <div>
            <Grid container direction='row' justifyContent='space-between' alignItems='center' className={classes.NavStyle}>
                <Grid item md={1}></Grid>
                <Grid item md={10}>
                    <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                        <Grid item md={2}>
                            <Button>
                                <img src={logo} alt="logo" className={classes.logoStyle} />
                            </Button>
                        </Grid>
                        <Grid item md={6}>
                            <Grid container justifyContent='space-around' >
                                <Grid item>
                                    <Button className={classes.btnStyle}>About us</Button>
                                </Grid>
                                <Grid item>
                                    <Button className={classes.btnStyle}>Contact us</Button>
                                </Grid>
                                <Grid item>
                                    <Button className={classes.btnStyle} onClick={() => { handleOpen() }} >Login / Register</Button>
                                    <Register open={open} onChange={handleClose} onClick={() => { handleCloseClick() }} />
                                </Grid>
                            </Grid>


                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={1}></Grid>
            </Grid>
        </div >
    )
}

export default NaavBar
