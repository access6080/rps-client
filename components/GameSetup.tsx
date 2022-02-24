import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useContext } from 'react'
import { SocketContext } from '../context'
import Router from 'next/router'
import { BiCog } from 'react-icons/bi'
import SelectRounds from './SelectRounds'



const GameSetup = () => {
    const { setName, gameModalIsOpen, setGameModalIsOpen } = useContext(SocketContext)
    const [value, setValue] = useState<string>("")

    const closeModal = () => {
        setGameModalIsOpen(false)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setName(value)
        setGameModalIsOpen(false)
        Router.push('/pvc')

    }


    return (
        <>
            <Transition appear show={gameModalIsOpen} as={Fragment}>
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
                                    <BiCog /> 
                                    <p>Game Setup</p>
                                </Dialog.Title>
                                <form onSubmit={handleSubmit}>
                                    <div className="mt-2">
                                        <input type="text" className="outline-none p-2 rounded-xl placeholder:font-spectral font-spectral w-full border" placeholder="Player Name" required value={value} onChange={(e) => setValue(e.target.value)}/>
                                    </div>

                                    <div className="mt-2"> 
                                        <h1 className="font-spectral text-sm text-center">Number of Rounds</h1>
                                        <SelectRounds />
                                    </div>

                                    <div className="mt-4 flex justify-center w-full">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center px-4 py-2 text-sm font-medium font-spectral text-white bg-[#20AAE9] border border-transparent rounded-md hover:bg-[#49b8eb] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        >
                                            Start Game
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
        </Transition>
    </>
    )
}

export default GameSetup