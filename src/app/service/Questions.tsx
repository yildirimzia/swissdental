'use client'
import React, { useState } from 'react'

interface Question {
  id: number
  question: string
  answer: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "Why is it permitted to grind down SDS implants?",
    answer: "SDS implants are designed with advanced materials and engineering that allow for safe grinding when necessary for proper fit and function."
  },
  {
    id: 2,
    question: "Why do you not need a tap?",
    answer: "All SDS implants are self-tapping and, in most cases, can be placed as immediate implants."
  },
  {
    id: 3,
    question: "Why tissue level?",
    answer: "Tissue level implants provide better soft tissue management and easier maintenance for long-term success."
  },
  {
    id: 4,
    question: "Why screw and cement with 2.2?",
    answer: "The 2.2 connection provides optimal retention while allowing for easy retrievability when needed."
  },
  {
    id: 5,
    question: "During the implantation procedure, how do implants' threads get into the previous windings?",
    answer: "The advanced thread design allows for progressive engagement with the bone, creating optimal primary stability."
  },
  {
    id: 6,
    question: "From what material is your implant made?",
    answer: "Our implants are made from high-grade titanium with advanced surface treatments for optimal biocompatibility."
  },
  {
    id: 7,
    question: "How is the implant produced?",
    answer: "Our implants are manufactured using state-of-the-art precision machining and quality control processes."
  },
  {
    id: 8,
    question: "Why do you offer one-piece implants?",
    answer: "One-piece implants eliminate the implant-abutment interface, reducing bacterial leakage and simplifying the procedure."
  },
  {
    id: 9,
    question: "How does the prosthetic restoration work?",
    answer: "Our prosthetic system is designed for simplicity and reliability, with clear protocols for optimal results."
  },
  {
    id: 10,
    question: "How is primary stability ensured if you prefer zero torque in cortical bone?",
    answer: "Primary stability is achieved through optimal thread design and bone preparation techniques that don't require high torque values."
  },
  {
    id: 11,
    question: "What about damage, problems with the product and breakages?",
    answer: "SDS implants come with comprehensive warranty coverage and our quality control ensures minimal risk of product issues."
  },
  {
    id: 12,
    question: "What are the main features of your product compared to the competition?",
    answer: "Our implants offer unique self-tapping design, tissue-level placement, superior biocompatibility, and simplified surgical protocols."
  },
  {
    id: 13,
    question: "How can I get started with SDS? Which offers/specials do you have?",
    answer: "We offer comprehensive starter packages, training programs, and special introductory pricing for new practitioners."
  },
  {
    id: 14,
    question: "Introductory course as a MUST. Why? I have been placing implants for 20 years!",
    answer: "Even experienced practitioners benefit from understanding our unique protocols and techniques to maximize success rates."
  },
  {
    id: 15,
    question: "Which colleagues already work with your system?",
    answer: "We have a growing network of practitioners worldwide who have successfully integrated SDS implants into their practice."
  },
  {
    id: 16,
    question: "Which bone replacement material do you recommend?",
    answer: "We recommend biocompatible bone grafting materials that complement our implant system for optimal osseointegration."
  },
  {
    id: 17,
    question: "Why are dietary supplements necessary?",
    answer: "Proper nutrition and supplements support healing and osseointegration, contributing to long-term implant success."
  },
  {
    id: 18,
    question: "Do your SDS implants also heal without dietary supplements?",
    answer: "Yes, SDS implants can heal successfully without supplements, though proper nutrition always supports optimal healing."
  },
  {
    id: 19,
    question: "What do I need for the prosthetic with a 1.2 implant?",
    answer: "The 1.2 implant system includes specific prosthetic components designed for small diameter applications."
  },
  {
    id: 20,
    question: "How long is the healing time?",
    answer: "Healing times vary based on individual factors, but our implants are designed for accelerated osseointegration."
  },
  {
    id: 21,
    question: "When can I start exerting load on the implant?",
    answer: "Loading protocols depend on primary stability and bone quality, with immediate loading possible in suitable cases."
  },
  {
    id: 22,
    question: "How stable are ceramic implants?",
    answer: "Ceramic implants offer excellent biocompatibility and stability, with unique aesthetic advantages in the anterior region."
  }
]

function Questions() {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedQuestions, setExpandedQuestions] = useState<number[]>([])
  const [showAll, setShowAll] = useState(false)

  const filteredQuestions = questions.filter(q => 
    q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const displayedQuestions = showAll ? filteredQuestions : filteredQuestions.slice(0, 5)

  const toggleQuestion = (id: number) => {
    setExpandedQuestions(prev => 
      prev.includes(id) 
        ? prev.filter(qId => qId !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="pb-[100px]">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-8">
        <div className="bg-[linear-gradient(180deg,#fff_58.33%,#fff0_100%)] min-h-screen py-16rounded-2xl  p-8 lg:p-12">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center flex-col sm:flex-row justify-between mb-8">
            <div className='mb-[46px]'>
              <p className="flex items-center text-[16px] text-primary-500 mb-2font-[300] tracking-wider uppercase">
                            <span className="hidden sm:inline-block w-[100px] h-[1px] bg-mint mr-4" />

                FAQ</p>
              <h2 className="text-3xl md:text-4xl font-gotham font-bold text-primary-600 leading-[-1.2px]">
                Frequently Asked<br /> <span className='text-primary-600 font-[400]'>Questions</span>
              </h2>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-80 px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-gotham transition-all duration-300"
              />
              <svg 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </div>
          </div>
        </div>

          {/* Questions List */}
          <div className="space-y-4 mb-8">
            {displayedQuestions.map((q) => (
              <div key={q.id} className="border-b border-secondary-200 rounded-xl transition-all duration-300">
                <button
                  onClick={() => toggleQuestion(q.id)}
                  className="w-full px-6 py-4 text-left flex items-center gap-4 transition-all duration-300 rounded-xl"
                >
                  <div className="flex-shrink-0">
                    <svg 
                      className={`w-6 h-6 text-primary-600 transition-transform duration-300 ${
                        expandedQuestions.includes(q.id) ? 'rotate-45' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-gotham font-[400] text-primary-600 flex-1">
                    {q.question}
                  </span>
                </button>
                {expandedQuestions.includes(q.id) && (
                  <div className="px-6 pb-4 border-t border-secondary-100 ml-10">
                    <p className="text-secondary-700 pt-4 leading-relaxed font-gotham">
                      {q.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {filteredQuestions.length > 5 && (
            <div className="text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center px-6 py-3 text-primary-600 font-gotham font-medium hover:bg-secondary-50 rounded-lg transition-all duration-300 border border-secondary-200"
              >
                {showAll ? 'Show less' : 'Show more'}
                <svg 
                  className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                    showAll ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Questions