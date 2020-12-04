import React from 'react'

import './five.css'

export default function Five() {
    return (
        <div className="five light text">
            <p><span>PSD файл с макетом. Макет разбит по слоям и сгрупированн по папкам:</span></p>
            <ul className="five__list">
                <li><span>number</span> - нумерация блоков (номера блоков верстать не нужно)</li>
                <li><span>text</span> - текстовые блоки (шрифт Arial, размер 14 пикселей, межстрочное растояние 22 пикселя)</li>
                <li><span>head</span> - шапка сайта</li>
                <li><span>content</span> - контентная область, которая в свою очередь делится на <span>left</span> и <span>center</span></li>
            </ul>
            <p>Текстовое описание задания и требования.</p>
        </div>
    )
}
