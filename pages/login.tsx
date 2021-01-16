import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const onLogin = (e) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div>
      <input placeholder="Username" />
      <input placeholder="Password" type="password" />
      <button onClick={onLogin} type="button">
        Login
      </button>
    </div>
  );
};

export default Login;
