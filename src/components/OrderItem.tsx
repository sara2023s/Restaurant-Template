
import React from 'react';

interface OrderItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  onRemove: (id: number) => void;
  onQuantityChange: (id: number, quantity: number) => void;
}

const OrderItem: React.FC<OrderItemProps> = ({ 
  id, 
  name, 
  price, 
  quantity, 
  image, 
  onRemove, 
  onQuantityChange 
}) => {
  const handleIncrement = () => {
    onQuantityChange(id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(id, quantity - 1);
    }
  };

  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-200">
      <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-grow">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500 text-sm">${price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center gap-2">
        <button 
          onClick={handleDecrement}
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
          disabled={quantity <= 1}
        >
          -
        </button>
        
        <span className="w-8 text-center">{quantity}</span>
        
        <button 
          onClick={handleIncrement}
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
        >
          +
        </button>
      </div>
      
      <div className="text-right w-20 font-medium">
        ${(price * quantity).toFixed(2)}
      </div>
      
      <button 
        onClick={() => onRemove(id)}
        className="text-gray-400 hover:text-chili"
        aria-label="Remove item"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default OrderItem;
