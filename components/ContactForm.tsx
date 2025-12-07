import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Sales',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Simulate API call
    setTimeout(() => setSubmitted(true), 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20 px-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-400 mb-6">
          <Send className="h-8 w-8" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Message Sent!</h2>
        <p className="text-gray-400">Thanks for reaching out. We'll get back to you shortly.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-8 text-brand-neon hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Contact Us</h2>
          <p className="mt-4 text-gray-400">
            Have a question about a bike or need to schedule an upgrade?
          </p>
        </div>

        <div className="bg-brand-gray/20 rounded-2xl p-8 border border-white/10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-neon focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-neon focus:border-transparent outline-none transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-neon focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Topic</label>
                <select
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-neon focus:border-transparent outline-none transition-all"
                >
                  <option>Sales (New/Used)</option>
                  <option>Service & Repairs</option>
                  <option>Upgrades</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-neon focus:border-transparent outline-none transition-all"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand-neon text-brand-darker font-bold py-4 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2"
            >
              <Send className="h-5 w-5" /> Send Message
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <Phone className="h-5 w-5 text-brand-neon" />
              <span>(214) 555-0199</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <Mail className="h-5 w-5 text-brand-neon" />
              <span>sales@emotosdfw.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
