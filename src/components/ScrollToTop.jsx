"use client";

import { useState,useEffect } from 'react'
import { ArrowBigUp } from 'lucide-react'
import React from 'react'

export function ScrollToTop() {
  const [isVisible, setVisible]=useState(true)
  useEffect(() => {
    const toggleVisibility=()=>{
    if(window.scrollY > 200){
      setVisible(true)
    }
    else{
      setVisible(false)
    }
  } 
    window.addEventListener('scroll', toggleVisibility)
  
    return () => {
    window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])
  const handleScroll=()=>{
    window.scrollTo({top:0, behavior:"smooth"})
  }

  return (
    <button className={`fixed bottom-16 right-6 shadow-lg p-3 z-99 rounded-full flex justify-center items-center cursor-pointer bg-purple-600 dark:bg-purple-600 hover:bg-purple-700'
    ${isVisible ? 'opacity-100 translate-y-0':'opacity-0 translate-y-16 pointer-events-none'} transition-all duration-500`}
    onClick={handleScroll}>
    <ArrowBigUp className='text-white' size={32}/>
    </button>
  )
}

