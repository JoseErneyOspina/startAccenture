import { createMuiTheme } from '@material-ui/core'

// Create a theme instance.
export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00376B',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#01C232',
            contrastText: '#ffffff'
        }
    },
    props: {
        MuiAvatar: {
            color: '#00376B'
        }
    },   
});