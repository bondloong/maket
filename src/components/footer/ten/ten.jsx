import React from 'react'

import './ten.css'

export default function Ten() {
    const puncts = ["Пункт 01", "Пункт 02", "Пункт 03", "Пункт 04", "Пункт 05", "Пункт 06", "Пункт 07", "Пункт 08", "Пункт 09","Пункт 10", "Пункт 11", "Пункт 12", "Пункт 13", "Пункт 14"]
    return (
        <div className="ten dark text">
            {
                puncts.map((punct, index) => {
                    return <div style={{display: "inline-block"}} key={index}>{punct}</div>
                })
            }
        </div>
    )
}
