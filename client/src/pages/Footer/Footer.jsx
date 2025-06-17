export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-6xl  grid grid-cols-1 md:grid-cols-3 gap-8 px-10 py-16 mx-20'>
        <div>
          <h3 className='text-xl font-semibold mb-4'>RAFF</h3>
          <p className='text-sm text-gray-400'>A curated space for digital art, 3D creations, and visual storytelling.</p>
        </div>

        <div>
          {/* <h4 className='text-lg font-semibold mb-3'>Quick Links</h4>
          <ul className='text-sm space-y-2'>
            <li>
              <a href='#' className='hover:text-amber-400'>
                Home
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-amber-400'>
                Gallery
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-amber-400'>
                About
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-amber-400'>
                Contact
              </a>
            </li>
          </ul> */}
        </div>

        <div>
          <h4 className='text-lg font-semibold mb-3'>Connect</h4>
          <ul className='text-sm space-y-2'>
            <li>
              Email:{" "}
              <a href='mailto:zipiy@media.com' className='hover:text-amber-400'>
                rraaafffii@gmail.com
              </a>
            </li>
            <li>
              Instagram:{" "}
              <a href='#' className='hover:text-amber-400'>
                @raaffiirabbani
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a href='#' className='hover:text-amber-400'>
                rafirabbani
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
