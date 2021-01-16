import { NextPage } from 'next';

interface IProps {
  name: string;
  bio?: string;
  blog?: string;
}

const Dashboard: NextPage<IProps> = ({ name, bio, blog }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{bio}</p>
      <p>{blog}</p>
    </div>
  );
};

// If you're using Next.js 9.3 or newer, we recommend that you use
// getStaticProps or getServerSideProps instead of getInitialProps.
// These new data fetching methods allow you to have a granular choice
// between static generation and server-side rendering.
Dashboard.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/users/chsdwn');
  const user = await res.json();
  return user;
};

export default Dashboard;
