import {combineReducers} from 'redux';


const songsReducer = () => {
    return [
        {title: 'Happy Now', duration: '3:52'},
        {title: 'Wake me up', duration: '4:02'},
        {title: 'Losing Keys', duration: '2:57'},
        {title: 'Changing', duration: '2:41'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});