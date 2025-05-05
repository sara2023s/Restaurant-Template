
import React from 'react';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Chef Rani Perera",
      role: "Executive Chef",
      bio: "With over 20 years of culinary experience, Chef Rani brings the authentic flavors of her childhood in Colombo to every dish she creates.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Malik Jayawardena",
      role: "Restaurant Manager",
      bio: "Malik ensures that every guest has an exceptional dining experience, from the moment they walk in until the final farewell.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Priya Fernando",
      role: "Sous Chef",
      bio: "Priya specializes in the vegetarian dishes of Sri Lanka's central highlands, bringing fresh, innovative flavors to our menu.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80"
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-28 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1000&q=80)`,
        }}
      >
        <div className="container text-center text-white">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">Our Story</h1>
          <p className="text-xl max-w-xl mx-auto opacity-80">
            The journey behind Sri Lankan Sizzle and our passion for authentic cuisine
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="From Colombo to Your Table"
                subtitle="The story of how our restaurant came to be"
              />
              <p className="text-gray-700 mb-6">
                Sri Lankan Sizzle began as a small family-run street food stall in Colombo over two 
                decades ago. Founded by the Perera family, our recipes have been passed down through 
                generations, each adding their own unique twist while preserving the authentic flavors 
                of Sri Lanka.
              </p>
              <p className="text-gray-700 mb-6">
                When the Perera family moved abroad, they brought with them not just recipes, but a 
                vision to share the rich culinary heritage of Sri Lanka with the world. What started 
                as homesick cooking for friends soon blossomed into catering services, pop-up 
                restaurants, and finally, our permanent location.
              </p>
              <p className="text-gray-700">
                Today, Sri Lankan Sizzle continues to honor those roots while embracing innovation. 
                Each dish tells a story of our island nation - its colonial influences, its vibrant 
                street food culture, and its incredible array of spices and ingredients.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80" 
                alt="Sri Lankan street food" 
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80" 
                alt="Traditional cooking" 
                className="rounded-lg shadow-lg mt-8 w-full h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80" 
                alt="Sri Lankan spices" 
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" 
                alt="Sri Lankan landscape" 
                className="rounded-lg shadow-lg mt-8 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Inspiration */}
      <section className="section bg-coconut">
        <div className="container">
          <SectionHeading
            title="Our Cultural Inspiration"
            subtitle="The rich heritage behind our cuisine"
            centered
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md p-6 hover-lift">
              <div className="w-16 h-16 rounded-full bg-turmeric flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Geographic Diversity</h3>
              <p className="text-gray-700">
                From coastal seafood dishes to highland vegetarian specialties, our menu reflects the diverse 
                geographical regions of Sri Lanka, each with their unique ingredients and cooking methods.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover-lift">
              <div className="w-16 h-16 rounded-full bg-chili flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Cultural Fusion</h3>
              <p className="text-gray-700">
                Sri Lankan cuisine bears the marks of its colonial past, with Portuguese, Dutch, and British 
                influences mingling with South Indian, Malay, and indigenous cooking traditions.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover-lift">
              <div className="w-16 h-16 rounded-full bg-curry-leaf flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Spice Heritage</h3>
              <p className="text-gray-700">
                Sri Lanka's history as a spice island is central to our cooking. We use cinnamon, cardamom, 
                cloves and other spices that have been traded from our shores for thousands of years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The talented people behind our exceptional cuisine"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center hover-lift">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{member.name}</h3>
                <p className="text-turmeric font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-gray-900 text-white">
        <div className="container">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-turmeric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Authenticity</h3>
              <p className="text-gray-300">We never compromise on traditional flavors and preparation methods.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-turmeric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Quality</h3>
              <p className="text-gray-300">We source the freshest ingredients and finest spices for every dish.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-turmeric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Innovation</h3>
              <p className="text-gray-300">We respect tradition while embracing new techniques and presentations.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-turmeric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Community</h3>
              <p className="text-gray-300">We support local producers and give back to both local and Sri Lankan communities.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
