import React from 'react';

const YouTubeCard = ({ thumbnail, duration, title, views, publishDate }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Thumbnail thumbnail={thumbnail} duration={duration} />
      <CardDetails title={title} views={views} publishDate={publishDate} />
    </div>
  );
};

const Thumbnail = ({ thumbnail, duration }) => {
  return (
    <div className="relative">
      <img src={thumbnail} alt="Video Thumbnail" className="w-full h-48 object-cover" />
      <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-90">
        {duration}
      </span>
    </div>
  );
};

const CardDetails = ({ title, views, publishDate }) => {
  return (
    <div className="p-4">
      <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
        {title}
      </h3>
      <div className="text-xs text-gray-500 mt-2">
        <p>{views} views • {publishDate}</p>
      </div>
    </div>
  );
};

export default YouTubeCard;
