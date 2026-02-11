import { getPosts, getPost } from "../../utils/posts";
import readingTime from "reading-time";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

export async function getStaticPaths(){
  const posts = getPosts();
  return {
    paths: posts.map(p=>({params:{slug:p.slug}})),
    fallback:false
  }
}

export async function getStaticProps({params}){
  const post = getPost(params.slug);
  const mdx = await serialize(post.content);
  return { props:{post,mdx} };
}

export default function Post({post,mdx}){
  const stats = readingTime(post.content);

  return(
    <article data-testid="blog-post">
      <h1 data-testid="post-title">{post.title}</h1>
      <p data-testid="reading-time">{stats.text}</p>
      <div data-testid="post-content">
        <MDXRemote {...mdx}/>
      </div>
    </article>
  )
}
