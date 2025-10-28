import { HeroSection } from "@/components/padelnova/hero-section";
import { AboutSection } from "@/components/padelnova/about-section";
import { ReservasSection } from "@/components/padelnova/reservas-section";
import { TorneosSection } from "@/components/padelnova/torneos-section";
import { InstalacionesSection } from "@/components/padelnova/instalaciones-section";
import { ContactSection } from "@/components/padelnova/contact-section";
import { Navigation } from "@/components/padelnova/navigation";
import { Footer } from "@/components/padelnova/footer";

export default function PadelNovaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      
      {/* Section Transition - Black to White */}
      <div className="relative bg-black">
        <svg className="w-full h-40" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="blackToWhite" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor:'#000000',stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:'#ffffff',stopOpacity:1}} />
            </linearGradient>
          </defs>
          <path d="M0,200 L0,0 C200,20 400,40 600,60 C800,80 1000,120 1200,140 L1200,200 Z" fill="url(#blackToWhite)" />
        </svg>
      </div>
      
      <AboutSection />
      
      {/* Section Transition */}
      <div className="relative">
        <svg className="w-full h-20 text-white" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path d="M0,100 L0,50 C80,30 160,70 240,25 C320,0 400,40 480,15 C560,0 640,30 720,10 C800,0 880,25 960,5 C1040,0 1120,15 1200,10 L1200,100 Z" fill="currentColor" />
        </svg>
      </div>
      
      <ReservasSection />
      
      {/* Section Transition */}
      <div className="relative">
        <svg className="w-full h-40 text-[#D6E826]" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <path d="M0,200 L0,0 C200,6 400,12 600,25 C800,50 1000,100 1200,200 L1200,200 Z" fill="currentColor" />
        </svg>
      </div>
      
      <TorneosSection />
      
      {/* Section Transition - Green to White */}
      <div className="relative bg-[#D6E826]">
        <svg className="w-full h-40" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="greenToWhite" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor:'#D6E826',stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:'#ffffff',stopOpacity:1}} />
            </linearGradient>
          </defs>
          <path d="M0,200 L0,0 C200,20 400,40 600,50 C800,60 1000,80 1200,100 L1200,200 Z" fill="url(#greenToWhite)" />
        </svg>
      </div>
      
      <InstalacionesSection />
      
      {/* Section Transition */}
      <div className="relative">
        <svg className="w-full h-20 text-white" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path d="M0,100 L0,50 C80,30 160,70 240,25 C320,0 400,40 480,15 C560,0 640,30 720,10 C800,0 880,25 960,5 C1040,0 1120,15 1200,10 L1200,100 Z" fill="currentColor" />
        </svg>
      </div>
      
      <ContactSection />
      <Footer />
    </main>
  );
}
