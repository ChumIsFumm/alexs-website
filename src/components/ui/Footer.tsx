const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p className="mt-2">Alex Bondarchuk</p>
          <p className="mt-2">
            <a href="mailto:albondguy@gmail.com" className="text-gray-400 hover:text-white">
              albondguy@gmail.com
            </a>
          </p>
          <p className="mt-2">
            <a href="tel:+16312558037" className="text-gray-400 hover:text-white">
              +1 (631) 255-8037
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
