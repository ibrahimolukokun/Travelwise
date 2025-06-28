// src/pages/LocationPage.jsx
import { useParams } from 'react-router-dom';

const LocationPage = () => {
  const { slug } = useParams();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Location: {slug.replace(/-/g, ' ')}</h1>
      <p className="mt-4 text-gray-600">This page could show more details, photos, reviews, etc.</p>
    </div>
  );
};

export default LocationPage;
