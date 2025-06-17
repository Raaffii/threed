import { useState, useEffect } from "react";
import ThreedCard from "./ThreedCard";

export default function ThreedVid() {
  const [list, setList] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("bro");
        const response = await fetch("http://localhost:3000/threed/getthreed");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const responseData = await response.json();
        setList(responseData.data);
      } catch (err) {
      } finally {
      }
    };
    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirsItem = indexOfLastItem - itemsPerPage;
  const currentItems = list.slice(indexOfFirsItem, indexOfLastItem);

  const pagesChange = (index) => {
    if (index == 1) {
      if (currentItems != 0) {
        setCurrentPage(currentPage + 1);
      }
    } else {
      if (currentPage != 1) setCurrentPage(currentPage - 1);
    }
  };
  return (
    <section class='px-8 py-16 mx-20' id='threedvid'>
      <div class='grid grid-cols-1 lg:grid-cols-10 gap-12'>
        <div class='lg:col-span-4 relative'>
          <div class='sticky top-20'>
            <h2 class='text-4xl font-extrabold leading-tight'>
              My 3D Video
              <br />
              in collection
            </h2>
            <p class='mt-4 text-lg text-gray-700'>Creating Something From.</p>
            <a href='https://www.youtube.com/@EOREKA' class='mt-4 inline-block font-bold hover:underline'>
              Visit My Youtube &rarr;
            </a>
          </div>
        </div>

        <div class='lg:col-span-5'>
          <video autoPlay loop playsInline controls className='w-full max-w-[800px] mx-auto mb-6 rounded-md block bg-black'>
            <source src='/threedvideo/voy.mp4' type='video/mp4' />
            Browser kamu tidak mendukung video.
          </video>
          <div class='grid grid-cols-8 gap-4 my-2 '>
            <button className=' bg-gray-200 hover:bg-gray-300 text-1xl font-bold text-gray-700 flex items-center justify-center transition-transform duration-300 hover:translate-x-1' onClick={() => pagesChange(1)}>
              Prev
            </button>
            <video autoPlay loop playsInline controls className='w-full h-24 object-contain border-gray-300 col-span-2'>
              <source src='/threedvideo/spiderbot.mp4' type='video/mp4' />
              Browser kamu tidak mendukung video.
            </video>
            <video autoPlay loop playsInline controls className='w-full h-24 object-contain border-gray-300 col-span-2'>
              <source src='/threedvideo/port.mp4' type='video/mp4' />
              Browser kamu tidak mendukung video.
            </video>
            <video autoPlay loop playsInline controls className='w-full h-24 object-contain border-gray-300 col-span-2'>
              <source src='/threedvideo/skateboarding.mp4' type='video/mp4' />
              Browser kamu tidak mendukung video.
            </video>
            <button className=' bg-gray-200 hover:bg-gray-300 text-1xl font-bold text-gray-700 flex items-center justify-center transition-transform duration-300 hover:translate-x-1' onClick={() => pagesChange(1)}>
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
