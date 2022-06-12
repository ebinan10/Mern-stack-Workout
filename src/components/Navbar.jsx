import React from 'react'
import styledComponents from 'styled-components';
 

const Nav = styledComponents.div`
background:#001289;
color:crimson;
height:50px;
width:100%;
display: flex;

justify-content:center;
text-align: center;
allign-item:center;
`

const Navbar = () => {
    return (
        <div>
            <Nav>
                Holiday Special Offer Avialable
            </Nav>
            
        </div>
    )
}

export default Navbar
