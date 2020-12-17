import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'

import { Container } from '../../globalStyles'


export const Nav = styled.div`
    background: #101522;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${Container}
    `;

export const NavLogo = styled(Link)`
    color: #ffba00;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    `
export const NavIcon = styled(FaUserAlt)`
    margin-right: .5rem;
    color: #ffba00 !important;
    `    

export const MobileIcon = styled.div`
    display: none;


    @media(max-width: 960px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media(max-width: 960px){
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({ click }) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all .5s ease;
        background: #101522;
    }
    `;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 2px solid #ffba00;
    }

    @media(max-width: 960px) {
        width: 100%;

        &:hover {
            border: none;
        }
    }
    `;

export const NavLink = styled(Link)`
    color: #ffba00;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: .5rem 1rem;
    height: 100%;

    @media(max-width: 960px) {
        text-align: center;
        padding: 2rem;
        justify-content: center;

        &:hover {
            color: #4559f7;
            transition: all .3s ease;
        }
    }
    `;

export const NavItemBtn = styled.li`
    @media(max-width: 960px){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
    `;
