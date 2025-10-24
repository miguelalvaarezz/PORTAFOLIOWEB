"use client";

import { useEffect, useState, useCallback, useRef } from "react";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Start as visible
  const [isMobile, setIsMobile] = useState(false);
  const [magneticPosition, setMagneticPosition] = useState({ x: 0, y: 0 });
  
  const rafRef = useRef<number | null>(null);
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const hoveredElementRef = useRef<HTMLElement | null>(null);

  // Robust mobile detection
  const detectMobile = useCallback(() => {
    const isMobileDevice = 
      window.innerWidth < 768 || 
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      ('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0);
    
    setIsMobile(isMobileDevice);
    return isMobileDevice;
  }, []);

  // Throttled mouse position update with RAF
  const updateMousePosition = useCallback((e: MouseEvent) => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    rafRef.current = requestAnimationFrame(() => {
      const newX = e.clientX;
      const newY = e.clientY;
      
      // Only update if position changed significantly (performance optimization)
      if (Math.abs(newX - lastMouseRef.current.x) > 1 || Math.abs(newY - lastMouseRef.current.y) > 1) {
        const newPosition = { x: newX, y: newY };
        setMousePosition(newPosition);
        lastMouseRef.current = newPosition;
      }
    });
  }, []);

  // Magnetic effect calculation
  const calculateMagneticEffect = useCallback((element: HTMLElement, mouseX: number, mouseY: number) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distance = Math.sqrt(
      Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2)
    );
    
    const maxDistance = Math.max(rect.width, rect.height) * 1.5;
    const strength = Math.max(0, 1 - distance / maxDistance);
    
    if (strength > 0.1) {
      const magneticX = centerX + (mouseX - centerX) * 0.3 * strength;
      const magneticY = centerY + (mouseY - centerY) * 0.3 * strength;
      return { x: magneticX, y: magneticY };
    }
    
    return { x: mouseX, y: mouseY };
  }, []);

  // Enhanced mouse move with magnetic effect
  const handleMouseMove = useCallback((e: MouseEvent) => {
    updateMousePosition(e);
    
    if (hoveredElementRef.current) {
      const magneticPos = calculateMagneticEffect(
        hoveredElementRef.current, 
        e.clientX, 
        e.clientY
      );
      setMagneticPosition(magneticPos);
    } else {
      setMagneticPosition({ x: e.clientX, y: e.clientY });
    }
  }, [updateMousePosition, calculateMagneticEffect]);

  // Handle element hover with magnetic effect
  const handleElementEnter = useCallback((element: HTMLElement) => {
    hoveredElementRef.current = element;
    setIsHovering(true);
    
    // Apply magnetic transform to element
    element.style.transform = 'scale(1.05)';
    element.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
  }, []);

  const handleElementLeave = useCallback((element: HTMLElement) => {
    hoveredElementRef.current = null;
    setIsHovering(false);
    
    // Reset element transform
    element.style.transform = 'scale(1)';
    element.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
  }, []);

  // Setup event listeners with proper cleanup
  useEffect(() => {
    if (detectMobile()) {
      setIsVisible(false);
      return;
    }

    // Add main event listeners
    document.addEventListener("mousemove", handleMouseMove);

    // Setup interactive elements with MutationObserver for dynamic content
    const interactiveElements = document.querySelectorAll(
      "button, a, [data-cursor-magnetic], [data-cursor-hover]"
    );

    const addElementListeners = (element: Element) => {
      const htmlElement = element as HTMLElement;
      htmlElement.addEventListener("mouseenter", () => handleElementEnter(htmlElement));
      htmlElement.addEventListener("mouseleave", () => handleElementLeave(htmlElement));
    };

    const removeElementListeners = (element: Element) => {
      const htmlElement = element as HTMLElement;
      htmlElement.removeEventListener("mouseenter", () => handleElementEnter(htmlElement));
      htmlElement.removeEventListener("mouseleave", () => handleElementLeave(htmlElement));
    };

    // Add listeners to existing elements
    interactiveElements.forEach(addElementListeners);

    // Watch for new interactive elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            if (element.matches("button, a, [data-cursor-magnetic], [data-cursor-hover]")) {
              addElementListeners(element);
            }
            // Check children
            element.querySelectorAll("button, a, [data-cursor-magnetic], [data-cursor-hover]")
              .forEach(addElementListeners);
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Handle window resize for mobile detection
    const handleResize = () => {
      if (detectMobile()) {
        setIsVisible(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      // Cleanup main listeners
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      
      // Cleanup RAF
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      // Cleanup element listeners
      interactiveElements.forEach(removeElementListeners);
      
      // Cleanup observer
      observer.disconnect();
    };
  }, [detectMobile, handleMouseMove, handleElementEnter, handleElementLeave]);

  // Don't render on mobile
  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: `translate(${magneticPosition.x - 8}px, ${magneticPosition.y - 8}px)`,
        }}
      >
        <div
          className={`w-4 h-4 rounded-full bg-white transition-all duration-200 ease-out ${
            isHovering ? "scale-150 bg-blue-500" : "scale-100"
          }`}
        />
      </div>

      {/* Cursor trail */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
        style={{
          transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px)`,
        }}
      >
        <div
          className={`w-6 h-6 rounded-full border-2 border-white transition-all duration-300 ease-out ${
            isHovering ? "scale-200 border-blue-500" : "scale-100"
          }`}
        />
      </div>

      {/* Global styles */}
      <style jsx global>{`
        /* Hide default cursor on desktop only */
        @media (min-width: 768px) {
          * {
            cursor: none !important;
          }
        }
        
        /* Show default cursor on mobile */
        @media (max-width: 767px) {
          * {
            cursor: auto !important;
          }
        }
        
        /* Smooth transitions for interactive elements */
        button, a, [data-cursor-magnetic], [data-cursor-hover] {
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      `}</style>
    </>
  );
}
