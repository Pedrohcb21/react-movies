import styled from "styled-components";

export const MovieDetailsContainer = styled.div `
    background-color: #000;
    color: #fff;
    font-size: 2vw;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 12px;

    div {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    button {
        text-decoration: none;
        background-color: red;
        color: #fff;
        padding: 1vw;
        border-radius: 12px;
        font-size: 0.5em;
    }

    button:hover {
        background-color: transparent;
        cursor: pointer;
    }
`