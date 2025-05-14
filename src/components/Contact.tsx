'use client';

import { FaWhatsapp, FaTelegram, FaGithub, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/YOUR_PHONE_NUMBER', // Replace with your WhatsApp number
    icon: FaWhatsapp,
    color: 'bg-[#25D366] hover:bg-[#128C7E]'
  },
  {
    name: 'Telegram',
    href: 'https://t.me/YOUR_USERNAME', // Replace with your Telegram username
    icon: FaTelegram,
    color: 'bg-[#0088cc] hover:bg-[#006699]'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/YOUR_USERNAME', // Replace with your GitHub username
    icon: FaGithub,
    color: 'bg-[#333333] hover:bg-[#24292e]'
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/YOUR_USERNAME', // Replace with your LinkedIn username
    icon: FaLinkedin,
    color: 'bg-[#0077B5] hover:bg-[#005885]'
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="h2 mb-4">Let's Connect</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out to me through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center p-6 rounded-xl text-white transition-all transform hover:-translate-y-1 hover:scale-105 ${link.color}`}
            >
              <link.icon className="text-4xl mb-2" />
              <span className="text-sm font-medium">{link.name}</span>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Prefer email? Reach me at{' '}
            <a
              href="jndemail@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
            jndemail@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact; 