import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, MapPin, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const events = [
  {
    name: 'AICTE National Hackathon',
    domain: 'Technical Skills',
    date: '2024-07-10',
    location: 'Bangalore',
    points: 10,
    description: 'A national-level hackathon for innovative solutions.'
  },
  {
    name: 'Leadership Workshop',
    domain: 'Soft Skills',
    date: '2024-07-15',
    location: 'Mysore',
    points: 5,
    description: 'Develop your leadership and teamwork skills.'
  },
  {
    name: 'Community Clean-Up Drive',
    domain: 'Community Service',
    date: '2024-07-20',
    location: 'Hubli',
    points: 8,
    description: 'Join hands to clean and green your city.'
  },
];

const Events = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-vtu-green/10 flex flex-col items-center py-12 px-4 relative">
      <Button
        variant="ghost"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 text-vtu-blue hover:bg-vtu-blue/10"
        onClick={() => navigate('/')}
      >
        <ArrowLeft className="h-5 w-5" />
        Back
      </Button>
      <div className="w-full max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-vtu-blue mb-8 text-center">Upcoming Events</h1>
        <div className="grid gap-8">
          {events.map((event, idx) => (
            <Card key={idx} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-vtu-green" />
                  {event.name}
                </CardTitle>
                <div className="text-sm text-gray-500 mt-1">{event.domain}</div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar className="h-4 w-4 mr-1" /> {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="h-4 w-4 mr-1" /> {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-vtu-green font-semibold">
                    <Award className="h-4 w-4 mr-1" /> {event.points} Points
                  </div>
                </div>
                <div className="text-gray-600 mb-4">{event.description}</div>
                <Button className="bg-vtu-blue text-white hover:bg-vtu-lightBlue">Register / View</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events; 