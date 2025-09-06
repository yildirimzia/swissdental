'use client'
import React, { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    userType: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
    privacyAccepted: false,
    newsletterSubscription: false
  })

  const [errors, setErrors] = useState({
    userType: '',
    firstName: '',
    lastName: '',
    email: '',
    privacyAccepted: ''
  })

  const validateForm = () => {
    const newErrors = {
      userType: '',
      firstName: '',
      lastName: '',
      email: '',
      privacyAccepted: ''
    }

    if (!formData.userType) {
      newErrors.userType = 'Please select user type'
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.privacyAccepted) {
      newErrors.privacyAccepted = 'You must accept the privacy policy'
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some(error => error !== '')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleFocus = (fieldName: string) => {
    if (errors[fieldName as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [fieldName]: ''
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Form submitted:', formData)
      // Başarılı gönderim işlemleri
    }
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-8">
        <div className="rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sol Taraf - İletişim Bilgileri */}
            <div>
              <h2 className="text-3xl font-gotham font-bold text-primary-600 mb-4">
                İletişim
              </h2>
              <p className="text-secondary-600 font-gotham mb-2">
                Size geri dönüş yapmamızı ister misiniz?
              </p>
              <p className="text-secondary-600 font-gotham mb-8">
Ya da bu sayfada sorunuzun cevabını bulamadınız mı? Bu formu kullanarak bize ulaşabilir veya bizi arayabilirsiniz.              </p>
              
              <div className="space-y-4 mb-8">
                <div>
                  <span className="text-secondary-600 font-gotham">DE </span>
                  <a href="tel:+4971885366" className="text-primary-600 font-gotham font-medium hover:underline">
                    +49 7831 89 16 86 0
                  </a>
                </div>
                <div>
                  <span className="text-secondary-600 font-gotham">CH </span>
                  <a href="tel:+41715863670" className="text-primary-600 font-gotham font-medium hover:underline">
                    +41 71 586 36 70
                  </a>
                </div>
              </div>

              <div className="text-secondary-600 font-gotham space-y-1">
                <p className="font-medium">SDS Swiss Dental Solutions AG</p>
                <p>Konstanzerstrasse 11</p>
                <p>CH-8280 Kreuzlingen</p>
              </div>
            </div>

            {/* Sağ Taraf - Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Kullanıcı Tipi */}
                <div>
                  <label className="text-sm font-gotham font-[400] text-primary-500 mb-3 block">
                    Ben *
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="userType"
                        value="dentist"
                        checked={formData.userType === 'dentist'}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('userType')}
                        className="w-4 h-4 text-primary-600 border-secondary-300 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-secondary-700 font-gotham">Diş hekimi </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="userType"
                        value="patient"
                        checked={formData.userType === 'patient'}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('userType')}
                        className="w-4 h-4 text-primary-600 border-secondary-300 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-secondary-700 font-gotham">Hasta</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="userType"
                        value="other"
                        checked={formData.userType === 'other'}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('userType')}
                        className="w-4 h-4 text-primary-600 border-secondary-300 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-secondary-700 font-gotham">Diğer</span>
                    </label>
                  </div>
                  {errors.userType && (
                    <p className="text-red-500 text-sm font-gotham mt-1">{errors.userType}</p>
                  )}
                </div>

                {/* İsim */}
                <div>
                  <label className="block text-sm font-gotham font-[400] text-primary-600 mb-2">
                    Adı *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('firstName')}
                    placeholder="Adı"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-gotham transition-all duration-300 ${
                      errors.firstName ? 'border-red-500' : 'border-secondary-200'
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm font-gotham mt-1">{errors.firstName}</p>
                  )}
                </div>

                {/* Soyisim */}
                <div>
                  <label className="block text-sm font-gotham font-[400] text-primary-600 mb-2">
                    Soyadı *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('lastName')}
                    placeholder="Soyadı"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-gotham transition-all duration-300 ${
                      errors.lastName ? 'border-red-500' : 'border-secondary-200'
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm font-gotham mt-1">{errors.lastName}</p>
                  )}
                </div>

                {/* E-Mail */}
                <div>
                  <label className="block text-sm font-gotham font-[400] text-primary-600 mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('email')}
                    placeholder="E-posta"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-gotham transition-all duration-300 ${
                      errors.email ? 'border-red-500' : 'border-secondary-200'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm font-gotham mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Telefon */}
                <div>
                  <label className="block text-sm font-gotham font-[400] text-primary-600 mb-2">
                    Telefon Numarası
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Telefon Numarası"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-gotham transition-all duration-300"
                  />
                </div>

                {/* Mesaj */}
                <div>
                  <label className="block text-sm font-gotham font-[400] text-primary-600 mb-2">
                    Mesaj
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Mesaj"
                    rows={5}
                    className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-gotham transition-all duration-300 resize-none"
                  />
                </div>

                {/* Checkbox'lar */}
                <div className="space-y-3">
                  <div>
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        name="privacyAccepted"
                        checked={formData.privacyAccepted}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('privacyAccepted')}
                        className="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500 mt-1 flex-shrink-0"
                      />
                      <span className="ml-2 text-sm text-secondary-700 font-gotham">
                        Gizlilik politikası{' '}
                        <a href="#" className="text-primary-600 hover:underline">kabul edildi</a> *
                      </span>
                    </label>
                    {errors.privacyAccepted && (
                      <p className="text-red-500 text-sm font-gotham mt-1">{errors.privacyAccepted}</p>
                    )}
                  </div>
                  
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="newsletterSubscription"
                      checked={formData.newsletterSubscription}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500 mt-1 flex-shrink-0"
                    />
                    <span className="ml-2 text-sm text-secondary-700 font-gotham">
                      Bültenimize abone olun ve SDS ve SDS Eğitim hakkında düzenli bilgi ve teklifler alın.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-gotham font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Gönder
                  </button>
                </div>

                {/* Copyright */}
                <div className="text-center pt-6">
                  <p className="text-xs text-secondary-500 font-gotham">
                    © {new Date().getFullYear()} - Tüm hakları saklıdır.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm