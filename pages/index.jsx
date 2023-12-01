import Activities from '@/components/ActivityList'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import NavbarDefault from '@/components/Navbar'
import Plans from '@/components/PlanList'
import { useState, useEffect } from 'react'
import supabase from '../lib/supabase'

export default function Home() {

  return (
    <div className='min-h-screen'>
      <NavbarDefault></NavbarDefault>
      <Hero></Hero>
      <Footer></Footer>
    </div>

  )
}
