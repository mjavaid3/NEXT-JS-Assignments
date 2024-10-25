export default function WorkCard({ image, title, year, category, description }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm flex items-start space-x-4">
        <img src={image} alt={title} className="w-20 h-20 rounded-md" />
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">{year}</span>
            <span className="text-gray-600 text-sm">{category}</span>
          </div>
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
    );
  }
  