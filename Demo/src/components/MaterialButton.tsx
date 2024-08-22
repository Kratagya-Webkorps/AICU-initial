import React from 'react';
import '@material/web/all';

interface MaterialButtonProps {
  label: string;
  onClick: () => void;
  className?: string; 
}


// Utility function to fing bg colour from Tailwind Class
const tailwindColorToHex = (color: string) => {
  const div = document.createElement('div');
  div.className = color;
  document.body.appendChild(div);
  const computedColor = getComputedStyle(div).backgroundColor;
  document.body.removeChild(div);
  return computedColor;
};

const MaterialButton: React.FC<MaterialButtonProps> = ({ label, onClick, className }) => {
  const getPrimaryColor = () => {
    const colorClass = className?.split(' ').find(cls => cls.startsWith('bg-'));
    if (colorClass) {
      return tailwindColorToHex(colorClass);
    }
    return '#1E3A8A'; // Default color (tailwind's blue-900)
  };
  
  return (
    <div className="p-6 flex flex-col w-1/2">
      <md-filled-button
        onClick={onClick}
        style={{
          "--md-sys-color-primary":getPrimaryColor(),
        }}
        
        className={className}
      >
        {label}
      </md-filled-button>
      <p className="text-sm text-gray-600 mt-1 ">
            Already have an account?{" "}
            <a href="/login" className="text-sky-700 hover:underline">
              Login
            </a>
          </p>
    </div>
  );
};

export default MaterialButton;
