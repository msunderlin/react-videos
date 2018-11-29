import axios from 'axios';


const KEY = 'AIzaSyAHkAVSNk4nzr09Ty2t6AvRsX1ppORNj0U';
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        maxResults: 5,
        key:KEY
    }

});