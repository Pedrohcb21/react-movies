import { MainContainer } from "../home/HomeStyle";
import { FormSearch } from "../../components/formSearch/FormSearch";
import { CardSearch } from "../../components/cardSearch/CardSearch";
import { ButtonHome } from "../../components/buttonHome/ButtonHome";
import { Footer } from "../../components/footer/Footer";
import { getSearchMovie } from "../../assets/api/api";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function Search () {
    const ApiKey = "api_key=c04907158a41e251ce886efdd556ccb5";
    const imagePath = 'https://image.tmdb.org/t/p/w500';

    const [searchParams] = useSearchParams();

    const query = searchParams.get("query");

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const UrlSearch = `https://api.themoviedb.org/3/search/movie?`;
        const getSearchUrl = `${UrlSearch}${ApiKey}&query=${query}`;

        getSearchMovie(getSearchUrl, setMovies);
    }, [query])

    return (
        <MainContainer>
            <FormSearch/>

            <CardSearch movies={movies} imagePath={imagePath}/>

            <ButtonHome/>

            <Footer/>
        </MainContainer>
    )
};