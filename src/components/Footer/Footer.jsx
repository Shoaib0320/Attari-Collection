// components/Footer.js

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6 mt-10">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold font-serif">Attari Collection</h3>
            <p className="text-sm text-gray-400 mt-2">
              A small tagline or description about your brand.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="#" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="#" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
  
          <div className="text-sm text-gray-400">
            <p>&copy; 2024 Your Company. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  