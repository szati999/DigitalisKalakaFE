import React from 'react'
import headerlogo from './headerlogo.svg'
import './Header.css'


export default function Header() {
    return (
        <div className='header-logo'>
            <img src={headerlogo}/>
        </div>
    )
}
