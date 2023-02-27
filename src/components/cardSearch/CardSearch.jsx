import { MainContainerCard } from "../cardHome/CardStyle";
import { BsStar } from "react-icons/bs"



export function CardSearch ({movies, imagePath}) {
    return (
        <div>
            {movies.map((movie) => {
                return (
                    <MainContainerCard to= {`/MovieDetails/${movie.id}`}>
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