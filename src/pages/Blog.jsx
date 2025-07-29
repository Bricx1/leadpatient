import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: '30-Day Cognitive Behavioral Therapy Transformation',
    category: 'Mental Health',
    image: '/blog/therapy.webp',
    excerpt: 'Discover how CBT helps reshape negative thoughts and foster recovery in addiction treatment.',
    date: 'Jul 2025',
  },
  {
    id: 2,
    title: '14 Subtle Cocaine Addiction Symptoms and Healing Steps',
    category: 'Addiction Recovery',
    image: '/blog/cocaine.webp',
    excerpt: 'Spot early signs of cocaine use and learn actionable recovery plans through therapy and support.',
    date: 'Jul 2025',
  },
  {
    id: 3,
    title: 'Difference Between Crack and Coke & Key Comparison',
    category: 'Awareness',
    image: '/blog/crack-vs-coke.webp',
    excerpt: 'Explore how these two substances differ and the distinct risks they carry.',
    date: 'Jul 2025',
  },
  {
    id: 4,
    title: '7 Effects of Alcohol on Your Brain, Liver, and Nerve System',
    category: 'Alcohol Use',
    image: '/blog/alcohol.webp',
    excerpt: 'Learn how chronic alcohol intake affects your mental, liver, and neurological health.',
    date: 'Jun 2025',
  },
  {
    id: 5,
    title: 'Unsure About Wearing Face Mask? Here’s How and Why',
    category: 'Health',
    image: '/blog/mask.webp',
    excerpt: 'Understand face mask protection for yourself and others in post-pandemic public safety.',
    date: 'Jun 2025',
  },
  {
    id: 6,
    title: '6 Tips to Protect Your Mental Health When You’re Sick',
    category: 'Self Care',
    image: '/blog/mental-sick.webp',
    excerpt: 'Stay emotionally balanced during physical illness with these practical wellness tips.',
    date: 'Jun 2025',
  },
];

const Blog = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-teal-600">Serenity</div>
          <nav className="hidden md:flex gap-6 text-sm">
            <Link to="/" className="hover:text-teal-600">Home</Link>
            <Link to="/about" className="hover:text-teal-600">About</Link>
            <Link to="/services" className="hover:text-teal-600">Services</Link>
            <Link to="/blog" className="text-teal-600 font-semibold">Our Blog</Link>
            <Link to="/contact" className="hover:text-teal-600">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Page Title */}
      <section className="py-12 text-center">
        <h1 className="text-3xl font-semibold mb-2">Health Essentials</h1>
        <p className="text-sm text-gray-500">Home / Blog</p>
      </section>

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white">
            <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
            <div className="p-5">
              <div className="flex justify-between items-center mb-2 text-sm">
                <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </span>
                <span className="text-gray-400">{post.date}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="text-teal-600 font-medium text-sm hover:underline">
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* Pagination */}
      <div className="flex justify-center pb-16">
        <ul className="flex gap-2">
          <li><button className="px-3 py-1 rounded bg-teal-600 text-white">1</button></li>
          <li><button className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100">2</button></li>
          <li><button className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100">→</button></li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="bg-[#0d1b40] text-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/serenity-logo.png" alt="Serenity" className="h-12 mb-3" />
            <p className="text-sm">
              Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. 
              We hope you will allow us to care for you and strive to be your first choice.
            </p>
            <a href="/#book" className="text-teal-300 text-sm mt-2 inline-block">➜ Make Appointment</a>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/apply">Apply for Job</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Departments</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Counseling</li>
              <li>MAT Services</li>
              <li>Peer Recovery</li>
              <li>Case Management</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <div className="text-sm space-y-1 text-gray-300">
              <div>📞 248-838-3686</div>
              <div>📍 673 MLK Blvd N, Pontiac, MI</div>
              <div>Mon–Sat: 6am – 2pm</div>
            </div>
          </div>
        </div>
        <p className="text-center text-xs mt-8 text-gray-400">
          &copy; 2025 Serenity Rehabilitation | Powered by Serenity Foundation
        </p>
      </footer>
    </main>
  );
};

export default Blog;
