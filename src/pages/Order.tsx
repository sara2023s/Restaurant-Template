
import React, { useState } from 'react';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import DishCard from '../components/DishCard';
import OrderItem from '../components/OrderItem';
import { useToast } from '@/hooks/use-toast';

// Menu categories and items data (simplified version from Menu.tsx)
const menuData = {
  popular: [
    {
      id: 1,
      name: "Kottu Roti",
      description: "Chopped flatbread mixed with spices, vegetables, and your choice of protein.",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
      spiceLevel: 2,
      isSignature: true
    },
    {
      id: 2,
      name: "Lamprais",
      description: "Rice, meat curry, and accompaniments wrapped in a banana leaf and baked.",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
      spiceLevel: 3,
      isSignature: true
    },
    {
      id: 3,
      name: "Jackfruit Curry",
      description: "Young jackfruit simmered in coconut milk with aromatic spices.",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      isVegetarian: true,
      spiceLevel: 1
    },
    {
      id: 4,
      name: "Crab Curry",
      description: "Fresh crab cooked in a rich, spicy coconut sauce with curry leaves.",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
      spiceLevel: 3
    },
  ],
  starters: [
    {
      id: 5,
      name: "Mutton Rolls",
      description: "Crispy crêpes filled with tender spiced mutton, potatoes, and aromatics.",
      price: 7.99,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
      spiceLevel: 2
    },
    {
      id: 6,
      name: "Isso Vadai",
      description: "Spicy lentil fritters topped with prawns, onions, and green chili.",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
      spiceLevel: 2
    },
  ]
};

// Types
interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Order: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("popular");
  const [cart, setCart] = useState<OrderItem[]>([]);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  });
  const { toast } = useToast();

  const categories = [
    { id: "popular", name: "Popular" },
    { id: "starters", name: "Starters" },
  ];

  // Cart functions
  const addToCart = (item: any) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }

    toast({
      title: "Item added",
      description: `${item.name} has been added to your order.`,
    });
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Calculate totals
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryFee = 3.99;
  const total = subtotal + deliveryFee;

  // Form handling
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This would connect to a real backend in a full implementation
    // For now, show a success message
    toast({
      title: "Order Submitted",
      description: "Your order has been received! This is a UI demo only.",
    });
  };

  return (
    <Layout>
      <section className="py-12">
        <div className="container">
          <SectionHeading
            title="Order Online"
            subtitle="Browse our menu and place your order for pickup or delivery"
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Menu Selection */}
            <div className="lg:col-span-2">
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-4 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-6 py-2 rounded-full font-medium transition-all ${
                      activeCategory === category.id
                        ? "bg-turmeric text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Menu Items */}
              <div className="grid sm:grid-cols-2 gap-6">
                {menuData[activeCategory as keyof typeof menuData].map((dish) => (
                  <div key={dish.id} className="relative">
                    <DishCard
                      name={dish.name}
                      description={dish.description}
                      price={`$${dish.price.toFixed(2)}`}
                      image={dish.image}
                      spiceLevel={dish.spiceLevel as 1 | 2 | 3}
                      isVegetarian={dish.isVegetarian}
                      isSignature={dish.isSignature}
                    />
                    <button 
                      className="absolute bottom-4 right-4 bg-turmeric text-white py-1 px-3 rounded hover:bg-amber-600 transition-colors"
                      onClick={() => addToCart(dish)}
                    >
                      Add to Order
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-display font-bold text-xl mb-6">Your Order</h3>

              {cart.length === 0 ? (
                <p className="text-gray-500 mb-6">Your cart is empty</p>
              ) : (
                <>
                  <div className="mb-6">
                    {cart.map((item) => (
                      <OrderItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        image={item.image}
                        onRemove={removeFromCart}
                        onQuantityChange={updateQuantity}
                      />
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Delivery Fee</span>
                      <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </>
              )}

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={customerInfo.name}
                      onChange={handleInputChange}
                      className="w-full rounded-md border-gray-300 py-2 px-3 bg-white border focus:border-turmeric focus:ring focus:ring-turmeric/20"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={customerInfo.email}
                      onChange={handleInputChange}
                      className="w-full rounded-md border-gray-300 py-2 px-3 bg-white border focus:border-turmeric focus:ring focus:ring-turmeric/20"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={customerInfo.phone}
                      onChange={handleInputChange}
                      className="w-full rounded-md border-gray-300 py-2 px-3 bg-white border focus:border-turmeric focus:ring focus:ring-turmeric/20"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Delivery Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={customerInfo.address}
                      onChange={handleInputChange}
                      className="w-full rounded-md border-gray-300 py-2 px-3 bg-white border focus:border-turmeric focus:ring focus:ring-turmeric/20"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                      Special Instructions
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={customerInfo.notes}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full rounded-md border-gray-300 py-2 px-3 bg-white border focus:border-turmeric focus:ring focus:ring-turmeric/20"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full btn btn-primary py-3 mt-6"
                  disabled={cart.length === 0}
                >
                  Place Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Order;
