'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// GSAP plugin'ini register et
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const HeroSection: React.FC = () => {

  return (
    <section className="">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima natus beatae? Facilis vero nihil numquam maiores dolorum non excepturi hic in perspiciatis, asperiores temporibus omnis maxime dolore. Repudiandae, in?
    </section>
  )
}

export default HeroSection