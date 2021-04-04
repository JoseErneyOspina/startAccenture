import { Avatar, createStyles, FormGroup, Grid, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react'
import PasswordField from '../atoms/PasswordField'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import MainTextField from '../atoms/MainTextField';
import MainIconButton from '../atoms/MainIconButton';
import { theme } from '../../../styles/theme';

const useStyles = makeStyles(() =>
    createStyles({
        signIn_Form: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: 20,
        },
        signIn_Avatar: {
            display: 'flex',
            justifyContent: 'center',
        },
        signIn_AvatarStyle: {
            backgroundColor: '#00376B',
        },
        signIn_signUp: {
            display: 'flex',
            justifyContent: 'center',
        },
        linkDecorations: {
            textDecoration: 'none',
        },
        signUp_Form__GContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0,
            padding: 0,
            [theme.breakpoints.down('xs')]: {
                maxWidth: 300,
            },
        },
        signUp_Form__CItem:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: 290,
        },
        signUp_Form__FieldSize: {
            width: '100%',
            margin: '8px',
            [theme.breakpoints.down('xs')]: {
                minWidth: 290,
                display: 'flex',
                width: '100%',
                backgroundColor: 'red',
                margin: '0px 0px 8px 0px',
            },
        }
    })
);

const SignUp = () => {

    const classes = useStyles();

    return (
        <Grid container>
            <Grid container item className={classes.signIn_Avatar}>
                <Avatar className={classes.signIn_AvatarStyle}>
                    <LockOutlinedIcon />
                </Avatar>
            </Grid>
            <Grid container item className={classes.signIn_Avatar}>
                <h3>Registrarse</h3>
            </Grid>
            <Grid container item className={classes.signIn_Form}>
                <FormGroup>
                    <Grid container sm={12} xs={12} className={classes.signUp_Form__GContainer}>
                        <Grid item sm={6} xs={12} className={classes.signUp_Form__CItem}>
                            <MainTextField 
                                label="Nombres"
                                className={classes.signUp_Form__FieldSize}
                            />
                        </Grid>
                        <Grid item sm={6} xs={12} className={classes.signUp_Form__CItem}>
                            <MainTextField 
                                label="Apellidos"
                                className={classes.signUp_Form__FieldSize}
                            />
                        </Grid>                       
                    </Grid>
                    <Grid container sm={12} xs={12} className={classes.signUp_Form__GContainer}>
                        <Grid item sm={6} xs={12} className={classes.signUp_Form__CItem}>
                            <MainTextField 
                                label="Dirección"
                                className={classes.signUp_Form__FieldSize}
                            />
                        </Grid>
                        <Grid item sm={6} xs={12} className={classes.signUp_Form__CItem}>
                            <MainTextField 
                                label="Telefono"
                                className={classes.signUp_Form__FieldSize}
                            />
                        </Grid>                       
                    </Grid>
                    <Grid container sm={12} xs={12} className={classes.signUp_Form__GContainer}>
                        <Grid item sm={6} xs={12} className={classes.signUp_Form__CItem}>
                            <MainTextField 
                                label="Cargo"
                                className={classes.signUp_Form__FieldSize}
                            />
                        </Grid>
                        <Grid item sm={6} xs={12} className={classes.signUp_Form__CItem}>
                            <MainTextField 
                                label="Area"
                                className={classes.signUp_Form__FieldSize}
                            />
                        </Grid>                       
                    </Grid>
                    <Grid container sm={12} xs={12} className={classes.signUp_Form__GContainer}>
                        <Grid item sm={12} xs={12} className={classes.signUp_Form__CItem}>
                            <MainTextField 
                                label="Correo electronico"
                                className={classes.signUp_Form__FieldSize}
                            />
                        </Grid>
                        <Grid item sm={12} xs={12} className={classes.signUp_Form__CItem}>
                            <PasswordField 
                                label="Contraseña"
                                name="password"
                                className={classes.signUp_Form__FieldSize}
                            />
                        </Grid>                       
                    </Grid>
                    <MainIconButton 
                        name="Registrarse"
                    />
                </FormGroup>
            </Grid>
            <Grid container item className={classes.signIn_signUp}>
                <p>¿Ya tienes una cuenta?</p>
            </Grid>
            <Grid container item className={classes.signIn_signUp}>
                <Link to="/" className={classes.linkDecorations}>
                    <MainIconButton 
                        name="Iniciar sesión"
                    />
                </Link>
            </Grid>
        </Grid>
    )
}

export default SignUp;