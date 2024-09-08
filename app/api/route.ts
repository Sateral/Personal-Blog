import { z } from 'zod';
import { NextRequest, NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';
import { formSchema } from '@/lib/schemas';

export async function GET(req: NextRequest) {
  try {
    const posts = await prismadb.post.findMany();

    return NextResponse.json(posts);
  } catch (error) {
    console.log('[POSTS_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body: z.infer<typeof formSchema> = await req.json();

    const { title, content } = body;

    console.log('entered POST');

    console.log('title:', title);
    console.log('desc:', content);

    const post = await prismadb.post.create({
      data: {
        title,
        content,
      },
    });
    return NextResponse.json(post);
  } catch (error) {
    console.log('[POSTS_POST]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
