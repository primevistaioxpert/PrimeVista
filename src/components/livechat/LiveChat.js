"use client";
import { useEffect } from "react";

const LiveChat = () => {
  useEffect(() => {
    const tawk = document.createElement("script");
    tawk.src = "https://embed.tawk.to/67d5871baf2c701915a9e6c5/1imd1fh2b";
    tawk.async = true;
    tawk.charset = "UTF-8";
    tawk.setAttribute("crossorigin", "*");
    document.body.appendChild(tawk);

    // Wait and hide branding
    setTimeout(() => {
      const observer = new MutationObserver(() => {
        let tawkFooter = document.querySelector("a[href*='tawk.to/?utm_source=tawk-messenger']");
        if (tawkFooter) {
          tawkFooter.style.display = "none";
          observer.disconnect();
        }
        else 
        {
            console.log("Tawk Not found");
        }
      });

      observer.observe(document.body, { childList: true, subtree: true });
    }, 3000);

    return () => {
      document.body.removeChild(tawk);
    };
  }, []);

  return null;
};

export default LiveChat;
