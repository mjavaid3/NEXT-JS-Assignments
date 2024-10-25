import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';  // Import the global CSS styles

export const metadata = {
  title: 'Muhammad Javaid',
  description: 'Portfolio of Muhammad Javaid showcasing works, blog posts, and contact details.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Header />
        <main className="container mx-auto mt-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
