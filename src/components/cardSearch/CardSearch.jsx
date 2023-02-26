import { MainContainerCard } from "../cardHome/CardStyle";


export function CardSearch ({movies, imagePath}) {
    return (
        <div>
            <h1>Resultados para a pesquisa: </h1>

            {movies.map((movie) => {
                return (
                    <MainContainerCard to= {`/MovieDetails/${movie.id}`}>
                        <img 
                        src={`${imagePath}${movie.poster_path}`} 
                        alt={`Imagem do filme ${movie.title}`}>   
                        </img>
                        <p>{movie.title}</p>
                        <p>{movie.vote_average}</p> 
                    </MainContainerCard>
                )
            })}
        </div>
    )
}