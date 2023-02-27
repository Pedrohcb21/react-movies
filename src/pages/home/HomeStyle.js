import styled from "styled-components";

export const MainContainer = styled.div `
    height: fit-content;
    background-color: #000;
    font-size: 2vw;
    font-weight: 500;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10vh;
    
    color: #fff;

    .background {
        width: 100%;
        height: fit-content;
    }

    h1 {
        color: #fff;
        text-decoration: underline red;
        font-size: 1.5em;
    }

    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 32px;

        margin: 1vw;
    }

    .search {
        width: 50vw;
        height: 4vh;

        padding-left: 12px;
        font-size: 0.5em;

        border-radius: 16px;
        border-style: none;
        border: 1px solid #fff;
        outline: 0;

        color: #fff;
        background-color: #000;
    }

    .search:hover {
        border: 2px solid red;
        opacity: 0.5;
    }
    
    .BtnSearch {
        padding: 6px;
        margin-left: 8px;
        border-radius: 16px;
        font-size: 1vw;
        color: #fff;
        background-color: #000;
        border: 2px solid #fff;
        cursor: pointer;
    }

    .BtnSearch:hover {
        border: 2px solid red;
        opacity: 0.5;
    }
`