import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container-main flex justify-between items-center p-4">
      <div className="w-1/2 w-full flex flex-col justify-start">
        <div className="text-8xl font-bold flex items-center gap-2">
          <span>Sh</span>
          <span className="inline-block mx-1 w-32 h-16 border-8 border-orange-500 rounded-full"></span>
          <span>es</span>
        </div>
        <span className='text-8xl font-bold'>Collect!</span>
        <div className="flex items-center mt-4" style={{ width: 'calc(8rem + 32px + 8rem + 4rem)' }}>
          <span className="mr-4 text-xl text-justify" style={{ maxWidth: 'calc(100% - 160px)' }}>Discover our stylish and comfortable shoes perfect for every occasion and need.</span>
          <Link to="/product">
            <button className="ml-4 bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600">Shop Now</button>
          </Link>
        </div>
      </div>
      <div className="w-1/2 flex justify-end">
        <img src="https://hdpng.com/images/nike-shoe-png-nike-shoes-png-transparent-image-512.png" alt="Nike Shoe" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default HomePage;
