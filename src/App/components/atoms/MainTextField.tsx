import React from 'react';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, createStyles, makeStyles, Theme, TextField } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
        display: 'flex',
        flexWrap: 'wrap',
        },
        margin: {
        margin: theme.spacing(1),
        },
        withoutLabel: {
        marginTop: theme.spacing(3),
        },
        textField: {
        width: '25ch',
        },
        textField_margin:{
            marginTop: 20,
        }
    }),
);

interface Iprops {
    className?: any;
    label: string;
    id?: string;
}

const MainTextField = (props: Iprops) => {

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    
    const classes = useStyles();

    return (
            <TextField
                id={props.id}
                label={props.label}
                variant="outlined"
                className={`${props.className}`}
            />
    )
}

export default MainTextField;