import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { BlogEntry } from '../types'; 
import { format, getISOWeek, isValid, parse } from 'date-fns';
import { nl } from 'date-fns/locale'; // Import Dutch locale for date parsing

const fetchBlogData = async (): Promise<BlogEntry[]> => {
  const response = await fetch('/blogData.json');
  if (!response.ok) {
    throw new Error('Failed to fetch blog data');
  }
  return response.json();
};

// Function to group entries by week
const groupByWeeks = (blogData: BlogEntry[]) => {
  const groupedData: { [week: number]: BlogEntry[] } = {};

  blogData.forEach((entry) => {
    // Parse the date in Dutch format "d MMMM yyyy"
    const entryDate = parse(entry.date, 'd MMMM yyyy', new Date(), { locale: nl });

    // Check if the date is valid
    if (isValid(entryDate)) {
      const weekNumber = getISOWeek(entryDate);

      if (!groupedData[weekNumber]) {
        groupedData[weekNumber] = [];
      }
      groupedData[weekNumber].push(entry);
    }
  });

  return groupedData;
};

const BlogPage: React.FC = () => {
  const { data: blogData = [], error, isLoading } = useQuery<BlogEntry[], Error>({
    queryKey: ['blogData'],
    queryFn: fetchBlogData,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading blog data: {error.message}</div>;
  }

  const groupedByWeeks = groupByWeeks(blogData);

  // Find the first week's ISO number to normalize weeks starting from 1
  const firstWeek = Math.min(...Object.keys(groupedByWeeks).map(Number));

  return (
    <div className="space-y-8">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-black">
        Total Weeks: {Object.keys(groupedByWeeks).length}
      </h1>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-black">
        Total Days: {blogData.length}
      </h1>

      {Object.entries(groupedByWeeks).map(([week, entries]) => (
        <div key={parseInt(week) - firstWeek + 1} className="bg-gray-50 shadow rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Week {parseInt(week) - firstWeek + 1}</h2>
          {entries.map((entry) => {
            
            const entryDate = parse(entry.date, 'd MMMM yyyy', new Date(), { locale: nl });

            return (
              <div key={entry.day} className="bg-white shadow rounded-lg p-4 mb-4">
                <h3 className="text-xl font-semibold">
                  Dag {entry.day} - {isValid(entryDate) ? format(entryDate, 'dd/MM/yyyy') : 'Invalid Date'}
                </h3>
                <p><strong>Uren gewerkt:</strong> {entry.hoursWorked}</p>
                <p className="mt-2">{entry.description}</p>
                {entry.image && (
                  <div className="mt-4">
                    <img src={entry.image} alt={`Screenshot for day ${entry.day}`} className="rounded-lg shadow" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
