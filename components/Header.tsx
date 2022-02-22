import React from 'react'
import Link from  'next/link'
import Image from 'next/image'
import logo from '../public/logo.png';

interface HeaderProps{
    classProps:  string
}


const Header = ({classProps}:  HeaderProps) => {
    return (
        <header className={`w-full flex justify-center items-start${classProps}`}> 
            <Link href={'/'} passHref>
                <a> 
                    <Image width={200} height={200} src={logo} alt='logo' className="cursor-pointer"/>
                </a>
            </Link>
        </header>
    )
}

export default Header