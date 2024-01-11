import React, { useState } from 'react'

export default function Robohash() {
  const [input, setInput] = useState('');
  const [imageUrls, setImageUrls] = useState([]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  }
  const handleOnClick = async () => {
    try {
      const images = await fetch(`https://robohash.org/${input}`);
      if (images.ok) {
        const imageUrl = images.url;

        setImageUrls((lastImages) => {
          if (lastImages.length >= 6) {
            const [, ...newImages] = lastImages;
            return [...newImages, imageUrl];
          } else {
            return [...lastImages, imageUrl];
          }
        })
      } else {
        console.error('Cannot get images.');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <section className="text-gray-600 body-font bg-slate-200" style={{minHeight : "100vh"}}>
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <div className="w-full md:w-2/3 flex flex-col mb-8 items-center text-center">
            <div className="flex w-full justify-center items-center">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  placeholder="Generate Robot"
                  className="w-full shadow-md bg-white bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={handleInputChange}
                />
              </div>
              <button
                onClick={handleOnClick}
                className="inline-flex text-white shadow-md bg-indigo-500 border-0 py-1.5 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Enter
              </button>
            </div>
            <div className="flex flex-wrap md:ml-18 mt-7 ml-12 text-center -m-4">
              {imageUrls.map((imageUrl, index) => (
                <div key={index} className={`p-4 md:w-1/${Math.min(imageUrls.length, 3)} min-w-0`}>
                  <img className="rounded w-full h-full" style={{ width: "225px", height: "225px" }} src={imageUrl} alt={`RoboHash Image ${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
