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
        signUp_Form__FieldSize: {
            width: '100%',
            margin: '8px',
            [theme.breakpoints.down('xs')]: {
                minWidth: 290,
                display: 'flex',
                width: '100%',
                margin: '0px 0px 8px 0px',
            },
        },
        buttonAlign: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    })
);

const SignIn = () => {

    const classes = useStyles();

    return (
        <Grid container>
            <Grid container item className={classes.signIn_Avatar}>
                <Avatar className={classes.signIn_AvatarStyle}>
                    <LockOutlinedIcon />
                </Avatar>
            </Grid>
            <Grid container item className={classes.signIn_Avatar}>
                <h3>Iniciar sesión</h3>
            </Grid>
            <Grid container item className={classes.signIn_Form}>
                <FormGroup>
                    <MainTextField
                        label="Correo electronico"
                        className={classes.signUp_Form__FieldSize}
                    />
                    <PasswordField 
                        label="Contraseña"
                        name="password"
                        className={classes.signUp_Form__FieldSize}
                    />
                    <Link to="/users" className={`${classes.buttonAlign}`}>
                        <MainIconButton 
                            name="Ingresar"
                        />
                    </Link>
                </FormGroup>
            </Grid>
            <Grid container item className={classes.signIn_signUp}>
                <p>¿No tienes una cuenta aún?</p>
            </Grid>
            <Grid container item className={classes.signIn_signUp}>
                <Link to="/registrarse">
                    <MainIconButton 
                        name="Registrate"
                    />
                </Link>
            </Grid>
        </Grid>
    )
}

export default SignIn;