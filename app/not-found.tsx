import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';


export const metadata: Metadata = {
    title: "404 Not Found - Hackathon Helper",
    description: "The definitive tool to your next Hackathon",
  };
  
function NotFoundPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-full bg-[#d0ceca]">
      <figure className="mb-4 rounded-3xl overflow-hidden">
        <Image src="/iagenerated/404_robot.png" alt="404 Robot" className="w-80 h-80 "  width={450} height={450}/>
      </figure>
      <h1 className="text-3xl font-bold mb-2">Oops! Page Not Found</h1>
      <p className="text-lg mb-4">It looks like you&apos;ve stumbled upon a page that doesn&apos;t exist.</p>
      <p className="text-lg mb-4">But don&apos;t worry, you can still join the fun!</p>
      <Link href={'/dashboard'} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
      Get back on track
      </Link>
    </main>
  );
}

export default NotFoundPage;
