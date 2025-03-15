
import { useState, useEffect } from 'react';

// Custom hook to detect if the user is on a mobile device
export function useDetectMobile(){
  const [isMobile, setIsMobile] = useState(false);

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
