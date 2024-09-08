import { z } from 'zod';
import { NextRequest, NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';
import { formSchema } from '@/lib/schemas';

export async function PATCH(
  req: NextRequest,
  { params }: { params: { postId: string } }
) {
  try {
    const body: z.infer<typeof formSchema> = await req.json();

    const { title, content } = body;
    const post = await prismadb.post.updateMany({
      where: {
        id: params.postId,
      },
      data: {
        title,
        content,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.log('[POSTS_PATCH]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
