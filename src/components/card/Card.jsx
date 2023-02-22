import { useEffect, useState } from 'react';
import { getDetails, getList } from '../../assets/api/api';
import { useDispatch } from 'react-redux';
import { MainContainerCard } from './CardStyle';
import { getMovieInfo } from '../../assets/redux/FullflixSlice';

export function Card() {
    const [movies, setMovies] = useState([]);
    const imagePath = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        getList(setMovies);        
    },[]);

    const [detail, setDetail] = useState();
    const dispatch = useDispatch();

    const Hover = async(e) => {
        getDetails(e.target.id, setDetail);
    }

    useEffect(() => {
        dispatch(getMovieInfo(detail));
    },[detail]);

    return (
        <div>
            {movies.map((movie) =>{
                return (
                    <MainContainerCard to="/MovieDetails" onMouseEnter={Hover} id={movie.id}>
                        <img 
                        src={`${imagePath}${movie.poster_path}`} 
                        alt={`Imagem do filme ${movie.title}`}>   
                        </img>
                        <p>{movie.title}</p>
                        <p>{movie.vote_average}</p>
                    </MainContainerCard>   
                );
            })}
        </div>    
    );
};

