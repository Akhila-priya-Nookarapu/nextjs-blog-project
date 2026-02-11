import Link from "next/link";
import { getPosts } from "../utils/posts";

export async function getStaticProps(){
  const posts = getPosts();
  return { props:{posts} };
}

export default function Home({posts}){
  return(
    <div>
      <h1>Blog</h1>
      <div data-testid="post-list">
        {posts.map(p=>(
          <div key={p.slug} data-testid={`post-card-${p.slug}`}>
            <h2>{p.title}</h2>
            <Link href={`/posts/${p.slug}`}
              data-testid={`read-more-${p.slug}`}>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
