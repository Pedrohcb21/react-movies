import { Home } from '../../pages/home/Home';
import { MovieDetails } from '../../pages/movieDetails/MovieDetails';
import { NotFound } from '../../pages/erros/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}></Route>
                <Route path="/MovieDetails" element={<MovieDetails/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};