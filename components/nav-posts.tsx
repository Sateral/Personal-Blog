import prismadb from '@/lib/prismadb';
import Navbar from './navbar';

const NavPosts = async () => {
  const posts = await prismadb.post.findMany();

  return <Navbar data={posts} />;
};

export default NavPosts;
