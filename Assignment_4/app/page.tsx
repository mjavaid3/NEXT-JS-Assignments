import BlogPost from './components/BlogPost';
import WorkCard from './components/WorkCard';

export default function HomePage() {
  return (
    <section className="container mx-auto p-8">
   <div className="bg-white py-16"> {/* Background and padding */}
  <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    {/* Left Side: Text Section */}
    <div className="md:w-2/3 text-center md:text-left">
      <h1 className="text-4xl font-bold mb-4">Hi, I am Muhammad Javaid,<br />Web Developer</h1>
      <p className="text-gray-600 mb-6">I am an Aspiring Web Developer studying AI course at Governor House Sindh.</p>
      <a href="#" className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 transition duration-300">
        Download Resume
      </a>
    </div>

    {/* Right Side: Image */}
    <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
      <img src="/hero.png" alt="Profile" className="rounded-full w-48 h-48 object-cover" />
    </div>
  </div>
</div>


      <div className="bg-pink-100 py-8"> 
  <div className="container mx-auto px-4"> 
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">Recent Post</h2>
      <a href="#" className="text-pink-600">View all</a>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
      {/* First Card */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-bold">Making a design system from scratch</h3>
        <div className="text-gray-600 text-sm my-2">
          <span>12 Feb 2020</span> <span> | </span> <span>Design, Pattern</span>
        </div>
        <p className="text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...</p>
      </div>

      {/* Second Card */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-bold">Making a design system from scratch</h3>
        <div className="text-gray-600 text-sm my-2">
          <span>12 Feb 2020</span> <span> | </span> <span>Design, Pattern</span>
        </div>
        <p className="text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...</p>
      </div>
    </div>
  </div>
</div>

      <div className="flex justify-center px-4">
        <div className="mt-16 max-w-6xl w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">Featured Works</h2>
          <div className="space-y-8">
            <WorkCard image="/d1.png" year="2020" category="Dashboard" title="Designing Dashboards" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
            <WorkCard image="/d2.png" year="2020" category="Dashboard" title="Designing Dashboards" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
            <WorkCard image="/d3.png" year="2020" category="Dashboard" title="Designing Dashboards" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
          </div>
        </div>
      </div>
    </section>
  );
}
