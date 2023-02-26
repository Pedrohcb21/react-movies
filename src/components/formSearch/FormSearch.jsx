import { useState } from 'react';
import { useNavigate, } from 'react-router-dom';
import { BiSearchAlt2 } from "react-icons/bi";

export function FormSearch () {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const getSearch = (e) => {
        e.preventDefault();
        
        if(search) { return navigate(`/Search?query=${search}`) };
        setSearch("");
    };

    return (
        <>
            <form onSubmit={getSearch}>
                <input
                type="text"
                onChange={(e)=>setSearch(e.target.value)}
                placeholder= "Pesquisar filmes"
                className= "search" 
                value={search}
                />
                <button type="submit">
                    <BiSearchAlt2/>
                </button>
            </form>
        </>
    )
}