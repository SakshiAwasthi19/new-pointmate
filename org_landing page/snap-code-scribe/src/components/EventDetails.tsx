import { useParams } from "react-router-dom";

const EventDetails = () => {
  const { eventId } = useParams();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Event Details</h1>
      <p className="text-gray-600">Event ID: {eventId}</p>
      {/* Add more event details content here */}
    </div>
  );
};

export default EventDetails;