
import React from 'react';

interface DishCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  spiceLevel?: 1 | 2 | 3;
  isVegetarian?: boolean;
  isSignature?: boolean;
}

const DishCard: React.FC<DishCardProps> = ({
  name,
  description,
  price,
  image,
  spiceLevel = 0,
  isVegetarian = false,
  isSignature = false,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover-lift">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        {isSignature && (
          <div className="absolute top-2 left-2 bg-turmeric text-white text-xs font-bold px-2 py-1 rounded-full">
            Signature
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display font-bold text-lg leading-tight">{name}</h3>
          <span className="font-display font-bold text-turmeric">{price}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isVegetarian && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Veg
              </span>
            )}
            
            {spiceLevel > 0 && (
              <div className="flex items-center">
                {Array.from({ length: spiceLevel }).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-chili" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
            )}
          </div>
          
          <button className="text-sm font-medium text-turmeric hover:text-amber-600 transition-colors">
            Add to Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
