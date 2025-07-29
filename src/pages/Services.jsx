import React, { useEffect, useState } from 'react';
import { Heart, Star, ChevronLeft, ChevronRight, Users, Clock, Award } from 'lucide-react';
import { Link} from 'react-router-dom';
const Services = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate gallery images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGalleryImage(prev => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: 'Counseling',
      icon: '👥',
      description: 'Individual and group therapy to support recovery.',
      features: ['Peer support groups', 'Substance abuse counseling', 'Crisis intervention'],
      linkText: 'Learn More',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop'
    },
    {
      title: 'Medication‑Assisted Treatment (MAT)',
      icon: '💊',
      description: 'FDA-approved medications like methadone combined with therapy.',
      features: ['Medical supervision', 'Dose adjustments', 'Behavioral counseling'],
      linkText: 'Learn More',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    },
    {
      title: 'Family Reunification',
      icon: '👨‍👩‍👧‍👦',
      description: 'Rebuild family relationships with structured therapeutic support.',
      features: ['Family therapy sessions', 'Communication workshops', 'Parenting skills'],
      linkText: 'Learn More',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop'
    },
    {
      title: 'Aftercare & Peer Support',
      icon: '🤝',
      description: 'Ongoing support post-treatment including mentoring and relapse prevention.',
      features: ['Peer support', 'Recovery education', 'Case coordination'],
      linkText: 'Learn More',
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop'
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      age: "34",
      treatment: "MAT Program",
      quote: "The staff at Serenity gave me hope when I had none. Their comprehensive approach helped me rebuild my life and reconnect with my children.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Michael R.",
      age: "28",
      treatment: "Counseling & Peer Support",
      quote: "Two years clean thanks to this program. The peer support groups showed me I wasn't alone in this journey.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Jennifer L.",
      age: "41",
      treatment: "Family Reunification",
      quote: "Not only did they help me recover, but they helped repair the relationships that mattered most to me.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face"
    }
  ];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      caption: "Group therapy session"
    },
    {
      url: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop",
      caption: "Individual counseling"
    },
    {
      url: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",
      caption: "Family therapy workshop"
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      caption: "Medical consultation"
    }
  ];

  const stats = [
    { number: "2,500+", label: "Patients Helped", icon: Users },
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "95%", label: "Success Rate", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-teal-500 rounded-full p-2 mr-3">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">Serenity</span>
                <div className="text-sm text-teal-600 font-medium">Rehabilitation Center, Inc.</div>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/*" className="text-gray-700 hover:text-teal-600 transition-colors">Home</Link>
              <Link to="/services" className="text-gray-700 hover:text-teal-600 transition-colors">Services</Link>
              <Link to="/about" className="text-gray-700 hover:text-teal-600 transition-colors">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-teal-600 transition-colors">Contact Us</Link>
               <Link to="/blog" className="text-gray-700 hover:text-teal-600 transition-colors">Our Blogs</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="text-right text-sm">
                <div className="font-semibold text-teal-600">24/7 Crisis Support</div>
                <div className="text-gray-600">248-838-3686</div>
              </div>
              <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition-colors transform hover:scale-105">
                Get Help Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner with Rotating Gallery */}
      <div className="relative w-full max-w-7xl mx-auto px-4 pt-12">
        <div className="relative rounded-lg overflow-hidden shadow-xl">
          <div className="relative w-full h-64 md:h-80">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentGalleryImage ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">{img.caption}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 right-4 flex space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentGalleryImage(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentGalleryImage ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-teal-600 text-white py-12 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <stat.icon className="h-12 w-12 mb-4 text-teal-200" />
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-teal-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="bg-gray-50 text-gray-800 py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Comprehensive Treatment Services</h1>
          <p className="text-lg text-gray-600">
            Personalized addiction recovery services including counseling, MAT,
            family therapy, peer support, and aftercare.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid gap-8 mt-12 px-4 grid-cols-1 md:grid-cols-2">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 text-5xl bg-white/90 p-2 rounded-full">
                  {svc.icon}
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-semibold mb-3">{svc.title}</h2>
                <p className="text-gray-600 mb-4">{svc.description}</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
                  {svc.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button className="w-full px-4 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-semibold">
                  {svc.linkText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Patient Testimonials */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Patient Success Stories</h2>
          
          <div className="relative bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setCurrentTestimonial(prev => 
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <ChevronLeft className="h-6 w-6 text-teal-600" />
              </button>
              
              <div className="flex-1 mx-8">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg text-gray-700 italic mb-4">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  
                  <div className="text-center">
                    <div className="font-semibold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-sm text-gray-600">
                      Age {testimonials[currentTestimonial].age} • {testimonials[currentTestimonial].treatment}
                    </div>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setCurrentTestimonial(prev => 
                  (prev + 1) % testimonials.length
                )}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <ChevronRight className="h-6 w-6 text-teal-600" />
              </button>
            </div>
            
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-teal-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Recovery Journey?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Our compassionate team is here to support you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-teal-600 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-teal-500 rounded-full p-2 mr-3">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">Serenity</span>
                  <div className="text-sm text-teal-400">Rehabilitation Center, Inc.</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Providing comprehensive addiction treatment and counseling services 
                with dignity, respect, and evidence-based care.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Methadone Maintenance</li>
                <li>Individual Counseling</li>
                <li>Group Therapy</li>
                <li>Crisis Intervention</li>
                <li>Family Support</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Emergency Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="text-red-400 font-semibold">24/7 Crisis Support</div>
                <div className="text-xl font-bold text-white">248-838-3686</div>
                <div className="text-sm">
                  If you're experiencing a medical emergency, call 911
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Serenity Rehabilitation Center, Inc. All rights reserved.</p>
            <p className="text-sm mt-2">
              Licensed addiction treatment facility. All patient information is confidential and protected under HIPAA.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;