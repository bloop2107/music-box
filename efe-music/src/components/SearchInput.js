import {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import jsonp from 'jsonp';

const theme = createMuiTheme({
    palette: {
      primary: orange,
      type: "dark"
    },
  });

const useStyle = makeStyles({
    root: {
        '& label.Mui-focused': {
            color: orange,
          },
    }
})


const options = ['Option 1', 'Option 2'];


const SearchInput = () => {
    const useClass = useStyle();
    const [value, setValue] = useState('');
    const [optionsSearch,setOptionsSearch] = useState([]);

    const fetchSearchResults = (term) => {
        jsonp(
          `https://clients1.google.com/complete/search?client=youtube&hl=en&ds=yt&q=${term}`,
          null,
          function (err, data) {
            if (err) {
              console.error(err.message);
            } else {
                setOptionsSearch(data[1].map(item => item[0]));
            }
          }
        );
    };

    const handleOnKeyUp = (e) => {
        fetchSearchResults(e.target.value);
    }

    console.log(optionsSearch);

    
    return (
        <ThemeProvider theme={theme}>
            <Autocomplete 
                className={useClass.root}
                value={value}
                onKeyUp = {handleOnKeyUp}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
                id="controllable-states-demo"
                options={optionsSearch}
                getOptionSelected={(option, value) => option.description === value.description}
                renderInput={(params) => <TextField {...params} className={useClass.root} label="Search Youtube Video" id="input-with-icon-adornment" variant="outlined"
                />}
            />
        </ThemeProvider>
    )
}

export default SearchInput
