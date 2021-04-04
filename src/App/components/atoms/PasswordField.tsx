import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { TextField, FormHelperText, InputAdornment } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        passwordInput: {
            marginTop: 10,
        }
    }),
);

interface Iprops {
    onChange?: (e: any, step?: string) => void;
    label: string;
    name: string;
    value?: string;
    margin?: any;
    error?: string;
    pattern?: string;
    className?: string;
}

const PasswordField = (props: Iprops) => {
    const classes = useStyles();
    const { value, onChange, name, error, label, margin, className} = props;
    const [showPassword, setShowPassword] = useState(false);
    const [currentType, setCurrentType] = useState('password');

    const handleClickShowPassword = () => {
        if (currentType === 'password') {
        setCurrentType('text')
        }
        else if (currentType === 'text') {
        setCurrentType('password')
        }
        setShowPassword(prevState => !prevState);
    };

    const endAdornment = {
        endAdornment: (
        <InputAdornment position='end'>
            <IconButton
            aria-label='toggle password visibility'
            onClick={handleClickShowPassword}
            edge='end'
            >
            {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
        </InputAdornment>
        )
    };

    return (
        <Fragment>
            <TextField
                error={error !== ""}
                onChange={onChange}
                variant="outlined"
                margin={margin}
                fullWidth
                name={name}
                label={label}
                type={currentType}
                value={value}
                size="medium"
                autoComplete='off'
                InputProps={endAdornment}
                className={className}
            />
            <FormHelperText id='outlined-weight-helper-text' style={{ color: 'red' }}>
                {error}
            </FormHelperText>
        </Fragment>
    );
}

export default PasswordField;