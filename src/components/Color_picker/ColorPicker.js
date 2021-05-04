import React, { useState } from 'react';
import './color_picker.css';

const ColorPicker = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const [alpha, setAlpha] = useState(1);

    const changeTheColor = ({ target: { value, id } }) => {
        switch (id) {
            case 'red':
                setRed(Number(value))
                break;
            case 'green':
                setGreen(Number(value))
                break
            case 'blue':
                setBlue(Number(value))
                break
            case 'alpha':
                setAlpha(Number(value))
                break;
            default:
                break
        }


    }

    return (
        <div className='color-picker-container'>
            <div className='color-change-container' style={{ backgroundColor: `rgba(${red},${green},${blue},${alpha})` }}>
            </div>
            <span className='colors'>rgba({red}  {green}  {blue}  {alpha})</span>
            <input min='0' max='255' id='red' onChange={(e) => changeTheColor(e)} className='color-input' type='range' />
            <span>red {red}</span>
            <input min='0' max='255' id='green' onChange={(e) => changeTheColor(e)} className='color-input' type='range' />
            <span>green {green}</span>
            <input min='0' max='255' id='blue' onChange={(e) => changeTheColor(e)} className='color-input' type='range' />
            <span>blue {blue}</span>
            <input min='0.1' step='0.01' max='1' id='alpha' onChange={(e) => changeTheColor(e)} className='color-input' type='range' />
            <span>alpha {alpha}</span>
        </div >
    )
}

export default ColorPicker;