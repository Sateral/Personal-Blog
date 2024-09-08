import prismadb from './prismadb';

export async function fetchPosts() {
  return await prismadb.post.findMany({});
}

export async function getPostById(id: string) {
  return await prismadb.post.findUnique({
    where: {
      id: id,
    },
  });
}
