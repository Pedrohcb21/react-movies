import axios from 'axios';

const BaseURL = "https://api.themoviedb.org/3/movie";
const ApiKey = "api_key=c04907158a41e251ce886efdd556ccb5";

export const getList = (setState) => {
    axios.get(`${BaseURL}/popular?${ApiKey}&language=pt-BR&page=20`)
    .then((response)=>{
        setState(response.data.results)
    }).catch((err)=>{
        console.log(err)
    })
};

export const getDetails = async(urlMovie, setMovieState) => {
    axios.get(`${urlMovie}&language=pt-BR`)
    .then((response) => {
        setMovieState(response.data);
    }).catch((err) => {
        console.error(err)
    })
};

export const getSearchMovie = (url, setMovies) => {
    axios.get(`${url}&language=pt-BR`)
            .then((response) => {
                setMovies(response.data.results);
            }).catch((err) => {
                console.error(err);
            })
};