import React from 'react';
import Game from './game';
const SnakeGame = () => {
    return (
        <div className='bg-white flex flex-col'>
            <div className="flex flex-row">
                <span>icon1</span>
                <span>icon2</span>
            </div>
            <div className="flex flex-row justify-between">
                <div className="">
                    <Game />
                </div>
                <div className="block">
                    <div className="block">
                        <div className="comment block">
                            <p>//</p>
                            <p>//</p>
                        </div>
                        <div className="control">
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                    </div>
                    <div className="block">
                        <div className="foodleft-text"></div>
                        <div className="foodleft-icons"></div>
                    </div>
                    <div className="btn skip">Skip</div>
                </div>
            </div>
            <div className=""></div>
        </div>
    );
}

export default SnakeGame;
