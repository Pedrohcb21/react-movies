import styled from "styled-components";
import { Link } from "react-router-dom" 

export const ButtonHomeStyle = styled(Link) `
        button {
            text-decoration: none;
            background-color: red;
            color: #fff;
            margin-top: 16px;
            padding: 1vw;
            border-radius: 12px;
            font-size: 0.5em;
        }

        button:hover {
            background-color: transparent;
            cursor: pointer;
        }
`