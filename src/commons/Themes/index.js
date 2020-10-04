import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    color:{
        primary: "#D32F2F",
        secondary: "#00DCD4",
        error: "#E64A19"
    },
    typography:{
        fontFamily: "Roboto"
    },
    shape:{
        borderRadius: 4,
        background: "#7B1FA2",
        textColor: "#FFFFFF",
        border: "#CCCCC"
    }
});

export default theme;