"use client";

import { useState } from "react";

import { Post } from "@prisma/client";
import PostCard from "@/components/post-card";
import MaxWidthWrapper from "./max-width-wrapper";

interface PostCardsProps {
  data: Post[];
}

const PostCards = ({ data }: PostCardsProps) => {
  return (
    <MaxWidthWrapper>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4 w-full">
        {data.map((post) => (
          <PostCard key={post.title} post={post} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default PostCards;
