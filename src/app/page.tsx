
// Relative import kullanın (path alias çalışmıyorsa)
import HeroSection from './components/HeroSection'
import HeroSectionThree from './components/HeroSectionThree'
import HeroSectionTwo from './components/HeroSectionTwo'
import HeroSectionFour from './components/HeroSectionFour'
import HeroSectionFive from './components/HeroSectionFive'
import HeroSectionSix from './components/HeroSectionSix'

// Veya path alias çalışıyorsa:
// import Button from '@/components/Button'

export default function Home() {


  return (
    <div className=" ">
        
    <HeroSection/>
    <HeroSectionTwo/>
    <HeroSectionThree/>
    <HeroSectionFour/>
    <HeroSectionFive/>
    <HeroSectionSix/>
    </div>
  )
}