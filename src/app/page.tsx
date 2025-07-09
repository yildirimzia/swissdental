'use client'

// Relative import kullanın (path alias çalışmıyorsa)
import Button from './components/Button'

// Veya path alias çalışıyorsa:
// import Button from '@/components/Button'

export default function Home() {
  const CalendarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  )

  const PhoneIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-dental">
        
        {/* Hero Section */}
        <div className="hero-dental">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Swiss Dental Solutions
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
            Profesyonel diş implantı çözümleri ile gülümsemenizi yeniden kazanın
          </p>
          
          {/* Hero Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              icon={<CalendarIcon />}
            >
              Randevu Al
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              icon={<PhoneIcon />}
            >
              Bilgi Al
            </Button>
          </div>
        </div>

        <div className="section-spacing">
          
          {/* Button Test Section */}
          <div className="card-dental mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              ✅ Button Component Çalışıyor!
            </h2>
            <p className="text-gray-600 mb-6">
              Artık her yerde kullanabileceğiniz Button komponentiniz hazır.
            </p>
            
            {/* Button Variants */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <Button variant="primary" fullWidth>
                Primary
              </Button>
              <Button variant="secondary" fullWidth>
                Secondary
              </Button>
              <Button variant="outline" fullWidth>
                Outline
              </Button>
              <Button variant="ghost" fullWidth>
                Ghost
              </Button>
              <Button variant="danger" fullWidth>
                Danger
              </Button>
            </div>

            {/* Button Sizes */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </div>
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            <div className="card-dental text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                İmplant Tedavisi
              </h3>
              <p className="text-gray-600 mb-6">
                Kayıp dişlerinizi en doğal şekilde yeniden kazanın. Seramik implantlarımız ile uzun vadeli çözümler sunuyoruz.
              </p>
              <div className="space-y-3">
                <Button 
                  fullWidth 
                  icon={<CalendarIcon />}
                  onClick={() => alert('Randevu sayfasına yönlendiriliyor...')}
                >
                  Randevu Al
                </Button>
                <Button 
                  variant="outline" 
                  fullWidth
                  onClick={() => alert('Detay sayfası açılıyor...')}
                >
                  Detayları Gör
                </Button>
              </div>
            </div>

            <div className="card-dental text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Eğitim Programları
              </h3>
              <p className="text-gray-600 mb-6">
                Diş hekimleri için özel eğitim programları ile kendinizi geliştirin. Online ve yüz yüze eğitim seçenekleri mevcuttur.
              </p>
              <div className="flex gap-3">
                <Button 
                  variant="secondary" 
                  className="flex-1"
                  onClick={() => alert('Kayıt formu açılıyor...')}
                >
                  Kayıt Ol
                </Button>
                <Button 
                  variant="ghost"
                  onClick={() => alert('Program detayları...')}
                >
                  Detay
                </Button>
              </div>
            </div>
          </div>

          {/* Statistics with Buttons */}
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-12 rounded-2xl text-center mb-12">
            <h2 className="text-3xl font-bold mb-8">Rakamlarla Başarımız</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <p className="text-lg opacity-90">Yıllık İmplant</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                <p className="text-lg opacity-90">Yıl Tecrübe</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
                <p className="text-lg opacity-90">Mutlu Hasta</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">%98</div>
                <p className="text-lg opacity-90">Başarı Oranı</p>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-600"
              icon={<PhoneIcon />}
            >
              Hemen İletişime Geçin
            </Button>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-white p-12 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              İletişime Geçin
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Daha fazla bilgi almak ve randevu oluşturmak için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button 
                className="flex-1"
                icon={<CalendarIcon />}
                onClick={() => alert('Randevu sistemi açılıyor...')}
              >
                Randevu Al
              </Button>
              <Button 
                variant="outline" 
                className="flex-1"
                icon={<PhoneIcon />}
                onClick={() => alert('Telefon: +41 XX XXX XX XX')}
              >
                Ara
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}