import React from 'react'

import Left from './left/left'
import Center from './center/center'

import './content.css'

export default function Content() {
    return (
        <div className="content">
            <Left />
            <Center />
        </div>
    )
}
