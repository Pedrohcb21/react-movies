import axios from 'axios';

const BaseURL = "https://api.themoviedb.org/3/movie";
const UrlSearch = `https://api.themoviedb.org/3/search/movie?api_key=`
const ApiKey = "api_key=c04907158a41e251ce886efdd556ccb5";

export const getList = (setState) => {
    axios.get(`${BaseURL}/popular?${ApiKey}&language=pt-BR`)
    .then((response)=>{
        setState(response.data.results)
    }).catch((err)=>{
        console.log(err)
    })
};

export const getDetails = async(id, setDetail) => {
    axios.get(`${BaseURL}/${id}?${ApiKey}&language=pt-BR`)
    .then((response) => {
        setDetail(response.data);
    }).catch((err) => {
        console.error(err)
    })
};

export const getSearchMovie = (query) => {
    axios.get(`${UrlSearch}${ApiKey}&query=${query}`)
            .then((response) => {
                console.log(response);
            }).catch((err) => {
                console.error(err);
            })
};