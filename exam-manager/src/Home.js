import React, { useEffect, useState } from 'react'
import './Home.css'
import Background from './Components/Background/Background'
import Navbar from './Components/Navbars/Navbar'
import Hero from './Components/Hero/Hero'

function Home() {

  useEffect(()=>{
    setInterval(() => {
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 3000);
  },[])

  let heroData = [
    {text1:"Customized",text2:"Classroom layouts"},
    {text1:"Automated",text2:"exam-seat allocation"},
    {text1:"Precise",text2:"Examination schedule"}
  ]
  const [heroCount,setHeroCount] = useState(0)
  const [playStatus,setPlayStatus] = useState(false)

  return (
<div>
    <Background playStatus={playStatus} heroCount={heroCount} />
    <Navbar/>
    <Hero
    setPlayStatus={setPlayStatus}
    heroData={heroData[heroCount]}
    heroCount={heroCount}
    setHeroCount={setHeroCount}
    playStatus={playStatus}
    />
</div>
  )
}

export default Home