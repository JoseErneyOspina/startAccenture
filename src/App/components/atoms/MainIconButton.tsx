import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import React from 'react';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
        margin: theme.spacing(1),
        },
    }),
);

interface Iprops {
    name: string;
}

const MainIconButton = (props: Iprops) => {

    const classes = useStyles();

    return(
        <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<ChevronRightOutlinedIcon/>}
        >
        {props.name}
        </Button>
    )
}

export default MainIconButton;