import React from 'react';
import { Phone, Mail, MapPin, FileText, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="bg-white">
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
              <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition-colors">
                Get Help Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Map & Form Section */}
      <div className="relative w-full">
        <iframe
          title="Serenity Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2939.397180574375!2d-83.29732968453194!3d42.64213977916959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824c987d07155b1%3A0xa7b5dc55ec8bbce6!2s673%20Martin%20Luther%20King%20Jr%20Blvd%20N%2C%20Pontiac%2C%20MI%2048342!5e0!3m2!1sen!2sus!4v1700000000000"
          className="w-full h-[500px] grayscale"
          loading="lazy"
        ></iframe>

        {/* Floating Form Card */}
        <div className="absolute inset-0 flex justify-center items-center mt-20 pointer-events-none">
          <div className="flex flex-col md:flex-row gap-6 pointer-events-auto bg-white rounded-xl shadow-xl p-8 max-w-5xl w-full mx-4">
            {/* Contact Form */}
            <div className="flex-1 space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Get In Touch!</h2>
              <p className="text-sm text-gray-500">
                Don’t have time for a phone call? Submit your request and we’ll reach out to you.
              </p>
              <form className="space-y-4 text-sm font-medium">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                  <input type="email" placeholder="Email" className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                  <select className="w-full rounded-full border border-gray-300 px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400" defaultValue="">
                    <option value="" disabled>Select Service</option>
                    <option>Counseling And Drug Screening</option>
                    <option>Medication-Assisted Treatment</option>
                    <option>Individual and Group Therapy</option>
                    <option>Peer Support</option>
                    <option>Family Reunification</option>
                    <option>Case Management</option>
                    <option>After Care Services</option>
                  </select>
                  <input type="text" placeholder="Phone" className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <textarea placeholder="Write your message here..." className="w-full rounded-xl border border-gray-300 px-4 py-2 resize-none h-24 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <button type="submit" className="w-full bg-blue-900 text-white rounded-full py-2 hover:bg-blue-800 transition">Submit Request</button>
              </form>
            </div>

            {/* Quick Contacts */}
            <div className="bg-teal-500 text-white p-6 rounded-xl w-full md:max-w-sm">
              <h3 className="text-lg font-semibold mb-4">Quick Contacts</h3>
              <p className="text-sm mb-2">Please feel free to contact our friendly staff with any inquiry.</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2"><Phone className="h-4 w-4" /><span className="font-bold">248-838-3686</span></div>
                <div className="flex items-center gap-2 text-sm"><MapPin className="h-4 w-4" /> 673 Martin Luther King Jr Blvd N, Pontiac, MI 48342</div>
                <div className="text-xs mt-2">Mon – Sat: 6:00 am – 2:00 pm</div>
              </div>
              <a href="/about" className="mt-4 inline-block text-sm underline text-white/90">About Us</a>
            </div>
          </div>
        </div>
      </div>

      {/* Brochures */}
      <div className="text-center mt-56 mb-8">
        <a href="/Counseling-Brochure.pdf" className="bg-blue-900 text-white py-2 px-4 rounded-full text-sm hover:bg-blue-800 mx-2 inline-flex items-center gap-1" download>
          <FileText className="w-4 h-4" /> Counseling Brochure
        </a>
        <a href="/Methadone-Brochure.pdf" className="bg-teal-600 text-white py-2 px-4 rounded-full text-sm hover:bg-teal-500 mx-2 inline-flex items-center gap-1" download>
          <FileText className="w-4 h-4" /> Methadone Brochure
        </a>
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

export default Contact;
