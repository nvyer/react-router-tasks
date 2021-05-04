import React, { useState } from 'react';
import './tags.css';

const Tags = () => {
    const [tags, setTags] = useState([]);

    const addTag = (e) => {
        let value = e.target.value.trim();
        if (value && e.key === 'Enter') {
            setTimeout(() => {
                e.target.value = '';
            })
            setTags(prevState => {
                if (prevState.includes(value)) {
                    return [...prevState]
                } else {
                    return [...prevState, value]
                }
            });
        }
    }

    const removeTag = (tagName) => {
        setTags(prevState => {
            return prevState.filter((el) => el !== tagName)
        })
    }

    return (
        <div className='container'>
            <div className='input-container'>
                <input placeholder='Add Tag ..' className='input' onKeyDown={(e) => addTag(e)} />
            </div>
            <div className='tags-container'>
                {tags && tags.map((el, i) => {
                    return (
                        <div key={i} className='element-container'>
                            <span className='element'>{el}</span>
                            <span onClick={() => removeTag(el)} className='x-sign'>x</span>
                        </div>)
                })}
            </div>
        </div>
    )
}

export default Tags;