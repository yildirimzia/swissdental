
// Relative import kullanın (path alias çalışmıyorsa)
import HeroSection from './components/HomePage/HeroSection'
import HeroSectionThree from './components/HomePage/HeroSectionThree'
import HeroSectionTwo from './components/HomePage/HeroSectionTwo'
import HeroSectionFour from './components/HomePage/HeroSectionFour'
import HeroSectionFive from './components/HomePage/HeroSectionFive'
import HeroSectionSix from './components/HomePage/HeroSectionSix'
import HeroSectionSeven from './components/HomePage/HeroSectionSeven'
import ScrollProgress from './components/ScrollProgress'
// Veya path alias çalışıyorsa:
// import Button from '@/components/Button'

export default function Home() {


  return (
    <div className=" ">
    <ScrollProgress />
    <HeroSection/>
    <HeroSectionTwo/>
    <HeroSectionThree/>
    <HeroSectionFour/>
    <HeroSectionFive/>
    <HeroSectionSix/>
    <HeroSectionSeven/>
    </div>
  )
}