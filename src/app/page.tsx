import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4 text-white">Alex Bondarchuk</h1>
      <p className="text-lg text-white mb-8">Current Student at Stony Brook University</p>
      
      <div className="p-4 bg-white border border-gray-300">
        <Image
          src="/AlexPicture.jpeg" // Ensure the image name and extension match your file
          alt="Alex Bondarchuk"
          width={300} // Adjust the width as needed
          height={300} // Adjust the height as needed
          className="object-cover"
        />
      </div>
    </div>
  );
}
