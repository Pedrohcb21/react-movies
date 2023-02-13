import { Link } from "react-router-dom";
import styled from "styled-components";


export const MainContainerCard = styled(Link) `
    width: 20vw;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 12px;

    color: #fff;
    border: 2px solid #fff;

    :hover {
        border-color: red;
    }

    img {
        width: 90%;
    }
`