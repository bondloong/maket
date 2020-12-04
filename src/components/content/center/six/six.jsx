import React from 'react'

import './six.css'

export default function Six() {
    const col = ["","","","","","",""]
    return (
        <div className="wrapper__six">
        {
            col.map((item, index)=>{
                return <div className="six light" key={index}>{item}</div>
            })
        }   
        </div>
    )
}
