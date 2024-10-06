import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { BlogEntry } from '../types'; 


const fetchBlogData = async (): Promise<BlogEntry[]> => {
  const response = await fetch('/blogData.json');
  if (!response.ok) {
    throw new Error('Failed to fetch blog data');
  }
  return response.json();
};

const BlogPage: React.FC = () => {


  const { data: blogData = [], error, isLoading } = useQuery<BlogEntry[], Error>({
    queryKey: ['blogData'],
    queryFn: fetchBlogData,
 
  });

let amount = blogData.length;



  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading blog data: {error.message}</div>;
  }

  return (
    <div className="space-y-8">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-black">Gewerkte dagen: {amount}</h1>
      {blogData.map((entry) => (
        <div key={entry.day} className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Dag {entry.day} - {entry.date}</h2>
          <p className="text-gray-600"><strong>Uren gewerkt:</strong> {entry.hoursWorked}</p>
          <p className="text-gray-700 mt-4">{entry.description}</p>
          {entry.image && (
            <div className="mt-4">
              <img src={entry.image} alt={`Screenshot for day ${entry.day}`} className="rounded-lg shadow" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
