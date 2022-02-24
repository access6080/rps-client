import React, {useContext, useState} from 'react'
import Image from 'next/image'
import { SocketContext } from '../context'


const GameSection = () => {
    const { handOne, handTwo, round } = useContext(SocketContext)

    
    return (
        <> 
            <p className=" w-full font-spectral -mt-4 space-x-2 text-center">Round {round}</p>
        <div className="flex flex-col md:flex-row space-y-4 justify-center md:justify-evenly items-center min-w-screen md:min-w-[1010px] h-auto mb-10">
            <div className="w-[300px] h-[300px] bg-trransparent border border-[#c4c4c4] game-box flex justify-center items-center">
                { handOne && <Image src={handOne} width={150} height={230} alt="state"/>}
            </div>
            <div className="w-[300px] h-[300px] bg-trransparent border border-[#c4c4c4] game-box flex justify-center items-center">
                { handTwo && <Image src={handTwo} width={150} height={230} alt="state"/>}
            </div>
        </div>
        </>
    )
}

export default GameSection