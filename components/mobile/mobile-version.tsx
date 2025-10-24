"use client";

import { useState } from "react";
import { MobileNavigation } from "./mobile-navigation";
import { MobileSideMenu } from "./mobile-side-menu";
import { MobileHeroSection } from "./mobile-hero-section";
import { MobileAboutSection } from "./mobile-about-section";
import { MobileProjectsSection } from "./mobile-projects-section";
import { MobileSkillsSection } from "./mobile-skills-section";
import { MobileContactSection } from "./mobile-contact-section";
import { MobileFooter } from "./mobile-footer";
import { useResponsive } from "@/hooks/useResponsive";

export function MobileVersion() {
  const { isMobile, isLoaded, device } = useResponsive();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  // Debug: mostrar información en consola
  console.log('MobileVersion Debug:', { isMobile, isLoaded, device });

  // Renderizar siempre en móvil, independientemente del hook
  return (
    <div className="mobile-version">
      <MobileNavigation onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
      <MobileSideMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
      <MobileHeroSection />
      <MobileAboutSection />
      <MobileProjectsSection />
      <MobileSkillsSection />
      <MobileContactSection />
      <MobileFooter />
    </div>
  );
}
