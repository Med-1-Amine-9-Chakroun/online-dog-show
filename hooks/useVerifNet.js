import { useState, useEffect } from "react";

// This hook will return the current network status (online/offline)
export default function useVerifNet() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Handlers to update the connection status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Add event listeners to detect connection changes
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline; // Return the current online status
}
