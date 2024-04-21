"use client"
import GameCard from "@/components/common/GameCard"
import {games} from "../components/common/Constants"
import NavBar from "@/components/common/Navbar"
import Footer from "@/components/common/Footer"


export default function page() {
  return (
    <>
  
    <div className="bg-homeBack">

    
    <section className="container mx-auto px-4 py-12 md:px-6 lg:py-16 ">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">Explore Our Game Library</h1>
        <p className="mt-4 text-gray-400">
          Browse through our extensive collection of exciting board games.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {
          games.map((game, index)=>(
            
            <GameCard game={game} key={index}/>
          ))
        }
      </div>
    </section>
    </div>
    <Footer />
    </>
  )
}
