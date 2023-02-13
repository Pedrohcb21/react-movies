import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ButtonHome } from '../../components/buttonHome/ButtonHome';
import { Footer } from '../../components/footer/Footer';
import { MovieDetailsContainer } from './MovieDetailsStyle';


export function MovieDetails() {
    const movieState = useSelector((state) => state.fullflix.movie)
    
    useEffect(() => {
        console.log(movieState);
    })

    return (
        <MovieDetailsContainer>
            <img src={`https://image.tmdb.org/t/p/w500/${movieState.poster_path}`} 
            alt={movieState.tile} 
            />

            <div>
                <p>Título: {movieState.title}</p>
                <p>Sinopse: {movieState.overview}</p>
                <p>data de lançamento: {movieState.release_date}</p>
                <p>popularidade: {movieState.popularity}</p>
                <p>Nota: {movieState.vote_average}</p>
            </div>

            <ButtonHome/>

            <Footer/>
                
        </MovieDetailsContainer>
    );
};