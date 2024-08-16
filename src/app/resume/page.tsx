import React from 'react';

const Resume = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4 text-white">My Resume</h1>
      <div className="w-full max-w-3xl h-[60vh] bg-white border border-gray-300">
        <embed
          src="/AlexResume.pdf"
          type="application/pdf"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Resume;
