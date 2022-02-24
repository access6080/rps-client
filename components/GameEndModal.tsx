import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useContext } from 'react'
import { SocketContext } from '../context'
import Router from 'next/router'
import { MdOutlineVideogameAssetOff } from 'react-icons/md'
import Image from 'next/image'

const GameEndModal = () => {
    const { name, endGame, setEndGame,  playerTwoScore, playerOneScore, opponent, message, emoji, setGameModalIsOpen } = useContext(SocketContext)


    const closeModal = () => {
        setEndGame(false)
        Router.push('/')
    }

    const handleClick = (e: any) => {
        e.preventDefault();

        if (e.target.id === "1") {
            Router.push('/')
        }
        else if (e.target.id === "2") {
            setEndGame(false)
            setGameModalIsOpen(true)
        }
        else if (e.target.id === "3") {
            Router.push('/') // TODO: To be implemented after multiplayer functionality is added
        }
    }

    
  return (
        <>
            <Transition appear show={endGame} as={Fragment}>
                {/* @ts-ignore */}
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-200 opacity-50" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                {/* @ts-ignore */}
                                <Dialog.Title
                                    as="div"
                                    className=" flex justify-center items-center text-lg font-medium leading-6 text-gray-900 font-spectral space-x-2"
                                >
                                    <MdOutlineVideogameAssetOff /> 
                                    <p>Game Ended</p>
                                </Dialog.Title>
                                
                                <div className="flex items-center justify-center mt-2">
                                  <h1 className="font-spectral text-5xl">{message}</h1>
                                  <Image src={emoji} alt="emoji" width={150} height={ 150 }/>
                                </div>

                                <div className="mt-2"> 
                                    <h1 className="font-spectral text-sm text-center">Final Score</h1>
                                    <div className="flex justify-evenly items-center"> 
                                        <div className="flex flex-col justify-center items-center">
                                          <p className="font-spectral text-sm text-center">{ name }</p>
                                          <p>{ playerOneScore }</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="font-spectral text-sm text-center">{opponent}</p>
                                          <p>{ playerTwoScore }</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 flex justify-evenly w-full">
                                    <button
                                        id={'1'}
                                        onClick={handleClick}
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium font-spectral text-white bg-[#20AAE9] border border-transparent rounded-md hover:bg-[#49b8eb] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    > 
                                        Go Home
                                    </button>
                                    {/* <button
                                        id={'2'}
                                        onClick={handleClick}
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium font-spectral text-white bg-[#20AAE9] border border-transparent rounded-md hover:bg-[#49b8eb] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    >
                                        Play Again
                                    </button> */}
                                    <button
                                        id={'3'}
                                        onClick={handleClick}
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium font-spectral text-white bg-[#20AAE9] border border-transparent rounded-md hover:bg-[#49b8eb] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    >
                                        Play A Friend
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
        </Transition>
    </>
  )
}

export default GameEndModal