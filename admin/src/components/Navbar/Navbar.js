import React, { useState } from 'react'

import { IconContext } from 'react-icons/lib'
import { FaTimes, FaBars } from 'react-icons/fa'

import {
    Nav,
    NavbarContainer,
    NavIcon,
    MobileIcon,
    NavLogo,
    NavMenu,
    NavLink,
    NavItem,
}
from './styles'

const Navbar = () => {

    const [click, setClick] = useState(false)
    
    const handleClick = () => setClick(!click)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo>
                            {/* <NavIcon /> */}
                            Admin
                        </NavLogo>

                        <MobileIcon onClick={handleClick} click={click}>
                            { click ? <FaTimes /> : <FaBars /> }
                        </MobileIcon>

                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLink to='/'>Home</NavLink> 
                            </NavItem>
                            <NavItem>
                                <NavLink to='/events'>Events</NavLink> 
                            </NavItem>
                            <NavItem>
                                <NavLink to='/partners'>Partners</NavLink> 
                            </NavItem>
                            <NavItem>
                                <NavLink to='/alumni'>Alumni</NavLink> 
                            </NavItem>
                            <NavItem>
                                <NavLink to='/bdadg'>DramaGroup</NavLink> 
                            </NavItem>
                            <NavItem>
                                <NavLink to='/blog'>Blog</NavLink> 
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
                        
        </>
    )
}

export default Navbar
