import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export function Search () {
    const UrlSearch = `https://api.themoviedb.org/3/search/movie?`;
    const ApiKey = "api_key=c04907158a41e251ce886efdd556ccb5";
    const imagePath = 'https://image.tmdb.org/t/p/w500';

    const [searchParams] = useSearchParams();

    const query = searchParams.get("query");

    const [movies, setMovies] = useState([]);

    const getSearchMovie = async(url) => {
        axios.get(`${url}`)
                .then((response) => {
                    console.log(response.data.results);
                    setMovies(response.data.results);
                }).catch((err) => {
                    console.error(err);
                })
    };

    useEffect(() => {
        const getSearchUrl = `${UrlSearch}${ApiKey}&query=${query}`;

        getSearchMovie(getSearchUrl);

        console.log(query)
    }, [query])

    return (
        <div>
            {movies.map((i) => {
                return (
                    <div>
                        <img 
                        src={`${imagePath}${i.poster_path}`} 
                        alt={`Imagem do filme ${i.title}`}>   
                        </img>
                        <p>{i.title}</p>
                        <p>{i.vote_average}</p>   
                    </div>
                )
            })}
        </div>
    )
};