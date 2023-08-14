import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: colors.yellow[600],
      // dark: '#EC9B3B'
      dark: colors.yellow[900],
    },
    secondary: {
      main: colors.grey[900],
    },
  },
});

export default theme;
