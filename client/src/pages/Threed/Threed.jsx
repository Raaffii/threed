import ThreedCard from "./ThreedCard";
import { useState, useEffect } from "react";

export default function Threed() {
  const [list, setList] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("bro");
        const response = await fetch("https://threed-server.vercel.app/threed/getthreed");

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
    <section class='px-8 py-16 mx-20' id='threed'>
      <div class='grid grid-cols-1 lg:grid-cols-10 gap-12'>
        <div class='lg:col-span-4 relative'>
          <div class='sticky top-20'>
            <h2 class='text-4xl font-extrabold leading-tight'>
              My 3D Journey
              <br />
              in collection
            </h2>
            <p class='mt-4 text-lg text-gray-700'>From Noob to Not-So-Noob.</p>
            <a href='#' class='mt-4 inline-block font-bold hover:underline'>
              Find your favorites &rarr;
            </a>
          </div>
        </div>

        <div class='lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-5'>
          {currentItems.map((item, index) => (
            <ThreedCard nama={item.nama} tanggal={item.tanggal} gambar={item.gambar} />
          ))}
        </div>
        <div className='lg:col-span-1 flex flex-col gap-1 relative'>
          <div className='sticky top-20 '>
            <button className='w-10 h-10 bg-gray-200 hover:bg-gray-300 text-1xl font-bold text-gray-700 flex items-center justify-center transition-transform duration-300 hover:translate-x-1' onClick={() => pagesChange(1)}>
              Next
            </button>

            <button className='w-10 h-10 bg-gray-200 hover:bg-gray-300 text-1xl font-bold text-gray-700 flex items-center justify-center transition-transform duration-300 hover:translate-x-1 my-2' onClick={() => pagesChange(2)}>
              Prev
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
