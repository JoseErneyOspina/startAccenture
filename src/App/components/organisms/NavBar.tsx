import { AppBar, Toolbar, IconButton, createStyles, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import Logo from '../atoms/Logo';

const useStyles = makeStyles(() =>
    createStyles({
        navBar: {
            backgroundColor: '#fff',
            position: 'static',
        },
        navBar__space: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        navBar__icon: {
            color: '#00376B',
        }
    })
);

const NavBar = () => {

    const classes = useStyles();

    return (
        <AppBar className={classes.navBar}>
            <Toolbar className={classes.navBar__space}>
                <Logo />
                <IconButton>
                    <MenuIcon className={classes.navBar__icon}/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;