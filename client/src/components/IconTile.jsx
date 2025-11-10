import React from "react";
import { useNavigate } from "react-router-dom";


const Icon = ({ IconComponent, imageUrl, label, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!route) return;
    
    // Mailto support
    if (route.startsWith('mailto:')) {
      window.location.href = route;
      return;
    }

    // Check if it's an external URL
    if (route.startsWith('http://') || route.startsWith('https://')) {
      window.open(route, '_blank', 'noopener,noreferrer');
    } else {
      navigate(route);
    }
  };

  const renderIcon = () => {
    // If imageUrl is provided, show an image instead of an icon
    if (imageUrl) {
      return (
        <img
          src={imageUrl}
          alt={label}
          className="w-full h-full object-cover rounded-full"
        />
      );
    }
    
    // If it's already a React element, clone to inject classes
    if (React.isValidElement(IconComponent)) {
      const existing = IconComponent.props?.className || "";
      return React.cloneElement(IconComponent, {
        className: `${existing} text-white text-2xl`.trim(),
      });
    }
    // Otherwise assume it's a component type and instantiate it
    const ComponentType = IconComponent;
    return <ComponentType className="text-white text-2xl" />;
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-center focus:outline-none group"
    >
      <div className="h-12 w-12 max-md:h-17 max-md:w-17 flex items-center justify-center bg-gray-800 rounded-full shadow-sm group-hover:shadow-md transition-shadow overflow-hidden">
        {renderIcon()}
      </div>
      <span className="block text-white text-[0.75rem] font-semibold mt-1">{label}</span>
    </button>
  );
};

export default Icon;