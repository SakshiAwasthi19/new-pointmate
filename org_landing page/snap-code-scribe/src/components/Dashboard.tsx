import React from 'react';
import { Link } from 'react-router-dom';

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
}

const Dashboard: React.FC = () => {
  // Sample events data (replace with actual data fetching)
  const events: Event[] = [
    {
      id: '1',
      title: 'Tech Conference',
      date: '2025-05-20',
      description: 'Annual technology conference'
    },
    {
      id: '2',
      title: 'Workshop',
      date: '2025-05-25',
      description: 'Development workshop'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Events Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
            <p className="text-gray-600 mb-4">{event.date}</p>
            <p className="text-gray-500 mb-4">{event.description}</p>
            <Link 
              to={`/event/${event.id}`} 
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;