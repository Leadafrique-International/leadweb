import Head from 'next/head';

export default function ComingSoon() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700">
      <Head>
        <title>Coming Soon</title>
      </Head>

      <div className="text-center">
        <h1 className="text-6xl font-bold text-white">Coming Soon</h1>
        <p className="text-xl text-white mt-4">
          You can browse our other programs, Thank you.
        </p>

        
      </div>
    </div>
  );
}
