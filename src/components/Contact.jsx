import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a server
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-section">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Contact</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#2a293a] border border-[#6165B5] p-6 rounded-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Get In Touch</h3>
          <p className="text-gray-300 mb-6">
            Feel free to reach out for collaborations, opportunities, or just a chat.
          </p>

          <div className="space-y-4">
            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-[#6165B5] flex items-center justify-center mr-3">
                📧
              </span>
              <a href="mailto:contact@example.com" className="text-[#a8b4ff] hover:text-white transition-colors">
                contact@example.com
              </a>
            </div>
            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-[#6165B5] flex items-center justify-center mr-3">
                🔗
              </span>
              <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="text-[#a8b4ff] hover:text-white transition-colors">
                github.com/username
              </a>
            </div>
            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-[#6165B5] flex items-center justify-center mr-3">
                💼
              </span>
              <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="text-[#a8b4ff] hover:text-white transition-colors">
                linkedin.com/in/username
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#2a293a] border border-[#6165B5] p-6 rounded-sm">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#1f1e2e] text-white border border-[#6165B5] p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#6165B5]"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#1f1e2e] text-white border border-[#6165B5] p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#6165B5]"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-white mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-[#1f1e2e] text-white border border-[#6165B5] p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#6165B5]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#6165B5] text-white py-2 px-6 rounded-sm hover:bg-[#7175c5] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
