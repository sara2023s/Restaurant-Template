
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import DishCard from '../components/DishCard';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const signatureDishes = [
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
      name: "Pol Sambol",
      description: "Fresh coconut relish with red chili, lime juice, and Maldive fish. The perfect accompaniment.",
      price: "$5.99",
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
      isVegetarian: true,
      isSignature: true
    },
  ];

  return (
    <Layout>
      <HeroSection 
        title="Experience Authentic Sri Lankan Cuisine"
        subtitle="Bold flavors, vibrant spices, and rich cultural heritage on every plate"
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80"
        buttonText="Explore Our Menu"
        buttonLink="/menu"
      />

      {/* About Section */}
      <section className="section bg-coconut">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">Welcome to <span className="text-gradient">Sri Lankan Sizzle</span></h2>
              <p className="text-gray-700 mb-6">
                Step into a world of bold flavors and aromatic spices at Sri Lankan Sizzle. 
                Our culinary journey brings authentic Sri Lankan cuisine with a modern twist to 
                your table, celebrating the rich heritage and vibrant culture of the island nation.
              </p>
              <p className="text-gray-700 mb-6">
                Each dish tells a unique story of Sri Lanka's diverse influences, from ancient 
                trade routes to colonial histories, all coming together on your plate in a 
                perfect harmony of taste and tradition.
              </p>
              <Link to="/about" className="btn btn-primary px-6 py-2">
                Our Story
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80" 
                alt="Sri Lankan cuisine" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 w-40">
                <p className="text-turmeric font-display font-bold">15+ Years</p>
                <p className="text-gray-600 text-sm">of culinary excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="Our Signature Dishes"
            subtitle="Experience the bold flavors and aromatic spices that define Sri Lankan cuisine"
            centered
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {signatureDishes.map((dish, index) => (
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
          
          <div className="mt-12 text-center">
            <Link to="/menu" className="btn btn-primary px-8 py-3">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-gray-900 text-white">
        <div className="container text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">Ready to Embark on a Culinary Journey?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Experience the authentic flavors of Sri Lanka from the comfort of your home. Our online ordering makes it easy to enjoy your favorite dishes.
          </p>
          <Link to="/order" className="btn bg-chili text-white hover:bg-red-600 px-8 py-3">
            Order Now
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
