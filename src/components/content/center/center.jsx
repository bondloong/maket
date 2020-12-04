import React from 'react'

import Five from './five/five'
import Six from './six/six'
import Eight from './eight/eight'
import Nine from './nine/nine'

import './center.css'

export default function Center() {
    return (
        <div className="center">
            <Five />
            <Six />
            <Eight />
            <Nine />
        </div>
    )
}
