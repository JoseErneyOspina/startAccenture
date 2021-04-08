import { makeStyles, createStyles } from '@material-ui/core';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() =>
    createStyles({
        logoStyle: {
            height: '70px',
        }
    })
);

const Logo = () => {
    const classes = useStyles();
    return (
        <Link to="/">
            <img 
                className={classes.logoStyle}
                src='https://gratitudfuneraria.com/wp-content/uploads/2017/07/corporacion-minuto-de-dios.jpg.png' 
                alt='Logo Corporaicón minuto de Dios'
            />
        </Link>
    )
}

export default Logo;