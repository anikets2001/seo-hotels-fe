import { useEffect, useRef } from 'react';

/**
 * Custom hook to detect clicks outside of a specified element
 * @param {Function} callback - Function to call when click outside is detected
 * @param {boolean} enabled - Whether the listener should be active (default: true)
 * @returns {React.RefObject} - Ref to attach to the element to monitor
 */
export const useClickAwayListener = (callback, enabled = true) => {
  const ref = useRef();

  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (event) => {
      // Check if the click target is outside the ref element
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    // Add event listener with a small delay to avoid immediate triggering
    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [callback, enabled]);

  return ref;
}; 