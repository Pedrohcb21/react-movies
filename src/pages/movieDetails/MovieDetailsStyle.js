import styled from "styled-components";

export const MovieDetailsContainer = styled.div `
    background-color: #000;
    color: #fff;

    padding: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* text-align: center; */

    div {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    img {
        align-self: center;
        width: 20%;
        border: 2px solid #fff;
        border-radius: 16px;
    }

    .text {
        font-size: 1.5vw;
    }
`