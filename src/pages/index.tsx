import { useEffect } from 'react'
import { loadPosts } from '@/api/load-posts'

export default function Home() {
  useEffect(() => {
    loadPosts({
      authorSlug: 'milena-limoeiro',
    }).then((r) => {
      console.log(r.setting, r.posts);
    });
  }, []);

  return <h1>OI</h1>;
}
