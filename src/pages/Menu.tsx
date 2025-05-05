
import React, { useState } from 'react';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import DishCard from '../components/DishCard';

// Menu categories and items data
const menuData = {
  starters: [
    {
      name: "Mutton Rolls",
      description: "Crispy crêpes filled with tender spiced mutton, potatoes, and aromatics.",
      price: "$7.99",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
      spiceLevel: 2
    },
    {
      name: "Isso Vadai",
      description: "Spicy lentil fritters topped with prawns, onions, and green chili.",
      price: "$8.99",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
      spiceLevel: 2
    },
    {
      name: "Vegetable Cutlets",
      description: "Golden-fried vegetable and potato patties with a blend of Sri Lankan spices.",
      price: "$6.99",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
      isVegetarian: true
    },
  ],
  mains: [
    {
      name: "Kottu Roti",
      description: "Chopped flatbread mixed with spices, vegetables, and your choice of protein. A street food sensation.",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
      spiceLevel: 2,
      isSignature: true
    },
    {
      name: "Lamprais",
      description: "Rice, meat curry, and accompaniments wrapped in a banana leaf and baked to perfection.",
      price: "$16.99",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
      spiceLevel: 3,
      isSignature: true
    },
    {
      name: "Jackfruit Curry",
      description: "Young jackfruit simmered in coconut milk with aromatic spices. A vegan delight.",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      isVegetarian: true,
      spiceLevel: 1
    },
    {
      name: "Crab Curry",
      description: "Fresh crab cooked in a rich, spicy coconut sauce with curry leaves and pandan.",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
      spiceLevel: 3
    },
  ],
  desserts: [
    {
      name: "Watalappan",
      description: "A rich, steamed custard made with jaggery, coconut milk, and warm spices.",
      price: "$6.99",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
      isVegetarian: true
    },
    {
      name: "Curd and Treacle",
      description: "Creamy buffalo curd served with sweet palm treacle. Simple and divine.",
      price: "$5.99",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      isVegetarian: true
    },
  ],
  drinks: [
    {
      name: "King Coconut Water",
      description: "Fresh, naturally sweet water from the orange-hued king coconut. Refreshing and hydrating.",
      price: "$3.99",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
      isVegetarian: true
    },
    {
      name: "Ginger Beer",
      description: "Spicy, sweet homemade ginger beer with a hint of lime and lemongrass.",
      price: "$4.99",
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
      isVegetarian: true
    },
  ]
};

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("starters");

  const categories = [
    { id: "starters", name: "Starters" },
    { id: "mains", name: "Main Courses" },
    { id: "desserts", name: "Desserts" },
    { id: "drinks", name: "Drinks" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-28 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80)`,
        }}
      >
        <div className="container text-center text-white">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">Our Menu</h1>
          <p className="text-xl max-w-xl mx-auto opacity-80">
            Explore the rich flavors and vibrant spices of authentic Sri Lankan cuisine
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-12">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuData[activeCategory as keyof typeof menuData].map((dish, index) => (
              <DishCard
                key={index}
                name={dish.name}
                description={dish.description}
                price={dish.price}
                image={dish.image}
                spiceLevel={dish.spiceLevel as 1 | 2 | 3}
                isVegetarian={dish.isVegetarian}
                isSignature={dish.isSignature}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Dietary Information */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Dietary Information"
            subtitle="We're committed to accommodating all dietary preferences and requirements"
            centered
          />

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover-lift">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg mb-2">Vegetarian</h3>
              <p className="text-gray-600 text-sm">Plant-based options available across our menu</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover-lift">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg mb-2">Gluten Free</h3>
              <p className="text-gray-600 text-sm">Options that exclude wheat and other gluten sources</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover-lift">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg mb-2">Allergens</h3>
              <p className="text-gray-600 text-sm">Clear labeling of all potential allergens</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover-lift">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg mb-2">Group Dining</h3>
              <p className="text-gray-600 text-sm">Special menus for larger groups and events</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
