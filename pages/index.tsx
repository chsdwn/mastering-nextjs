import Link from 'next/link';
import React from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Link as="/post/1" href="/post/[id]">
        <a>First Post</a>
      </Link>
      <Link as="/post/2" href="/post/[id]">
        <a>Second Post</a>
      </Link>
      <Link href="/login">
        <a>Login</a>
      </Link>
      <h1>Home</h1>
    </div>
  );
}
