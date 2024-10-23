import { useEffect, useState } from 'react';

 const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1024);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check rather than relying solely on user interaction

    return () => {
      window.removeEventListener('resize', handleResize); //This cleanup function is executed when the component is unmounted or before the effect is re-run.
    };
  }, []);

  return isMobile;
};
export default useIsMobile;


