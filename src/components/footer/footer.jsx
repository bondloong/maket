import React from 'react'

import Ten from './ten/ten'
import Eleven from './eleven/eleven'
import Twelve from './twelve/twelve'
import Thirteen from './thirteen/thirteen'

import './footer.css'

export default function footer() {
    return (
        <div className="footer">
            <Ten />
            <Eleven />
            <div className="right__wrapper">
                <Twelve />
                <Thirteen />
            </div>
        </div>
    )
}
