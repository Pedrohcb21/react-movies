import { MainContainerCard } from './CardStyle';
import { useEffect, useState } from 'react';
import { getList } from '../../assets/api/api';
import { BsStar } from "react-icons/bs"

export function CardHome() {
    const imagePath = 'https://image.tmdb.org/t/p/w500';

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getList(setMovies);        
    },[]);

    return (
        <div>
            {movies.map((movie) =>{
                return (
                    <MainContainerCard to={`MovieDetails/${movie.id}`}>
                        <img 
                        src={`${imagePath}${movie.poster_path}`} 
                        alt={`Imagem do filme ${movie.title}`}>   
                        </img>
                        <p><BsStar/></p>
                        <p>{movie.vote_average}</p>
                    </MainContainerCard>   
                );
            })}
        </div>    
    );
};

