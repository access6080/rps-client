import React from 'react'

interface ScoreBoardProps{
    playerOneName: string;
    playerTwoName: string;
    playerOneScore: number;
    playerTwoScore: number;
}

const ScoreBoard = ({ playerOneName, playerTwoName, playerOneScore, playerTwoScore}: ScoreBoardProps) => {
    
    return (
        <div className="flex justify-evenly item-center min-w-screen md:min-w-[1010px] h-[100px]">
            <div className="flex text-title font-spectral text-2xl md:text-5xl">
                <h1>{ playerOneName }</h1>
                <p className="ml-5 ">{ playerOneScore }</p>
            </div>
            <div className="flex text-title font-spectral text-2xl md:text-5xl">
                <h1>{ playerTwoName }</h1>
                <p className="ml-5">{ playerTwoScore }</p>
            </div>
        </div>
    )
}

export default ScoreBoard