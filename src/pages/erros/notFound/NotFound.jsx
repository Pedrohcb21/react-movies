import { ButtonHome } from '../../../components/buttonHome/ButtonHome';
import { NotFoundConatiner } from './NotFoundStyle';

export function NotFound() {
    return (
        <NotFoundConatiner>
             <h1>Página não encontrada - erro 404</h1>

             <ButtonHome/>
        </NotFoundConatiner>
    );
};