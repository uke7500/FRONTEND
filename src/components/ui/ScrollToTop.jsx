import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ duration = 800 }) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const scrollTo = (targetY) => {
      const start = window.scrollY;
      const distance = targetY - start;
      const startTime = performance.now();

      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic

        window.scrollTo(0, start + distance * ease);

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    if (hash) {
      // Scroll to the element specified by hash
      const scrollToHash = () => {
        const el = document.querySelector(hash);
        if (el) {
          scrollTo(el.offsetTop);
        } else {
          // If element not yet in DOM, wait a bit and try again
          requestAnimationFrame(scrollToHash);
        }
      };
      scrollToHash();
    } else {
      // No hash → scroll to top
      scrollTo(0);
    }
  }, [pathname, hash, duration]);

  return null;
};

export default ScrollToTop;
