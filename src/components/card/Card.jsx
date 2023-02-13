import { useEffect, useState } from 'react';
import { getDetails } from '../../assets/api/api';
import { useDispatch } from 'react-redux';
import { MainContainerCard } from './CardStyle';
import { getMovieInfo } from '../../assets/redux/FullflixSlice';

export function Card({movie, imagePath}) {
    const [detail, setDetail] = useState();
    const dispatch = useDispatch();

    const Hover = async(e) => {
        getDetails(e.target.id, setDetail)
    }

    useEffect(() => {
        dispatch(getMovieInfo(detail));
    });

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
};