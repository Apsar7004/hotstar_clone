import axios from "axios";

const base = "https://api.themoviedb.org/3/discover/movie?api_key="
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

const getTrendvideos = axios.get(base+apiKey)
const getmoviesbygener = (id)=>{
    return axios.get(base+apiKey+"&with_genres="+id)
}

export default {getTrendvideos,getmoviesbygener}