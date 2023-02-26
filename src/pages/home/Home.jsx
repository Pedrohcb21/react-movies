import background from '../../assets/imgs/background.png';
import { CardHome } from '../../components/cardHome/CardHome';
import { Footer } from '../../components/footer/Footer';
import { FormSearch } from '../../components/formSearch/FormSearch';
import { MainContainer } from './HomeStyle';

export function Home() {      
    return (
        <MainContainer>
            <img className="background" src={background} 
            alt="imagem Fullflix" 
            />

            <FormSearch/>

            <h1>Filmes populares</h1>

            <CardHome/>

            <Footer/>
        </MainContainer>
    );
};