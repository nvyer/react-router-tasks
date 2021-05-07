import React, { useState } from 'react';
import { data } from '../../service/data';
import './MemoryGame.css';


export default function MemoryGame() {
    const [imageData, setImageData] = useState(data);
    const [start, setStart] = useState(false);
    let [score, setScore] = useState(0);


    const startTheGame = () => {
        setStart(!start);
    };

    const handleClick = (id) => {
        setImageData(prevState => {
            return prevState.map((el) => {
                if (el.id === id && el.clicked === true) {
                    setScore(0);
                    return el;
                } else if (el.id === id && el.clicked !== true) {
                    console.log('mtav if else')
                    return {
                        ...el,
                        clicked: true
                    }
                } else {
                    return el
                }
            })
        })

        shuffle();
    }

    const shuffle = () => {
        setImageData(prevState => prevState.sort((a, b) => 0.5 - Math.random()))
    }

    const reset = () => {
        setImageData(prevState => prevState.map(el => ({ ...el, clicked: false })))
        setStart(false);
        setScore(0);
    }

    return (
        <div className='game-container'>
            <p className='game-title'>Memory Game</p>
            <p>* Try to click on same picture once to win the game</p>
            <p className='score'>{score === imageData.length ? (<span className='win-messege-container'> <span className='win-message'>YOU WON !</span> <button onClick={reset} className='btn'>Reset</button></span>) : `Your score : ${score} `}</p>
            {start && <button onClick={reset} className='btn'>Reset</button>}
            <div className='game-container-wrapper'>
                {!start && <button className='btn' onClick={startTheGame} >Start</button>}
                <div className='image-container'>
                    {start && imageData.map(el => {
                        return <img onClick={() => handleClick(el.id)} width='100px' alt='celebrity' className='celeb-img' key={el.id} src={el.image}></img>
                    })}
                </div>
            </div>
        </div>
    )
}