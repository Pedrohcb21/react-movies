import styled from "styled-components";

export const MainContainer = styled.div `
    height: 100vh;

    display: flex
    flex-direction: column;
    
    div{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 32px;
    }

    .card {
        display: flex;
        flex-direction: column;
    }
`