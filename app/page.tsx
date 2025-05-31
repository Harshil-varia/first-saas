import React from 'react'
import { Button } from "@/components/ui/button"
import Navbar from '@/components/ui/navbar'
import CompanionCard from '@/components/ui/companionCard'
import CTA from '@/components/ui/CTA'
import CompanionList from '@/components/ui/CompanionList'
import { recentSessions } from '@/constants'
const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>
        Popular Companion
      </h1>
      <section className='home-section'>
        <CompanionCard id="123"
            name="Neurathe Brainy Explorer"
            topic="Neural Network of the Brain"
            subject="science" duration={45}
            color="#ffda6e" bookmarked={false}/>
        <CompanionCard id="456"
            name="Neurathe Brainy Explorer"
            topic="Neural Network of the Brain"
            subject="science"
            duration={30}
            color="#ffda6e" bookmarked={false}/>
        <CompanionCard id="789"
            name="Neura the Brainy Explorer"
            topic="Neural Network of the Brain"
            subject="science"
            duration={15}
            color="#ffda6e" bookmarked={false}/>
      </section>
      <section className='home-section'>
        <CompanionList title={''} companions={recentSessions} classNames='w-2/3 max-lg:w-f'/>
        <CTA/>
        
      </section>
    </main>
  )
}

export default Page