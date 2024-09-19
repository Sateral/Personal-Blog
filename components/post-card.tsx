import Link from "next/link";

import { Post } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  if (!post) return null;

  const formatDate = (date: Date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return formattedDate;
  };

  return (
    <Link href={`/${post.id}`}>
      <Card className="min-w-72">
        <CardHeader className="flex flex-col justify-center items-start">
          <CardTitle className="font-bold text-2xl">{post.title}</CardTitle>
          <p className="text-xs text-nowrap">{formatDate(post.createdAt)}</p>
        </CardHeader>
        <CardContent>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </CardContent>
        <CardFooter className="space-x-2">
          <Badge variant="default">Life</Badge>
          <Badge variant="secondary">&lt;Coding /&gt;</Badge>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PostCard;
