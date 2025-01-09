import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { BlogEntry } from '../types';
import { format, getISOWeek, isValid, parse } from 'date-fns';
import { nl } from 'date-fns/locale'; 
import { useQueryClient } from '@tanstack/react-query';

const fetchBlogData = async (): Promise<BlogEntry[]> => {
  const response = await fetch('/blogData.json');
  if (!response.ok) {
    throw new Error('Failed to fetch blog data');
  }
  return response.json();
};

const groupByWeeks = (blogData: BlogEntry[]) => {
  const groupedData: { [week: number]: BlogEntry[] } = {};
  let baselineWeek: number | null = null;

  blogData.forEach((entry) => {
    const entryDate = parse(entry.date, 'd MMMM yyyy', new Date(), { locale: nl });

    if (isValid(entryDate)) {
      const isoWeek = getISOWeek(entryDate);

      if (baselineWeek === null) {
        baselineWeek = isoWeek;
      }

      const normalizedWeek = isoWeek - baselineWeek + 1;

      if (!groupedData[normalizedWeek]) {
        groupedData[normalizedWeek] = [];
      }
      groupedData[normalizedWeek].push(entry);
    }
  });

  return groupedData;
};

const BlogPage: React.FC = () => {
  const queryClient = useQueryClient();
  const { data: blogData = [], error, isLoading } = useQuery<BlogEntry[], Error>({
    queryKey: ['blogData'],
    queryFn: fetchBlogData,
  });

  const toggleImageSize = (data: BlogEntry | undefined) => {
    if (!data) {
      return;
    }
    queryClient.setQueryData<BlogEntry[]>(['blogData'], (oldBlogData = []) =>
      oldBlogData.map((entry) =>
        entry.day === data.day
          ? { ...entry, imageSize: entry.imageSize === null ? true : !entry.imageSize }
          : entry
      )
    );
  };

  const groupedByWeeks = groupByWeeks(blogData);

  return (
    <div
      className="relative min-h-screen text-gray-100 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      <div className="relative z-10 space-y-8 px-6 py-4">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-200 mb-2">Internship Blog</h1>
          <p className="text-lg text-gray-400">
            Total Weeks: {Object.keys(groupedByWeeks).length} | Total Days: {blogData.length}
          </p>
        </header>

        {Object.entries(groupedByWeeks).map(([week, entries]) => (
          <section
            key={week}
            className="bg-gray-800 shadow-md rounded-lg p-6 mb-8 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-200 mb-4">Week {week}</h2>
            <div className="space-y-4">
              {entries.map((entry) => {
                const entryDate = parse(entry.date, 'd MMMM yyyy', new Date(), { locale: nl });

                return (
                  <article
                    key={entry.day}
                    className="bg-gray-700 rounded-md shadow p-4 border-l-4 border-blue-500 hover:bg-gray-600 transition-colors duration-300"
                  >
                    <h3 className="text-xl font-semibold text-gray-200">
                      Dag {entry.day} -{' '}
                      {isValid(entryDate) ? format(entryDate, 'dd/MM/yyyy') : 'Invalid Date'}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      <strong>Uren gewerkt:</strong> {entry.hoursWorked}
                    </p>
                    <p className="text-gray-300 mt-2">{entry.description}</p>
                    {entry.image && (
                      <div className="mt-4">
                        <img
                          onClick={() => toggleImageSize(entry)}
                          src={entry.image}
                          alt={`Screenshot for day ${entry.day}`}
                          className={`rounded-lg shadow ${
                            entry.imageSize ? 'w-full' : 'w-1/4'
                          } hover:cursor-pointer transition-all duration-500`}
                        />
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        ))}

        {isLoading && <p className="text-center text-gray-500">Loading...</p>}
        {error && (
          <p className="text-center text-red-500">Failed to load blog data: {error.message}</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
