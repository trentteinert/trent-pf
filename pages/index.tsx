import Head from 'next/head';
import Navbar from '../pages/navbar';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Trent </title>
        <meta name='description' content='Trenton Teinert // Trent Teinert' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
    </div>
  );
}
