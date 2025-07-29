import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Heart, Shield, Users, Clock, Star, ArrowRight, FileText, Calendar, AlertCircle, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';
import MoodMatchGame from '../components/MoodMatchGame';
const SerenityRehabLeadGenerator = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredContact: 'phone',
    treatmentType: '',
    insuranceType: '',
    urgency: '',
    message: '',
    consent: false
  });
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Lead submitted:', formData);
    setShowSuccess(true);
    
    // Simulate automated patient communication system
    setTimeout(() => {
      console.log('Automated intake packet sent');
      console.log('Insurance verification initiated');
      console.log('Appointment reminder system activated');
      console.log('Crisis support hotline information dispatched');
    }, 1000);

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      preferredContact: 'phone',
      treatmentType: '',
      insuranceType: '',
      urgency: '',
      message: '',
      consent: false
    });
    setCurrentStep(1);
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

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
              <Link to="/*" className="text-gray-700 hover:text-teal-600 transition-colors">
    Home
  </Link>
               <Link to="/services" className="text-gray-700 hover:text-teal-600 transition-colors">
    Services
  </Link>

               <Link to="/about" className="text-gray-700 hover:text-teal-600 transition-colors">
    About
  </Link>
              <Link to="/contact" className="text-gray-700 hover:text-teal-600 transition-colors">
    Contact Us
  </Link>
  <Link to="/blog" className="text-gray-700 hover:text-teal-600 transition-colors">
    Our Blog
  </Link>
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

      {/* Hero Section with Lead Form */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
                <Shield className="h-4 w-4 mr-2" />
                Licensed Addiction Treatment Center
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-teal-600">Comprehensive Care</span> and 
                Counseling to Patients in Need
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Serenity Rehabilitation Center provides evidence-based addiction treatment, 
                methadone maintenance therapy, and comprehensive counseling services in a 
                supportive, dignified environment.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <div className="bg-teal-100 rounded-full p-2 mr-3">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                  </div>
                  <span className="text-gray-700">MAT Programs</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Group Counseling</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 rounded-full p-2 mr-3">
                    <Heart className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Individual Therapy</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-purple-100 rounded-full p-2 mr-3">
                    <Clock className="h-5 w-5 text-purple-600" />
                  </div>
                  <span className="text-gray-700">24/7 Support</span>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
                  <div>
                    <div className="font-semibold text-red-800">Crisis or Emergency?</div>
                    <div className="text-red-600">Call 248-838-3686 immediately for 24/7 support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Multi-step Lead Generation Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Your Recovery Journey</h3>
                <p className="text-gray-600">Confidential assessment & immediate support</p>
                
                {/* Progress Indicator */}
                <div className="flex justify-center mt-4 space-x-2">
                  {[1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className={`w-3 h-3 rounded-full ${
                        step <= currentStep ? 'bg-teal-500' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {showSuccess ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-teal-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Assessment Submitted!</h4>
                  <p className="text-gray-600 mb-4">
                    Our intake coordinator will contact you within 2 hours. 
                    You'll receive automated appointment reminders and support resources.
                  </p>
                  <div className="bg-teal-50 p-4 rounded-lg mb-4">
                    <p className="text-teal-800 font-medium">Crisis Support Available 24/7</p>
                    <p className="text-teal-600">248-838-3686</p>
                  </div>
                  <button 
                    onClick={() => setShowSuccess(false)}
                    className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition-colors"
                  >
                    Submit Another Assessment
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Step 1: Basic Information */}
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900">Personal Information</h4>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Contact Method
                        </label>
                        <div className="flex space-x-4">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="preferredContact"
                              value="phone"
                              checked={formData.preferredContact === 'phone'}
                              onChange={handleInputChange}
                              className="mr-2"
                            />
                            Phone
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="preferredContact"
                              value="email"
                              checked={formData.preferredContact === 'email'}
                              onChange={handleInputChange}
                              className="mr-2"
                            />
                            Email
                          </label>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Treatment Information */}
                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900">Treatment Preferences</h4>
                      <select
                        name="treatmentType"
                        value={formData.treatmentType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      >
                        <option value="">Select Treatment Interest</option>
                        <option value="methadone">Methadone Maintenance</option>
                        <option value="counseling">Counseling Services</option>
                        <option value="detox">Detoxification</option>
                        <option value="outpatient">Outpatient Program</option>
                        <option value="assessment">Assessment Only</option>
                      </select>
                      
                      <select
                        name="insuranceType"
                        value={formData.insuranceType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      >
                        <option value="">Insurance Type (Optional)</option>
                        <option value="private">Private Insurance</option>
                        <option value="medicaid">Medicaid</option>
                        <option value="medicare">Medicare</option>
                        <option value="selfpay">Self-Pay</option>
                        <option value="other">Other</option>
                      </select>

                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      >
                        <option value="">How soon do you need help?</option>
                        <option value="immediate">Immediately</option>
                        <option value="week">Within a week</option>
                        <option value="month">Within a month</option>
                        <option value="planning">Just planning ahead</option>
                      </select>
                    </div>
                  )}

                  {/* Step 3: Additional Information */}
                  {currentStep === 3 && (
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900">Additional Information</h4>
                      <textarea
                        name="message"
                        placeholder="Tell us about your situation or any specific questions (optional)"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      ></textarea>
                      
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleInputChange}
                          required
                          className="mt-1 mr-3"
                        />
                        <span className="text-sm text-gray-600">
                          I consent to be contacted by Serenity Rehabilitation Center regarding 
                          treatment options and understand that my information will be kept confidential 
                          in accordance with HIPAA regulations.
                        </span>
                      </label>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-4">
                    {currentStep > 1 && (
                      <button
                        onClick={prevStep}
                        className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Previous
                      </button>
                    )}
                    
                    {currentStep < 3 ? (
                      <button
                        onClick={nextStep}
                        disabled={!formData.name || !formData.email || !formData.phone}
                        className="ml-auto bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next Step
                      </button>
                    ) : (
                      <button
                        onClick={handleSubmit}
                        disabled={!formData.consent}
                        className="ml-auto bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold px-8 py-3 rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                      >
                        Submit Assessment
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section id="about" className={`py-20 bg-teal-600 text-white transition-all duration-1000 ${isVisible['mission'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div id="mission" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              Serenity Rehabilitation Center, Inc. will provide excellent care in an 
              medication-assisted treatment and supportive services programs to 
              individuals and families who need them. The vision challenges are 
              other mental health challenges. We believe SRC is a disease and can be 
              treated. As defined. At the Society of Addiction Medicine, there's a 
              treatable biological disease that is "addiction".
            </p>
            <div className="bg-teal-700 rounded-lg p-6 mt-8">
              <h3 className="text-2xl font-bold mb-4">Our Goal</h3>
              <p className="text-lg">
                To establish a highly level therapeutic intervention in a short period 
                of time to consumers who are experiencing severe psychological and/or 
                physical symptoms. Patient centered, responsive, recovery-oriented 
                services can be provided up to 9 hours per day working with individuals, 
                the family and other clinicians.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-20 transition-all duration-1000 ${isVisible['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Counseling & Methadone Dispensing Program</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive addiction treatment services tailored to your individual needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Counseling Services */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Counseling Services</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-teal-500 mr-2" />Individual counseling</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-teal-500 mr-2" />Group counseling</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-teal-500 mr-2" />Substance abuse counseling</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-teal-500 mr-2" />Family counseling</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-teal-500 mr-2" />Crisis intervention</li>
              </ul>
            </div>

            {/* Methadone Services */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Methadone Treatment</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" />Daily dispensing</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" />Take-home privileges</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" />Medical monitoring</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" />Dose adjustments</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" />Safety protocols</li>
              </ul>
            </div>

            {/* Support Services */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Support Services</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Case management</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Referral services</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Peer support</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Aftercare planning</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Recovery education</li>
              </ul>
            </div>
          </div>

          {/* Treatment Facts */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Methadone Treatment Facts</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">40+</div>
                <div className="text-gray-600">Years of Research</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">75%</div>
                <div className="text-gray-600">Reduction in Crime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">60%</div>
                <div className="text-gray-600">Reduction in HIV Risk</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-teal-500 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Address</div>
                    <div className="text-gray-600">35 S Johnson Ave, R. Pontiac, MI 48341</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-teal-500 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">248-838-3686</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-teal-500 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Fax</div>
                    <div className="text-gray-600">248-621-9626</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-teal-500 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">info@Src.Health</div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Operating Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>6:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>6:00 AM - 11:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded-lg">
                  <div className="text-red-800 font-semibold">24/7 Crisis Support</div>
                  <div className="text-red-600">Call 248-838-3686 for emergencies</div>
                </div>
              </div>
            </div>

            {/* Eligibility & Costs */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Eligibility & Cost Information</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Insurance Accepted:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Most commercial and private insurance plans</li>
                    <li>• Medicaid</li>
                    <li>• Medicare</li>
                    <li>• Self-pay options available</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">The First Visit:</h4>
                  <p className="text-gray-600">
                    When contacting Counseling Services for the first time, 
                    clients can potentially be seen the same day. For an intake 
                    appointment, you will be seen for a full 60-90 minute intake.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Criteria for Admission:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Children who may have suicidal ideations or situations</li>
                    <li>• Children or teens who have risk behaviors</li>
                    <li>• High school/diploma prevention or intervention</li>
                    <li>• Adults seeking addiction treatment services</li>
                  </ul>
                </div>

                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Need Help Now?</h4>
                  <p className="text-teal-700 mb-3">
                    Our intake coordinators are available to help you start your recovery journey.
                  </p>
                  <button className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition-colors">
                    Call Now: 248-838-3686
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default SerenityRehabLeadGenerator;
                