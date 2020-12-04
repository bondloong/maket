import React from 'react'

import One from './one/one'
import Two from './two/two'
import Three from './three/three'
import "./head.css"

export default function Head() {
    return (
        <header className="head">
            <One />
            <Two />
            <Three />
        </header>
    )
}
