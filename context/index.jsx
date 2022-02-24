import React, {useEffect, useState} from 'react'
import { io } from 'socket.io-client'
import { ROCK, PAPER, SCISSORS, computer, playerOne, playerTwo}  from '../constants'
import rock from '../public/rock.png'
import paper from '../public/paper.png'
import scissors from '../public/scissors.png'
import { encode } from '../utils'
import won from '../public/won.svg';
import lost from '../public/lost.svg';
import draw from '../public/draw.svg';


const SocketContext = React.createContext()
const socket = io('http://localhost:3001')

const ContextProvider = ({ children }) => {
    const [round, setRound] = useState(1)
    const [score, setScore] = useState(0)
    const [decode, setDecode] = useState('')
    const [name, setName] = useState('')
    const [opponent, setOpponent] = useState('Computer')
    const [gameModalIsOpen, setGameModalIsOpen] = useState(false)
    const [selected, setSelected] = useState()
    const [metaData, setMetaData] = useState()
    const [endGame, setEndGame] = useState(false)
    const [message, setMessage] = useState('')
    const [emoji, setEmoji] = useState()


    const sendHand = (hand) => {
        console.log(selected)
        const stream = `${encode(round)}${'01'}${hand}${encode(selected.value)}${'0000'}`
        socket.emit('play round', stream)
    }
    

    useEffect(() => {
        socket.on('result', (result) => {
            setScore(result.score)
            setMetaData(result.meta)
            const decoded = decodeResult(result.stream);
            setDecode(decoded);
            setRound(result.meta.newRound)
            setEndGame(result.meta.endGame)
        })
    }, [])

    useEffect(() => {
        if (metaData?.endGame) {
            if (metaData?.rpsWinner === playerOne) {
                setMessage("You won!")
                setEmoji(won)
            }
            else if (metaData?.rpsWinner === playerTwo || metaData?.rpsWinner === computer) {
                setMessage("You lost!")
                setEmoji(lost)
            }
            else {
                setMessage("Draw")
                setEmoji(draw)
            }
        }
    })
    

    const decodeResult = (stream) => {
        // const round = stream.slice(0, 4);
        const gameStateOne = stream.slice(4, 8)
        const gameStateTwo = stream.slice(8, 12)
        // const result = stream.slice(12, 14)
        // const gameType = stream.slice(14, 16)

        const playerOne = gameStateOne.slice(0, 2)
        const OneHand = gameStateOne.slice(2, 4)

        const playerTwo = gameStateTwo.slice(0, 2)
        const TwoHand = gameStateTwo.slice(2, 4)

        return {OneHand, TwoHand, playerOne, playerTwo}
    }

    const playerOneHand = decode?.OneHand
    const playerTwoHand = decode?.TwoHand
    // console.log({metaData})

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

    const playerOneScore = score.playerOneScore || 0
    const playerTwoScore = score.playerTwoScore || 0

    


    return(
        <SocketContext.Provider value={{
            sendHand,
            playerOneScore,
            playerTwoScore,
            round,
            handTwo,
            handOne,
            name,
            setName,
            gameModalIsOpen,
            setGameModalIsOpen,
            selected,
            setSelected,
            endGame,
            setEndGame,
            opponent,
            setOpponent,
            message,
            emoji
        }}
        >
            {children}
        </SocketContext.Provider >
    )
}

export { SocketContext, ContextProvider};
