import axios from 'axios';

const BaseURL = "https://api.themoviedb.org/3/movie";
const ApiKey = "api_key=c04907158a41e251ce886efdd556ccb5";

export const getList = (setState) => {
    axios.get(`${BaseURL}/popular?${ApiKey}&language=pt-BR&page=1`)
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