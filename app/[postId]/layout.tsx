import React from 'react';
import { redirect } from 'next/navigation';
import { getPostById } from '@/lib/functions';
import PostNotFound from '@/components/post-not-found';

const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { postId: string };
}) => {
  // If not creating a new post
  if (params.postId !== 'new') {
    const post = await getPostById(params.postId);
    if (!post) {
      return <PostNotFound />;
    }
  }

  return <>{children}</>;
};

export default Layout;
