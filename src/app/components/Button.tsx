'use client'
import React from 'react'

// Button variant tipleri - yeni customOutline eklendi
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'customOutline'
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | 'custom16'

// Button props interface
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  children: React.ReactNode
  rounded?: string // Custom border radius için
}

// Variant sınıfları - yeni customOutline stili eklendi
const variantClasses = {
  primary: 'bg-primary-500 hover:bg-primary-600 text-white shadow-md hover:shadow-hover-small',
  secondary: 'bg-secondary-600 hover:bg-secondary-700 text-white shadow-md hover:shadow-hover-small',
  outline: 'bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
  ghost: 'bg-transparent text-primary-500 hover:bg-primary-50',
  danger: 'bg-error-500 hover:bg-error-600 text-white shadow-md hover:shadow-hover-small',
  customOutline: `
    bg-[#f9f9f9] 
    text-[#005752] 
    border 
    border-[#e0e0e0] 
    hover:bg-[#005752] 
    hover:text-white 
    hover:border-[#005752]
    focus:ring-2 
    focus:ring-[rgba(190,203,203,0.5)]
    active:bg-[#005752] 
    active:text-white 
    active:border-[#005752]
    active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.125)]
    disabled:text-[#005752] 
    disabled:bg-white 
    disabled:border-white
    transition-all 
    duration-200
  `.replace(/\s+/g, ' ').trim()
}

// Size sınıfları
const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
  xl: 'px-8 py-4 text-xl',
  custom16: 'px-6 py-3 text-[16px]', // 16px font size
}

// Base button sınıfları (rounded-lg kaldırıldı)
const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  icon,
  iconPosition = 'left',
  children,
  className = '',
  rounded = 'rounded-lg', // Default rounded
  disabled,
  ...props
}) => {
  // Loading durumunda disabled yap
  const isDisabled = disabled || loading

  // Sınıfları birleştir - className en sona koyuyoruz ki override edebilsin
  const buttonClasses = [
    baseClasses,
    variantClasses[variant],
    rounded, // Custom rounded sınıfı
    fullWidth ? 'w-full' : '',
    sizeClasses[size], // Size'ı className'den önce koy
    className, // className en sonda olsun ki override edebilsin
  ].filter(Boolean).join(' ')

  // Loading spinner
  const LoadingSpinner = () => (
    <svg 
      className="animate-spin h-4 w-4" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )

  return (
    <button
      className={buttonClasses}
      disabled={isDisabled}
      {...props}
    >
      {/* Sol icon veya loading */}
      {loading ? (
        <LoadingSpinner />
      ) : (
        icon && iconPosition === 'left' && (
          <span className="mr-2">{icon}</span>
        )
      )}
      
      {/* Button text */}
      <span className={loading ? 'ml-2' : ''}>
        {children}
      </span>
      
      {/* Sağ icon */}
      {!loading && icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  )
}

export default Button