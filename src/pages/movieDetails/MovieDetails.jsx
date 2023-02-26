import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails } from '../../assets/api/api';
import { ButtonHome } from '../../components/buttonHome/ButtonHome';
import { Footer } from '../../components/footer/Footer';
import { MovieDetailsContainer } from './MovieDetailsStyle';
import { BsGraphUp,
         BsWallet2, 
         BsHourglassSplit,
         BsFillFileEarmarkTextFill,
         BsFillCalendarCheckFill,
         BsStar
} from "react-icons/bs";


export function MovieDetails() {
    const BaseURL = "https://api.themoviedb.org/3/movie/";
    const ApiKey = "api_key=c04907158a41e251ce886efdd556ccb5"
    const imagePath = 'https://image.tmdb.org/t/p/w500';

    const [movieState, setMovieState] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        const urlMovie = `${BaseURL}${id}?${ApiKey}`;
        getDetails(urlMovie, setMovieState);
    }, [id])
    
    const dolar = (number) => {
        return number.toLocaleString("en-us", {
            style: "currency",
            currency: "USD",
        });
    };

    return (
        <div>
            <MovieDetailsContainer>
                {movieState && (
                    <div>
                        <img src={`${imagePath}${movieState.poster_path}`} 
                        alt={movieState.title} 
                        />
                        
                        <p className="text"><BsStar/> {movieState.vote_average}</p>

                        <h2><BsFillFileEarmarkTextFill/> Sinopse: </h2>
                        <p className="text">{movieState.overview}</p>

                        <h2><BsHourglassSplit/> Duração: </h2>
                        <p className="text">{movieState.runtime} minutos</p>

                        <h2><BsFillCalendarCheckFill/> Data de lançamento: </h2>
                        <p className="text">{movieState.release_date}</p>

                        <h2><BsWallet2/> Orçamento: </h2>
                        <p className="text">{dolar(movieState.budget)}</p>

                        <h2><BsGraphUp/> Receita: </h2>
                        <p className="text">{dolar(movieState.revenue)}</p>
                    </div>
                )} 
                <ButtonHome/>
            </MovieDetailsContainer>
            <Footer/>
        </div>
    );
};