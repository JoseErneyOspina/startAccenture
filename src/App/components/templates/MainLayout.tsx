import React, { Fragment } from 'react'
import NavBar from '../organisms/NavBar';
import { theme } from '../../../styles/theme';
import { makeStyles, createStyles, ThemeProvider } from '@material-ui/core';


const useStyles = makeStyles(() =>
    createStyles({
        root: {
        boxSizing: 'border-box',
        },
        main: {
            display: "flex",
            marginTop: 60,
            marginBottom: 30,
            justifyContent: "center",
            alignItems: "center",
        }
    })
);

const MainLayout =  (props: { children: any }) => {

    const classes = useStyles();
    
    return (
        <Fragment>
            <ThemeProvider theme={theme}>
                <header>
                    <NavBar />
                </header>
                <main className={classes.main}>
                    {props.children}
                </main>
            </ThemeProvider>
        </Fragment>
    )
}

export default MainLayout;