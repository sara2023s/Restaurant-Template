
import React, { useState } from 'react';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  const businessHours = [
    { day: 'Monday', hours: '11:00 AM - 9:00 PM' },
    { day: 'Tuesday', hours: '11:00 AM - 9:00 PM' },
    { day: 'Wednesday', hours: '11:00 AM - 9:00 PM' },
    { day: 'Thursday', hours: '11:00 AM - 10:00 PM' },
    { day: 'Friday', hours: '11:00 AM - 10:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 10:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 9:00 PM' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-28 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=1000&q=80)`,
        }}
      >
        <div className="container text-center text-white">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">Contact Us</h1>
          <p className="text-xl max-w-xl mx-auto opacity-80">
            We'd love to hear from you! Reach out with questions, feedback, or to make a reservation
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <SectionHeading 
                title="Get in Touch"
                subtitle="We're here to answer any questions you may have"
              />
              
              <div className="grid sm:grid-cols-2 gap-8 mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-turmeric/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-turmeric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-2">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:(123)456-7890" className="hover:text-turmeric transition-colors">(123) 456-7890</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-turmeric/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-turmeric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-2">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@srilankansizzle.com" className="hover:text-turmeric transition-colors">info@srilankansizzle.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-turmeric/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-turmeric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-2">Location</h3>
                    <address className="not-italic text-gray-600">
                      123 Spice Lane<br />
                      Colombo District<br />
                      Sri Lanka
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-turmeric/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-turmeric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-2">Reservations</h3>
                    <p className="text-gray-600">
                      Call us or use our online form to make a reservation
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-12">
                <h3 className="font-display font-bold text-xl mb-6">Business Hours</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <table className="w-full">
                    <tbody>
                      {businessHours.map((item, index) => (
                        <tr key={index} className={index !== businessHours.length - 1 ? "border-b border-gray-200" : ""}>
                          <td className="py-3 font-medium">{item.day}</td>
                          <td className="py-3 text-right text-gray-600">{item.hours}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="font-display font-bold text-2xl mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid gap-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-turmeric focus:ring focus:ring-turmeric/20 bg-white py-2 px-3 border"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-turmeric focus:ring focus:ring-turmeric/20 bg-white py-2 px-3 border"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-turmeric focus:ring focus:ring-turmeric/20 bg-white py-2 px-3 border"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject*
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-turmeric focus:ring focus:ring-turmeric/20 bg-white py-2 px-3 border"
                      >
                        <option value="">Select a subject</option>
                        <option value="reservation">Make a Reservation</option>
                        <option value="feedback">Feedback</option>
                        <option value="catering">Catering Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-turmeric focus:ring focus:ring-turmeric/20 bg-white py-2 px-3 border"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary py-3 px-6"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Map Placeholder */}
          <div className="mt-16 rounded-lg overflow-hidden h-96 bg-gray-300">
            {/* In a real implementation, this would be replaced with an actual map */}
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-500 text-lg font-medium">Map would be displayed here</p>
                <p className="text-gray-400">123 Spice Lane, Colombo District, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-curry-leaf text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
            <div className="md:w-1/2">
              <h2 className="font-display font-bold text-3xl mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-white/80">
                Stay updated with our latest offerings, special events, and exclusive promotions.
              </p>
            </div>
            
            <div className="w-full md:w-1/2">
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow rounded-md bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white focus:ring focus:ring-white/30"
                />
                <button type="submit" className="bg-white text-curry-leaf font-medium px-6 py-2 rounded-md hover:bg-white/90 transition-colors">
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-white/60 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
