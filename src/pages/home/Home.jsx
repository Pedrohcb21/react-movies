import { useState, useEffect } from 'react';
import { getList } from '../../assets/api/api'
import { Card } from '../../components/card/Card';
import { Footer } from '../../components/footer/Footer';
import { MainContainer } from './HomeStyle';
import background from '../../assets/imgs/background.png';

export function Home() {
    const [movies, setMovies] = useState([]);
    const imagePath = 'https://image.tmdb.org/t/p/w500';
    
    useEffect(() => {
        getList(setMovies);
    },[]);

    return (
        <MainContainer>
            <img className="background" src={background} 
            alt="imagem Fullflix" 
            />

            <h1>Filmes populares</h1>

            <div>
                {movies.map((movie) =>{
                    return (
                        <div>
                            <Card movie={movie} imagePath={imagePath}/>
                        </div>
                    );
                })}
            </div>

            <Footer/>
        </MainContainer>
    );
};