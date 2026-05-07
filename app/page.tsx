import React from 'react';

const actionPoints = [
  {
    title: 'Develop Fleet Management Module',
    description: 'Create a module for managing the car fleet including car profiles with details such as registration, model, year, location, availability status, and service history.',
    category: 'feature',
    priority: 'HIGH',
    acceptance: 'System allows creation of car profiles with all specified details.; Car availability status updates automatically based on booking and service entries.; Service history is logged and viewable for each car.'
  },
  // Other action points ...
];

const HomePage = () => {
  return (
    <div className="px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">DriveEase CRM System</h1>
        <h2 className="text-xl text-gray-500">Client: DriveEase Rentals</h2>
      </div>
      <div className="space-y-4">
        {actionPoints.map((point, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-4">
            <h3 className="text-2xl font-semibold text-gray-800">{point.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{point.description}</p>
            <div className="flex items-center">
              <span className={`inline-block px-2 py-1 text-xs font-bold mr-2 rounded ${point.priority === 'HIGH' ? 'bg-red-200 text-red-800' : 'bg-yellow-200 text-yellow-800'}`}>{point.priority}</span>
              <span className="text-xs text-gray-500">Category: {point.category}</span>
            </div>
            <p className="text-sm text-gray-700 mt-2">Acceptance: {point.acceptance}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
