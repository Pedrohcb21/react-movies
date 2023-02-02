import axios from 'axios';

export const getList = (setState) => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c04907158a41e251ce886efdd556ccb5&language=pt-BR&page=1`)
    .then((response)=>{
        setState(response.data.results)
    }).catch((err)=>{
        console.log(err)
    })
};