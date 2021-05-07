import React, { useReducer } from 'react';
import './color_picker.css';

const ColorPicker = () => {
    const colors = { red: 0, green: 0, blue: 0, alpha: 1 }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'red':
                return { ...state, red: Number(action.value) }
            case 'green':
                return { ...state, green: Number(action.value) }
            case 'blue':
                return { ...state, blue: Number(action.value) }
            case 'alpha':
                return { ...state, alpha: Number(action.value) }
            default:
                return state
        }
    }

    const [initialState, dispatch] = useReducer(reducer, colors);

    return (
        <div className='color-picker-container'>
            <div className='color-change-container' style={{ backgroundColor: `rgba(${initialState.red},${initialState.green},${initialState.blue},${initialState.alpha})` }}> </div>
            <span className='colors'>rgba({initialState.red}  {initialState.green}  {initialState.blue}  {initialState.alpha})</span>
            <input min='0' max='255' id='red' onChange={(event) => dispatch({ type: 'red', value: event.target.value })} className='color-input' type='range' />
            <span>red {initialState.red}</span>
            <input min='0' max='255' id='green' onChange={(event) => dispatch({ type: 'green', value: event.target.value })} className='color-input' type='range' />
            <span>green {initialState.green}</span>
            <input min='0' max='255' id='blue' onChange={(event) => dispatch({ type: 'blue', value: event.target.value })} className='color-input' type='range' />
            <span>blue {initialState.blue}</span>
            <input min='0.1' step='0.01' max='1' id='alpha' onChange={(event) => dispatch({ type: 'alpha', value: event.target.value })} className='color-input' type='range' />
            <span>alpha {initialState.alpha}</span>
        </div >
    )
}

export default ColorPicker;