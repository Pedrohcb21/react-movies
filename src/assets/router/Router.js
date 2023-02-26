import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from '../../pages/home/Home';
import { MovieDetails } from '../../pages/movieDetails/MovieDetails';
import { Search } from "../../pages/search/Search";
import { NotFound } from '../../pages/erros/notFound/NotFound';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}></Route>
                <Route path="MovieDetails/:id" element={<MovieDetails/>}></Route>
                <Route path="Search" element={<Search/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};