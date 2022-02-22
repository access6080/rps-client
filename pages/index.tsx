import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SelectGameType from '../components/SelectGameType'
import Title from '../components/Title'


const Home: NextPage = () => {
  return (
	<div className="relative min-h-screen bg-game overflow-auto">
		<Head>
			<title>Rock Paper Scissors</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<main className="flex w-full flex-col h-full">
			<Header classProps={"h-1/3"} />
			<Title />
			<SelectGameType />
		</main>

		<footer>
			<Footer />  
		</footer>
	</div>
	)
}

export default Home
