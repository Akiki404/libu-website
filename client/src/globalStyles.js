import { Link } from 'react-router-dom'

import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Fira Code', monospace;
    }
    `

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 50px;

    @media screen and (max-width: 991px) {
        padding: 0 30px;
    }
    `
 
export const Anchor = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    color: #101522;

    &:hover {
        color: #fc6e20;
    }
 `

export default GlobalStyle