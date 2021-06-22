import { createMuiTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';


const theme = createMuiTheme({
    palette: {
      primary: orange,
      type: "dark",
      input: {
          border: orange
      }
    },
    overrides:{
      MuiCssBaseline: {
        '@global': {
          '*::-webkit-scrollbar': {
            width: '0.4em'
          },
          '*::-webkit-scrollbar-track': {
              boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
              webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(239,127,15,1)',
            // outline: '1px solid slategrey'
          },
          '*::.MuiOutlinedInput-notchedOutline': {
              borderColor: orange,
          },
          '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                  borderColor: orange
              }
          }
        },
      }
    },
});

export default theme