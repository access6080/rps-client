import React, {useEffect, useState} from 'react'
import { io } from 'socket.io-client'
import { ROCK, PAPER, SCISSORS } from '../constants'
import rock from '../public/rock.png'
import paper from '../public/paper.png'
import scissors from '../public/scissors.png'


const SocketContext = React.createContext()
const socket = io('http://localhost:3001')

const ContextProvider = ({ children }) => {
    const [round, setRound] = useState(0)
    const [decode, setDecode] = useState('');
    // const [result, setResult] = useState('')

    const sendHand = (hand) => {
        const stream = `${'0001'}${'01'}${hand}${'0000'}${'0000'}`
        socket.emit('play round', stream)
    }
    

    useEffect(() => {
        socket.on('result', (result) => {
            const decoded = decodeResult(result);
            setDecode(decoded);
        })
    },[])

    const decodeResult = (stream) => {
        const round = stream.slice(0, 4);
        const gameStateOne = stream.slice(4, 8)
        const gameStateTwo = stream.slice(8, 12)
        const result = stream.slice(12, 14)
        const gameType = stream.slice(14, 16)

        const playerOne = gameStateOne.slice(0, 2)
        const OneHand = gameStateOne.slice(2, 4)

        const playerTwo = gameStateTwo.slice(0, 2)
        const TwoHand = gameStateTwo.slice(2, 4)

        return {OneHand, TwoHand, result}
    }

    const playerOneHand = decode?.OneHand
    const playerTwoHand = decode?.TwoHand
    const winner = decode?.result
    console.log({ decode })

    let handOne;
    if (playerOneHand === ROCK) {
        handOne = rock;
    }
    else if (playerOneHand === PAPER) {
        handOne = paper;
    }
    else if (playerOneHand === SCISSORS) {
        handOne = scissors;
    }

    let handTwo;
    if (playerTwoHand === ROCK) {
        handTwo = rock;
    }
    else if (playerTwoHand === PAPER) {
        handTwo = paper;
    }
    else if (playerTwoHand === SCISSORS) {
        handTwo = scissors;
    }


    return(
        <SocketContext.Provider value={{
            sendHand,
            winner,
            setRound,
            handTwo,
            handOne,
        }}
        >
            {children}
        </SocketContext.Provider >
    )
}

export { SocketContext, ContextProvider};
