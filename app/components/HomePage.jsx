'use client';
import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Analysis from './Analysis';

function HomePage() {
  const [correctQuestions, setCorrectQuestions] = useState(0);

  return (
    <div className="container w-full max-w-full">
      <div className="w-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <Dashboard setCorrectQuestions={setCorrectQuestions} />
        <Analysis correctQuestions={correctQuestions} />
      </div>
    </div>
  );
}

export default HomePage;