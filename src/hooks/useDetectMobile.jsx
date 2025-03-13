
import { useState, useEffect } from 'react';
export function useDetectMobile(){
  const [isMobile, setIsMobile] = useState(false);

  // Función para detectar si el dispositivo es móvil
  const checkMobileDevice = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    console.log(userAgent);
    
    if (/mobile|android|iphone|ipod|ipad/.test(userAgent)) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    checkMobileDevice();
  }, []);

  return isMobile
};
