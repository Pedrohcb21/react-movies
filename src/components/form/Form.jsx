// import { getSearch } from "../../assets/api/api";
import { useEffect } from "react";
import { useState } from "react"
import { getSearch } from "../../assets/api/api";

export function Search () {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
       getSearch(setFilmes); 
    },[]);

    return (
        <div>
            {filmes.map((filme) => {
                return (
                    <div>
                        <p>{filme.title}</p>
                    </div>
                )
            })};
        </div>
    )
};    