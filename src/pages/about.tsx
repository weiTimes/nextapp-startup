import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <Head>
        <title>关于我</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Hello, I'm Yewei</h1>

        <Link href='/'>
          <a>去首页</a>
        </Link>
      </main>
    </div>
  );
}
