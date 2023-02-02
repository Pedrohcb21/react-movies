

export function Card({movie, imagePath}) {
    return (
        <div className='card'>
            <img src={`${imagePath}${movie.poster_path}`} alt={`Imagem do filme ${movie.title}`}></img>
            <span>{movie.title}</span>
        </div>
    );
};