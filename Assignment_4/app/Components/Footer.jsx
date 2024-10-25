export default function Footer() {
    return (
      <footer className="bg-gray-100 py-8 mt-16">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
              <img
                src="/fb.png"
                alt="Facebook"
                className="w-6 h-6 hover:opacity-75"
              />
            </a>
            <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
              <img
                src="/instagram.png"
                alt="Instagram"
                className="w-6 h-6 hover:opacity-75"
              />
            </a>
            <a href="https://linkedin.com/your-profile" target="_blank" rel="noopener noreferrer">
              <img
                src="/linkedin.png"
                alt="LinkedIn"
                className="w-6 h-6 hover:opacity-75"
              />
            </a>
          </div>
          <p className="text-gray-600">Copyright &copy;2024 All rights reserved.</p>
        </div>
      </footer>
    );
  }
  