import { NavLink } from 'react-router-dom'

import React from 'react'
import Home from './Home'
import About from './About'
import Labs from './Labs'
import Support from './Support'
export default function Navbar() {
    return (
        <div>
            <ul>
                <NavLink to="/" element={<Home />} >home</NavLink><br />
                <NavLink to="/about" element={<About />}>about</NavLink> <br />
                <NavLink to="/labs" element={<Labs />}>Labs</NavLink> <br />
                <NavLink to="/support" element={<Support />}> Support</NavLink> <br />

            </ul>
        </div>
    )
}
