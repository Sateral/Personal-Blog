'use client';

import { useState } from 'react';

import { Post } from '@prisma/client';
import PostCard from '@/components/post-card';

interface PostCardsProps {
  data: Post[];
}

const PostCards = ({ data }: PostCardsProps) => {
  return (
    <div className='flex flex-row justify-center gap-x-4 flex-wrap p-4'>
      {data.map((post) => (
        <PostCard key={post.title} post={post} />
      ))}
    </div>
  );
};

export default PostCards;
