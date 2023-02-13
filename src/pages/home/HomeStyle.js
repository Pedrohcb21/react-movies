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

    .background {
        width: 100%;
        height: fit-content;

    }

    h1 {
        color: #fff;
        text-decoration: underline red;
    }

    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 32px;

        margin: 1vw;
    }
`