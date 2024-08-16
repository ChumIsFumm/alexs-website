import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4 text-white">Alex Bondarchuk</h1>
      <p className="text-lg text-white mb-8">Current Student at Stony Brook University</p>
      
      <div className="p-4 bg-white border border-gray-300">
        <Image
          src="/AlexPicture.jpeg" 
          alt="Alex Bondarchuk"
          width={300} 
          height={300} 
          className="object-cover"
        />
      </div>
    </div>
  );
}
