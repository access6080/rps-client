import React from 'react'
import Image from 'next/image';
import Link from  'next/link'

import pvc from '../public/pvc.png'
import pvp from '../public/pvp.png'

const SelectGameType = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:min-w-[1020px] min-h-[400px]  justify-center items-center lg:justify-evenly">
            <Link href={'/pvc'}>
                <div className="flex flex-col justify-center items-center pvc w-96 h-96 md:min-w-[496px] md:h-[294px] cursor-pointer scale-75 transition md:hover:scale-100 ease-in-out duration-200">
                    <Image src={pvc} width={237} height={217} />
                    <h1 className="text-[#f6f6f6] font-spectral">Play against Computer</h1>
                </div>
            </Link>

            <div className="flex flex-col justify-center items-center pvp w-96 h-96 md:min-w-[496px] md:h-[294px] cursor-not-allowed scale-75"> {/* transition md:hover:scale-100 ease-in-out duration-200 */}
                <Image src={pvp} width={237} height={217} />
                <h1 className="text-[#f6f6f6] font-spectral">Play against a friend</h1>
            </div>
        </div>
    )
}

export default SelectGameType 