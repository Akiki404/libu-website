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
    NavLinks,
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
                            <NavIcon />
                            MYSA Library
                        </NavLogo>

                        <MobileIcon onClick={handleClick} click={click}>
                            { click ? <FaTimes /> : <FaBars /> }
                        </MobileIcon>

                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/'>Home</NavLinks> 
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/events'>Events</NavLinks> 
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/alumni'>Alumni</NavLinks> 
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/bdadg'>DramaGroup</NavLinks> 
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/blog'>Blog</NavLinks> 
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
                        
        </>
    )
}

export default Navbar
