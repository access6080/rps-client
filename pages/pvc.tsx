import React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import GameDock from '../components/GameDock'
import GameSection from '../components/GameSection'
import Header from '../components/Header'
import ScoreBoard from '../components/ScoreBoard'

const PvC = () => {
    return (
        <div className="relative min-h-screen bg-game overflow-auto">
            <Head>
                <title>RPS - Play vs Computer</title>
                <link rel="icon" href="/favicon.ico" />
		    </Head>
            <main> 
                <Header classProps={'h-1/3'} />
                <ScoreBoard
                    playerOneName={'Player'}
                    playerTwoName={'Computer'}
                    playerOneScore={0}
                    playerTwoScore={0}
                />
                <GameSection />
                <GameDock />

            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default PvC