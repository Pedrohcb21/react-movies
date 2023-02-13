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
    padding-top: 2vh;

    div {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    img {
        border: 3px solid #fff;
    }
`