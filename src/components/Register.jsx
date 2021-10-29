import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, Grid, makeStyles, Switch, TextField, Typography } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import React, {useRef} from 'react'

const useStyle = makeStyles(() => ({
    textStyle: {
        width: '100%'
    },
    btnStyle: {
        backgroundColor: "#00850d",
        color: '#FFF',
        '&:hover': {
            backgroundColor: "#006e0b"
        },
        width: "100%"
    },
    lgnStyle: {
        color: "#776CF2"
    }
}));

function Register(props) {
    const classes = useStyle();
    const emailRef = useRef()
    const passwordRef = useRef()
    const passConfirmRef = useRef()


    const [open, setOpen] = React.useState(false);
    const [login, setLogin] = React.useState(false);
    const fullWidth = true
    const maxWidth = 'sm'

    const handleLogin = () => {
        setLogin(true);
    };

    const handlCreate = () => {
        setLogin(false);
    };

    return (
        <div>

            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={props.open}
                onClose={props.handleClose}
            >


                {!login ?

                    <><DialogTitle><Typography variant='h5'>Regster and start learning!</Typography></DialogTitle><DialogContent>
                        <DialogContentText>
                            <form onSubmit={() => {}}>
                                <Grid container direction='column' spacing={4}>
                                    <Grid item>
                                        <FormControl><TextField ref={emailRef} className={classes.textStyle} id="outlined-basic" placeholder="Enter Email Address" variant="outlined" /></FormControl>
                                        </Grid>
                                    <Grid item><TextField ref={passwordRef} className={classes.textStyle} id="outlined-basic" placeholder="Enter Password" variant="outlined" /></Grid>
                                    <Grid item><TextField ref={passConfirmRef} className={classes.textStyle} id="outlined-basic" placeholder="Confirm Password" variant="outlined" /></Grid>
                                    <Grid item><Button className={classes.btnStyle}>Register</Button></Grid>
                                    <Grid item>Already have an account?<Button className={classes.lgnStyle} onClick={handleLogin} ><u>Log In</u></Button></Grid>
                                </Grid>
                            </form>
                        </DialogContentText>
                    </DialogContent><DialogActions>
                            <Button {...props}>Close</Button>
                        </DialogActions></>

                    :

                    <><DialogTitle>Login to your CERTICOURSE Account</DialogTitle><DialogContent>
                        <DialogContentText>
                            <Grid container direction='column' spacing={4}>
                                <Grid item><TextField className={classes.textStyle} id="outlined-basic" placeholder="Enter Email Address" variant="outlined" /></Grid>
                                <Grid item><TextField className={classes.textStyle} id="outlined-basic" placeholder="Enter Password" variant="outlined" /></Grid>
                                <Grid item><Button type='submit' className={classes.btnStyle}>Log In</Button></Grid>
                                <Grid item>Don't have an account?<Button className={classes.lgnStyle} onClick={handlCreate} ><u>Register</u></Button></Grid>
                            </Grid>
                        </DialogContentText>
                    </DialogContent><DialogActions>
                            <Button {...props}>Close</Button>
                        </DialogActions></>
                }

            </Dialog>


            {/* 
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={props.open}
                onClose={props.handleClose}
            >
                <DialogTitle>Login yourself</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Grid container direction='column' spacing={4}>
                            <Grid item><TextField className={classes.textStyle} id="outlined-basic" placeholder="Enter Email Address" variant="outlined" /></Grid>
                            <Grid item><TextField className={classes.textStyle} id="outlined-basic" placeholder="Enter Password" variant="outlined" /></Grid>
                            <Grid item><Button className={classes.btnStyle} >Log In</Button></Grid>
                            <Grid item>Already have an account? <Button className={classes.lgnStyle}><u>Log In</u></Button></Grid>
                        </Grid>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button {...props}>Close</Button>
                </DialogActions>
            </Dialog> */}


        </div>
    )
}

export default Register;
