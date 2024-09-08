import Image from 'next/image';
import React from 'react';

const PostNotFound = () => {
  return (
    <div className='absolute inset-0 flex items-center justify-center h-full'>
      <Image
        src='/404_Image.jpg'
        alt='404 Image'
        width={500}
        height={500}
        className='rounded-md'
      />
    </div>
  );
};

export default PostNotFound;
