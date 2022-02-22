import React, {useState, useContext} from 'react'

import rock from '../public/rock.png'
import paper from '../public/paper.png'
import scissors from '../public/scissors.png'
import Image from 'next/image'
import { SocketContext } from '../context'

import {ROCK, PAPER, SCISSORS} from '../constants'

const GameDock = () => {
    const { sendHand } = useContext(SocketContext);

    return (
        <div className="flex justify-center items-center w-full">
            <div className="dock w-96 h-24 flex justify-evenly items-center mb-10 mx-4 md:mb-5 ">
                <Image src={rock} width={80} height={100}  object-fit='contain' className="cursor-pointer scale-90 hover:scale-100" alt={"rock"} onClick={() => sendHand(ROCK)}/>
                <Image src={paper} width={80} height={100} object-fit='contain' className="cursor-pointer scale-90 hover:scale-100" alt={"rock"} onClick={() => sendHand(PAPER)}/>
                <Image src={scissors} width={80} height={100} object-fit='contain'  className="cursor-pointer scale-90 hover:scale-100" alt={"rock"} onClick={() =>sendHand(SCISSORS)}/>
            </div>
        </div>
    )
}

export default GameDock