import { notFound } from 'next/navigation';
import { DETAIL_CONTENT } from '../data/detailContent'; // Path düzelt
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../components/Button'; // Path düzelt

interface PageProps {
  params: {
    slug: string;
  };
}

const CARD_INFO = {
  "tissue-level": {
    title: "Tissue level",
    icon: "/images/benefits-for-patients/tissueLevel.svg"
  },
  "zirconium-dioxide": {
    title: "Zirconium dioxide", 
    icon: "/images/benefits-for-patients/tabler_affiliate.svg"
  },
  "dynamic-thread": {
    title: "Dynamic thread",
    icon: "/images/benefits-for-patients/Dynamic_Thread.svg"
  },
  "clean-sterile": {
    title: "Clean & sterile",
    icon: "/images/benefits-for-patients/CleanImplant.png"
  },
  "implant-design": {
    title: "Implant design", 
    icon: "/images/benefits-for-patients/ImplantDesign.svg"
  },
  "concept": {
    title: "Concept",
    icon: "/images/benefits-for-patients/Group.svg"
  },
} as const;

export default function CardDetailPage({ params }: PageProps) {
  const { slug } = params;
  
  if (!DETAIL_CONTENT[slug as keyof typeof DETAIL_CONTENT]) {
    notFound();
  }
  
  const content = DETAIL_CONTENT[slug as keyof typeof DETAIL_CONTENT];
  const cardInfo = CARD_INFO[slug as keyof typeof CARD_INFO];
  
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Back Button - Path düzelt */}
          <div className="mb-8">
            <Link href="/benefits-for-dentists">
              <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-primary-600">
                ← Back to Benefits
              </Button>
            </Link>
          </div>
          
          {/* Hero Content */}
          <div className="flex items-center gap-8 mb-8">
            <div className="bg-white/10 p-6 rounded-2xl">
              <Image 
                src={cardInfo.icon} 
                alt="" 
                width={80} 
                height={80} 
                className="h-20 w-20 object-contain filter brightness-0 invert"
              />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-4">{cardInfo.title}</h1>
              <p className="text-xl text-primary-100 mb-2">{content.hero.subtitle}</p>
            </div>
          </div>
          
          <p className="text-lg leading-relaxed max-w-3xl">
            {content.hero.description}
          </p>
        </div>
      </section>
      
      {/* Content Sections */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">
          
          {content.sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-8">
              
              <h2 className="text-3xl font-bold text-primary-600 mb-6">
                {section.title}
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {section.content}
              </p>
              
              {/* Features */}
              {section.features && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-primary-600 mb-4">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Image */}
              {section.image && (
                <div className="mb-8">
                  <Image 
                    src={section.image} 
                    alt={section.title}
                    width={800}
                    height={400}
                    className="w-full rounded-xl"
                  />
                </div>
              )}
              
              {/* Stats */}
              {section.stats && (
                <div className="grid md:grid-cols-3 gap-6">
                  {section.stats.map((stat, i) => (
                    <div key={i} className="text-center bg-primary-50 p-6 rounded-xl">
                      <div className="text-3xl font-bold text-primary-600 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
            </div>
          ))}
          
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-primary-600 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Learn More?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Contact our team for detailed information about {cardInfo.title.toLowerCase()} solutions.
          </p>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary-600">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
      
    </div>
  );
}