import MaxWidthWrapper from '@/components/max-width-wrapper';
import { PostForm } from './_components/post-form';
import { getPostById } from '@/lib/functions';

const PostPage = async ({ params }: { params: { postId: string } }) => {
  const post = await getPostById(params.postId);

  return (
    <MaxWidthWrapper className='h-fit'>
      <PostForm initialData={post} />
    </MaxWidthWrapper>
  );
};

export default PostPage;
