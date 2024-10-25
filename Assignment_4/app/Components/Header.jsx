export default function Header() {
    return (
      <header className="bg-white py-6 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-xl font-bold">Muhammad Javaid</a>
          <div>
            <a href="/works" className="mr-6 text-gray-700 hover:text-black">Works</a>
            <a href="/blog" className="mr-6 text-gray-700 hover:text-black">Blog</a>
            <a href="/contact" className="text-gray-700 hover:text-black">Contact</a>
          </div>
        </nav>
      </header>
    );
  }
  