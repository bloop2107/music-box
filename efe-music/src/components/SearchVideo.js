import {useState} from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SearchInput from './SearchInput'
import youtube from '../youtubeapi/youtube';
import ResultVideos from './ResultVideos';




const SearchVideo = ({classes,handleMainVideo}) => {

    const [searchResults,setSearchResults] = useState([]);

    const onVideoSearch = (value) => {
        if(value){
            const res = youtube.get(`https://api.yt.red.rave.dj/yt/search/video?search_query=${value}`).then(function(res){
                    setSearchResults(res.data.results);
            })
            
        }
    };

    const handleResult = (res) => {
        setSearchResults([]);
        handleMainVideo(res)
    }


    return (
        <Grid item xs={4}>
            <Paper  className={classes.paper}>
                <SearchInput onVideoSearch={onVideoSearch} searchResults={searchResults} />
                <ResultVideos searchResults={searchResults} res={handleResult}/>
            </Paper>
        </Grid>
    )
}

export default SearchVideo
