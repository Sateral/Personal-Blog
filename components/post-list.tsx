import { fetchPosts } from '@/lib/functions';
import React from 'react';
import PostCards from '@/components/post-cards';

const PostList = async () => {
  const posts = await fetchPosts();

  return <PostCards data={posts} />;
};

export default PostList;
