import React, {useContext, useEffect} from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import GameDock from '../components/GameDock'
import GameSection from '../components/GameSection'
import Header from '../components/Header'
import ScoreBoard from '../components/ScoreBoard'
import { SocketContext } from '../context'
import  Router from 'next/router'
import GameEndModal from '../components/GameEndModal'
import GameSetup from '../components/GameSetup'

const PvC = () => {
    const { selected } = useContext(SocketContext);
    
    useEffect(() => {
        if (!selected) {
            Router.push('/')
        }
    }, [])

    return (
        <div className="relative min-h-screen bg-game overflow-auto">
            <Head>
                <title>RPS - Play vs Computer</title>
                <link rel="icon" href="/favicon.ico" />
		    </Head>
            <main> 
                <Header classProps={'h-1/3'} />
                <ScoreBoard />
                <GameSection />
                <GameDock />
            </main>
            <footer>
                <Footer />
            </footer>
            <GameEndModal />
            {/* <GameSetup /> */}
        </div>
    )
}

export default PvC