// YouTubeCardList.js
import React from 'react';
import YouTubeCard from './YouTubeCard';

const YouTubeCardList = () => {
  const videos = [
    {
      thumbnail: 'https://i.ytimg.com/vi/B2PVKb5L0wo/maxresdefault.jpg',
      duration: '10:32',
      title: 'How to Build a YouTube Card Design in React with Tailwind CSS',
      views: '120K',
      publishDate: '1 day ago',
    },
    {
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0oR622NsHVRZbbn2i-KCjCJj2Mq-LX3pFNQ&s',
      duration: '8:21',
      title: 'Top 10 JavaScript Tricks Every Developer Should Know',
      views: '500K',
      publishDate: '2 weeks ago',
    },
    {
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8D-TKokdQemlIOaw6oQS5fQnwLy6LXzPMQg&s',
      duration: '12:15',
      title: 'Beginner\'s Guide to React Components and Props',
      views: '250K',
      publishDate: '1 month ago',
    },
    {
      thumbnail: 'https://i.ytimg.com/vi/oP5yKkKxLvE/maxresdefault.jpg',
      duration: '15:45',
      title: 'Tailwind CSS Tutorial: Building Modern UIs Quickly',
      views: '75K',
      publishDate: '3 days ago',
    },
    {
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgex8yqaH5yz9HvYAPft5CRmLXnoI7iwp8WA&s',
      duration: '6:30',
      title: 'Advanced React Patterns: Hooks, Context, and Redux',
      views: '200K',
      publishDate: '1 week ago',
    },
    {
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwzNCXZ3w5tsyWlNyV05iUQW7pM_m8uzJ6wg&s',
      duration: '9:10',
      title: 'Understanding JavaScript Closures',
      views: '300K',
      publishDate: '5 days ago',
    },
    {
      thumbnail: 'data:image/jpeg;base64,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',
      duration: '20:05',
      title: 'Mastering Tailwind CSS: A Deep Dive',
      views: '150K',
      publishDate: '2 months ago',
    },
    {
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0gkhizMborQDeHWYGUG7HqKz6W0Y7gweZgA&s',
      duration: '18:40',
      title: 'Building Scalable React Apps with Redux and React Router',
      views: '180K',
      publishDate: '4 days ago',
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Alexa Developers SRM</h1>
      <h1 className="text-xl font-bold text-gray-800 mb-6">React Task</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((video, index) => (
          <YouTubeCard key={index} {...video} />
        ))}
      </div>
    </div>
  );
};

export default YouTubeCardList;
