
// Relative import kullanın (path alias çalışmıyorsa)
import HeroSection from './HomePage/HeroSection'
import HeroSectionThree from './HomePage/HeroSectionThree'
import HeroSectionTwo from './HomePage/HeroSectionTwo'
import HeroSectionFour from './HomePage/HeroSectionFour'
import HeroSectionFive from './HomePage/HeroSectionFive'
import HeroSectionSix from './HomePage/HeroSectionSix'
import HeroSectionSeven from './HomePage/HeroSectionSeven'
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