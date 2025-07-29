import React from 'react';
import { Phone, Mail, MapPin, FileText } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white">
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
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className="input" />
                  <input type="email" placeholder="Email" className="input" />
                  <input type="text" placeholder="Counseling And Detox..." className="input col-span-2" />
                  <input type="text" placeholder="Phone" className="input col-span-2" />
                </div>
                <textarea placeholder="Write your message here..." className="input h-24 w-full resize-none" />
                <button type="submit" className="w-full bg-blue-900 text-white rounded-full py-2 hover:bg-blue-800">
                  Submit Request
                </button>
              </form>
            </div>

            {/* Quick Contacts */}
            <div className="bg-teal-500 text-white p-6 rounded-xl w-full md:max-w-sm">
              <h3 className="text-lg font-semibold mb-4">Quick Contacts</h3>
              <p className="text-sm mb-2">Please feel free to contact our friendly staff with any inquiry.</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span className="font-bold">248-838-3686</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4" />
                  673 Martin Luther King Jr Blvd N, Pontiac, MI 48342
                </div>
                <div className="text-xs mt-2">Mon – Sat: 6:00 am – 2:00 pm</div>
              </div>
              <a href="/about" className="mt-4 inline-block text-sm underline text-white/90">About Us</a>
            </div>
          </div>
        </div>
      </div>

      {/* Brochures */}
      <div className="text-center mt-56 mb-8">
        <a
          href="/Counseling-Brochure.pdf"
          className="bg-blue-900 text-white py-2 px-4 rounded-full text-sm hover:bg-blue-800 mx-2 inline-flex items-center gap-1"
          download
        >
          <FileText className="w-4 h-4" />
          Counseling Brochure
        </a>
        <a
          href="/Methadone-Brochure.pdf"
          className="bg-teal-600 text-white py-2 px-4 rounded-full text-sm hover:bg-teal-500 mx-2 inline-flex items-center gap-1"
          download
        >
          <FileText className="w-4 h-4" />
          Methadone Brochure
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white px-4 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left */}
          <div>
            <img src="/serenity-logo.png" alt="Serenity Logo" className="h-12 mb-3" />
            <p className="text-sm leading-relaxed">
              Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner.
              We hope you will allow us to care for you and strive to be the best choice.
            </p>
            <a href="#book" className="text-teal-300 text-sm mt-2 inline-block">➜ Make Appointment</a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/services" className="hover:underline">Our Services</a></li>
              <li><a href="/blogs" className="hover:underline">Our Blogs</a></li>
              <li><a href="/apply" className="hover:underline">Apply for Job</a></li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="font-semibold mb-3">Departments</h4>
            <ul className="space-y-1 text-sm">
              <li>Counseling and Drug Screening</li>
              <li>Medication-Assisted Treatment</li>
              <li>Individual/Group Therapy</li>
              <li>Family Reunification</li>
              <li>Peer Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-3">Quick Contacts</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>248-838-3686</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>240-027-9626</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>673 MLK Jr Blvd, Pontiac, MI</span>
              </div>
              <div className="flex gap-3 mt-2">
                <a href="#" className="hover:underline">FB</a>
                <a href="#" className="hover:underline">IG</a>
                <a href="#" className="hover:underline">Map</a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-white/70 mt-8 border-t border-white/20 pt-4">
          &copy; 2025 Serenity Rehabilitation Inc. | Designed by Serenity Foundation
        </div>
      </footer>
    </div>
  );
};

export default Contact;
