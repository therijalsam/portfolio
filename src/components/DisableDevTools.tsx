import { useEffect } from 'react';

const DisableDevTools: React.FC = () => {
  useEffect(() => {
    const disableRightClick = (e: MouseEvent) => {
      e.preventDefault();
    };

    const disableF12 = (e: KeyboardEvent) => {
      if (e.key === 'F12') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', disableRightClick);  // Disable right-click
    document.addEventListener('keydown', disableF12);  // Disable F12

    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('keydown', disableF12);
    };
  }, []);

  return null;
};

export default DisableDevTools;
