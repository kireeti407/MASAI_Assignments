import React from 'react';

const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  const { title, thumbnails, publishedAt } = snippet;
  const { viewCount, likeCount } = statistics;

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <img src={thumbnails.medium.url} alt={title} className="w-full" />
      <div className="p-4">
        <h3 className="text-white font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-2">{new Date(publishedAt).toLocaleDateString()}</p>
        <div className="flex justify-between text-gray-400 text-sm">
          <span>{viewCount} views</span>
          <span>{likeCount} likes</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
