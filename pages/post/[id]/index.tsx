import { NextPage } from 'next';

const Post: NextPage<{ title: string; body: string }> = ({ title, body }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

Post.getInitialProps = async ({ query }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${query.id}`,
  );
  const post = res.json();
  return post;
};

export default Post;
