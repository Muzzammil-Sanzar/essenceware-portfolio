import { useEffect } from "react";

export default function HubSpotChat() {
  useEffect(() => {
    // Avoid HubSpot chat script re-initialization
    if (window.HubSpotConversations) return;

    const script = document.createElement('script');
    script.src = '//js-na1.hs-scripts.com/46396866.js'; // Replace YOUR_HUBSPOT_ID with your HubSpot Portal ID
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialization code or settings can go here, if any
      if (window.HubSpotConversations) {
        window.HubSpotConversations.widget.load();
        window.HubSpotConversations.widget.open(); // To open chat
        window.HubSpotConversations.widget.close(); // To close chat
      }
    };

    return () => {
      // Cleanup the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
