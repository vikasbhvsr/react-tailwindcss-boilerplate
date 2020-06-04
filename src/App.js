import React from 'react';
import reactLogo from './react-logo.svg';
import tailwindLogo from './tailwindcss-logo.svg';
// import './App.css';

function App() {
  return (
    <div className='App container mx-auto p-8 text-center min-h-screen flex flex-col justify-center items-center space-y-12'>
      <header className='space-y-4'>
        <h1 className='text-4xl leading-normal tracking-tight text-center'>
          React + Tailwind CSS Boilerplate
        </h1>
        <a
          href='https://github.com/vikasbhvsr/react-tailwindcss-boilerplate'
          target='_blank'
          rel='noopener noreferrer'
          className='border-2 border-blue-700 text-blue-700 hover:text-white hover:bg-blue-700 rounded text-lg inline-flex justify-center items-center space-x-1 px-6 py-3 transition duration-150'
        >
          <span>Get Started</span>
          <svg
            className='h-4 w-4'
            fill='none'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'></path>
          </svg>
        </a>
        <div className='grid grid-cols-2 align-middle justify-center items-center gap-4 text-center'>
          <div>
            <img
              src={reactLogo}
              className='App-logo w-64 h-64 text-center mx-auto block'
              alt='logo'
            />
            <a
              className='bg-blue-300 text-blue-900 px-4 py-2 rounded uppercase leading-normal tracking-wide text-xs font-semibold inline-flex items-center justify-center space-x-2 hover:bg-blue-400 transition duration-150'
              href='https://reactjs.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>Learn React</span>
              <svg
                className='inline h-4 w-4 align-middle'
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'></path>
              </svg>
            </a>
          </div>
          <div>
            <img
              src={tailwindLogo}
              className='App-logo w-64 h-64 text-center mx-auto block'
              alt='logo'
            />
            <a
              className='bg-teal-300 text-teal-900 px-4 py-2 rounded uppercase leading-normal tracking-wide text-xs font-semibold inline-flex justify-center items-center space-x-2 hover:bg-teal-400 transition duration-150'
              href='https://tailwindcss.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>Learn Tailwind CSS</span>
              <svg
                className='inline h-4 w-4 align-middle'
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'></path>
              </svg>
            </a>
          </div>
        </div>
      </header>
      <footer>
        <p>
          Made with{' '}
          <span role='img' aria-label='Heart'>
            ❤️
          </span>{' '}
          by <a href='https://github.com/vikasbhvsr/'>Vikas</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
