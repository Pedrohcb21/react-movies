import { Card } from '../../components/card/Card';
import { Footer } from '../../components/footer/Footer';
import { MainContainer } from './HomeStyle';
import background from '../../assets/imgs/background.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Search } from '../search/Search';

export function Home() {
    
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const getSearch = (e) => {
        e.preventDefault();
        console.log(search)
        
        if(search) { return navigate(`/Search?query=${search}`) };
        setSearch("");
    };
    
    return (
        <MainContainer>
            <img className="background" src={background} 
            alt="imagem Fullflix" 
            />

            <form onSubmit={getSearch} id="form" action="">
                <input id="filme" 
                type="text"
                onChange={(e)=>setSearch(e.target.value)}
                value={search}
                />
                <input type="submit"/>
            </form>

            <h1>Filmes populares</h1>

            <Card/>

            <Footer/>
        </MainContainer>
    );
};