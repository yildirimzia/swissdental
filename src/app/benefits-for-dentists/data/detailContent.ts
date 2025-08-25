interface Section {
  title: string;
  content: string;
  features?: string[]; // Opsiyonel
  image?: string;     // Opsiyonel
  stats?: Array<{     // Opsiyonel
    label: string;
    value: string;
  }>;
}

interface DetailContent {
  hero: {
    subtitle: string;
    description: string;
  };
  sections: Section[];
}

export const DETAIL_CONTENT: Record<string, DetailContent> = {
  "tissue-level": {
    hero: {
      subtitle: "Advanced Implant Technology",
      description: "Revolutionary tissue-level implant system designed for optimal patient outcomes and clinical efficiency."
    },
    sections: [
      {
        title: "Clinical Advantages",
        content: "Our tissue-level implants represent a paradigm shift in implant dentistry, offering direct soft tissue connection that eliminates the need for traditional abutments in many cases. This innovative approach reduces bacterial colonization and improves long-term tissue health.",
        features: [
          "Direct tissue integration",
          "Reduced bacterial infiltration", 
          "Simplified prosthetic workflow",
          "Enhanced patient comfort"
        ]
      },
      {
        title: "Technical Innovation",
        content: "The precision-engineered tulip design allows for customizable emergence profiles, ensuring optimal aesthetics in the critical anterior zone while maintaining functional excellence.",
        image: "/images/details/tissue-level-tech.jpg"
      },
      {
        title: "Patient Benefits",
        content: "Patients experience shorter treatment times, reduced discomfort, and superior long-term results with our tissue-level approach.",
        stats: [
          { label: "Treatment Time Reduction", value: "40%" },
          { label: "Patient Satisfaction", value: "98%" },
          { label: "Success Rate", value: "99.2%" }
        ]
      }
    ]
  },
  
  "zirconium-dioxide": {
    hero: {
      subtitle: "Biocompatible Excellence", 
      description: "Pure zirconium dioxide implants offering unmatched biocompatibility and aesthetic results."
    },
    sections: [
      {
        title: "Material Science",
        content: "Zirconium dioxide represents the pinnacle of biocompatible implant materials. Its unique crystalline structure provides exceptional strength while maintaining complete biological neutrality.",
        features: [
          "100% metal-free composition",
          "Immune system compatibility",
          "Superior fracture resistance",
          "Natural tooth-like color"
        ]
      },
      {
        title: "Aesthetic Excellence",
        content: "The white color of zirconium dioxide eliminates the gray show-through often seen with titanium implants, especially in thin tissue biotypes.",
        image: "/images/details/zirconia-aesthetic.jpg"
      },
      {
        title: "Long-term Health",
        content: "Clinical studies demonstrate zero incidence of peri-implantitis with our zirconium dioxide implants over 5-year follow-up periods.",
        stats: [
          { label: "Peri-implantitis Rate", value: "0%" },
          { label: "Tissue Response", value: "Excellent" },
          { label: "Aesthetic Satisfaction", value: "96%" }
        ]
      }
    ]
  },
  
  "dynamic-thread": {
    hero: {
      subtitle: "Surgeon-Designed Innovation",
      description: "Thread design developed by practicing surgeons for optimal primary stability and immediate loading potential."
    },
    sections: [
      {
        title: "Surgical Excellence",
        content: "Our dynamic thread pattern was developed through extensive collaboration with oral surgeons, ensuring optimal performance in real-world clinical conditions.",
        features: [
          "Variable thread pitch design",
          "Self-cutting efficiency", 
          "Maximum primary stability",
          "Immediate loading capability"
        ]
      },
      {
        title: "Socket Preservation 2.0",
        content: "The innovative thread design maintains alveolar bone dimensions while promoting rapid osseointegration through micro-movement reduction.",
        image: "/images/details/dynamic-thread.jpg"
      },
      {
        title: "Clinical Outcomes",
        content: "Surgeons report significantly improved primary stability and predictable outcomes across all bone types.",
        stats: [
          { label: "Primary Stability", value: "Superior" },
          { label: "Immediate Loading Success", value: "94%" },
          { label: "Surgeon Satisfaction", value: "97%" }
        ]
      }
    ]
  },

  "clean-sterile": {
    hero: {
      subtitle: "Certified Sterility Standards",
      description: "Double-certified sterile implants with advanced navigation system compatibility for precise surgical outcomes."
    },
    sections: [
      {
        title: "Sterility Assurance",
        content: "Our implants undergo rigorous double certification processes, ensuring the highest levels of sterility and patient safety. Each implant is individually tested and verified before packaging.",
        features: [
          "Double sterility certification",
          "Individual quality testing",
          "Sealed sterile packaging",
          "Traceable batch numbers"
        ]
      },
      {
        title: "Navigation System Integration",
        content: "Compatible with only two accredited navigation systems, ensuring precise implant placement and optimal surgical outcomes.",
        image: "/images/details/navigation-systems.jpg"
      },
      {
        title: "Safety Standards",
        content: "Exceeds international safety standards with comprehensive quality control at every step of the manufacturing process.",
        stats: [
          { label: "Sterility Assurance", value: "100%" },
          { label: "Quality Control Tests", value: "50+" },
          { label: "Certified Systems", value: "2" }
        ]
      }
    ]
  },

  "implant-design": {
    hero: {
      subtitle: "Anatomical Precision Design",
      description: "Specialized implant designs for immediate placement with perfect anatomical preservation and custom shapes for unique clinical situations."
    },
    sections: [
      {
        title: "Anatomical Preservation",
        content: "Our implant design philosophy centers on preserving natural alveolar anatomy while enabling immediate implantation in all socket types.",
        features: [
          "Anatomical shape matching",
          "Immediate placement capability",
          "Alveolar preservation technology",
          "Custom emergence profiles"
        ]
      },
      {
        title: "Specialized Shapes",
        content: "Unique implant geometries including balcony, oval, and sinus-specific designs to address complex anatomical challenges.",
        image: "/images/details/implant-shapes.jpg"
      },
      {
        title: "Clinical Versatility",
        content: "Comprehensive range of implant designs ensures optimal solutions for every clinical scenario.",
        stats: [
          { label: "Shape Variations", value: "12+" },
          { label: "Immediate Success Rate", value: "96%" },
          { label: "Anatomical Compatibility", value: "99%" }
        ]
      }
    ]
  },

  "concept": {
    hero: {
      subtitle: "Comprehensive Education & Innovation",
      description: "Complete implant concept combining professional education, biological protocols, and continuous innovation for optimal clinical outcomes."
    },
    sections: [
      {
        title: "Education Center",
        content: "State-of-the-art professional education center with attached clinic provides hands-on training and continuing education for dental professionals.",
        features: [
          "Professional training programs",
          "Hands-on clinical experience",
          "Continuing education credits",
          "Expert instructor guidance"
        ]
      },
      {
        title: "Biological Protocols",
        content: "Evidence-based biological drilling protocols and clear algorithms ensure safe, predictable implant placement with optimal healing outcomes.",
        image: "/images/details/biological-protocols.jpg"
      },
      {
        title: "Ongoing Innovation",
        content: "Commitment to constant innovation and user training ensures practitioners stay current with the latest advances in implant dentistry.",
        stats: [
          { label: "Training Programs", value: "25+" },
          { label: "Certified Practitioners", value: "500+" },
          { label: "Innovation Projects", value: "15" }
        ]
      }
    ]
  }
};