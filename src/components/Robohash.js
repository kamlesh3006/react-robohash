import React from 'react';
import { useState } from 'react';

export default function Robohash() {
    const [input, setInput] = useState("");
    const [imageURL, setImageURL] = useState("");
    
    const handleInputChange = (event) => {
        setInput(event.target.value);
    }

    const handleOnClick = () => {
        setImageURL(`https://robohash.org/${input}`)
    }

  return (
    <div>
      <section className="text-gray-600 body-font bg-slate-200" style={{minHeight : "100vh"}}>
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <div className="w-full md:w-1/2 flex flex-col mb-16 items-center text-center">
            <div className="flex w-full justify-center items-center">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                <input
                  type="text"
                  id="input"
                  value={input}
                  onChange={handleInputChange}
                  name="hero-field"
                  placeholder="Generate Robot"
                  className="w-full bg-white rounded focus:ring-2 focus:ring-indigo-200 border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <button onClick={handleOnClick}
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Enter
              </button>
            </div>
          </div>
          {imageURL && 
          <div className='flex flex-col items-center text-center'>
            <p className='text-3xl font-bold mb-4'>Robot</p>
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            style={{width : '400px', height : '400px'}}
            alt="RoboHash imageURL"
            src={imageURL}
          />
          </div>}
        </div>
      </section>
    </div>
  );
}
