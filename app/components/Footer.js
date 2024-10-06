import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaLeaf,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const socialIcons = [
    { Icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
    { Icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { Icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { Icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  const links = [
    { href: "/about", text: "About Us" },
    { href: "/contact", text: "Contact" },
    { href: "/privacy", text: "Privacy Policy" },
    { href: "/terms", text: "Terms of Service" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-6 md:space-y-0">
          {/* Brand Section */}
          <div className="flex items-center space-x-3 transform hover:scale-105 transition-transform duration-300">
            <FaLeaf className="text-green-500 text-5xl" />
            <div>
              <h1 className="text-3xl font-semibold">FarmRuler</h1>
              <p className="text-sm text-gray-400">
                Empowering sustainable agriculture
              </p>
            </div>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-6">
            {socialIcons.map(({ Icon, href, label }) => (
              <a
                key={href}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-green-500 transition-colors duration-200 transform hover:scale-110"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
        {/* Links Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <nav className="flex flex-wrap justify-center md:justify-start gap-6">
            {links.map(({ href, text }) => (
              <a
                key={href}
                href={href}
                className="text-sm hover:text-green-500 transition-colors duration-200 transform hover:scale-105"
              >
                {text}
              </a>
            ))}
          </nav>
          <div className="flex items-center">
            <FaEnvelope className="text-green-500 mr-2" />
            <a
              href="mailto:info@farmruler.com"
              className="text-sm hover:text-green-500 transition-colors duration-200"
            >
              info@farmruler.com
            </a>
          </div>
        </div>
        {/* Footer Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-xs text-gray-400">
            © 2023 FarmRuler. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
