
// Relative import kullanın (path alias çalışmıyorsa)
import HeroSection from './components/HeroSection'
import HeroSectionThree from './components/HeroSectionThree'
import HeroSectionTwo from './components/HeroSectionTwo'
import HeroSectionFour from './components/HeroSectionFour'
import HeroSectionFive from './components/HeroSectionFive'
import HeroSectionSix from './components/HeroSectionSix'
import HeroSectionSeven from './components/HeroSectionSeven'
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