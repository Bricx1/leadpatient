import React, { useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: 'Counseling',
      icon: '👥',
      description: 'Individual and group therapy to support recovery.',
      features: ['Peer support groups', 'Substance abuse counseling', 'Crisis intervention'],
      linkText: 'Learn More'
    },
    {
      title: 'Medication‑Assisted Treatment (MAT)',
      icon: '💊',
      description: 'FDA-approved medications like methadone combined with therapy.',
      features: ['Medical supervision', 'Dose adjustments', 'Behavioral counseling'],
      linkText: 'Learn More'
    },
    {
      title: 'Family Reunification',
      icon: '👨‍👩‍👧‍👦',
      description: 'Rebuild family relationships with structured therapeutic support.',
      features: ['Family therapy sessions', 'Communication workshops', 'Parenting skills'],
      linkText: 'Learn More'
    },
    {
      title: 'Aftercare & Peer Support',
      icon: '🤝',
      description: 'Ongoing support post-treatment including mentoring and relapse prevention.',
      features: ['Peer support', 'Recovery education', 'Case coordination'],
      linkText: 'Learn More'
    }
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
              <Link to="/services" className="text-gray-700 hover:text-teal-600 transition-colors">Services</Link>
              <Link to="/about" className="text-gray-700 hover:text-teal-600 transition-colors">About</Link>
              <a href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="text-right text-sm">
                <div className="font-semibold text-teal-600">24/7 Crisis Support</div>
                <div className="text-gray-600">248-838-3686</div>
              </div>
              <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition-colors">
                Get Help Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Banner Image */}
      <div className="w-full max-w-7xl mx-auto px-4 pt-12">
        <img
          src="/serenity-services-banner.png"
          alt="Serenity Treatment Banner"
          className="w-full rounded-lg shadow-md object-cover max-h-64"
        />
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 text-gray-800 py-16">
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
              className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <div className="text-5xl">{svc.icon}</div>
              <h2 className="text-2xl font-semibold mt-4">{svc.title}</h2>
              <p className="mt-2 text-gray-600">{svc.description}</p>
              <ul className="list-disc list-inside mt-4 text-gray-700 space-y-1">
                {svc.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="mt-6 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700">
                {svc.linkText}
              </button>
            </div>
          ))}
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
