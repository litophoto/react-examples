type Post = {
  id: number;
  title: string;
  document: string;
};

function PostPage(post: Post) {
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.document}</p>
    </>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch('url')
  const post = await res.json()

  return { props: { post }}
}

export default PostPage