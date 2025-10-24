import { useState, useEffect } from 'react';

export const useResponsive = () => {
  const [device, setDevice] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const checkDevice = () => {
      if (typeof window === 'undefined') return;
      
      const width = window.innerWidth;
      console.log('Device check - width:', width);
      
      if (width < 768) {
        setDevice('mobile');
        console.log('Device set to mobile');
      } else if (width < 1024) {
        setDevice('tablet');
        console.log('Device set to tablet');
      } else {
        setDevice('desktop');
        console.log('Device set to desktop');
      }
      setIsLoaded(true);
    };
    
    // Ejecutar inmediatamente
    checkDevice();
    
    // Agregar listener para cambios de tamaño
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  
  return {
    device,
    isMobile: device === 'mobile',
    isTablet: device === 'tablet',
    isDesktop: device === 'desktop',
    isLoaded
  };
};
