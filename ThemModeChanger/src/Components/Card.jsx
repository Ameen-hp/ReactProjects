import React from 'react';

export default function Card() {
  return (
    <div className="max-w-sm mx-auto bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out">
      <div className="flex justify-center mt-4">
        <img
          className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md dark:border-gray-700 transition-all hover:scale-105 duration-300"
          src="https://media.licdn.com/dms/image/v2/D5635AQFv4tBnJ7PgAw/profile-framedphoto-shrink_400_400/B56Zd2v3AIHEAg-/0/1750043952811?e=1752901200&v=beta&t=XXpVPXIIaGn6dCJKwk5K-Hi7mqfuZm7zTkiGpRb-85Q"
          alt="Profile"
        />
      </div>

      <div className="px-6 py-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Muhammad Ameen</h2>
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">Full Stack Developer</p>

        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
          Passionate about building scalable web applications and beautiful user experiences. Proficient in React, Tailwind, Node.js, and REST APIs.
        </p>

        <div className="flex justify-center space-x-4 mb-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-white transition-colors"
          >
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-white transition-colors"
          >
            <i className="fas fa-envelope text-xl"></i>
          </a>
        </div>

        <a
          href="/your-resume.pdf"
          className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg text-sm px-5 py-2.5 transition duration-300 shadow-md hover:shadow-lg"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
