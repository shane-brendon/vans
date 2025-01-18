"use client";
import { useEffect, useState } from "react";

const useScreen = () => {
  const [screen, setScreen] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Only run this effect if window is defined (i.e., we are on the client)
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setScreen({
          ...screen,
          width: window.innerWidth,
          height: document.documentElement.offsetHeight,
        });
      };

      // Set initial screen size
      handleResize();

      // Listen for window resize events
      window.addEventListener("resize", handleResize);

      // Clean up the event listener on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return screen;
};

export default useScreen;
