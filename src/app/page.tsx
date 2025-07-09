
// Relative import kullanın (path alias çalışmıyorsa)
import HeroSection from './components/HeroSection'

// Veya path alias çalışıyorsa:
// import Button from '@/components/Button'

export default function Home() {


  return (
    <div className="min-h-screen ">
        
    <HeroSection/>
    </div>
  )
}