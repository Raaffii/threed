export default function Navbar() {
  return (
    <>
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <div class='flex justify-center py-6 bg-white'>
        <h1 class='text-6xl font-black tracking-tighter mr-2'>RAFF </h1> <img src='landingpage/logo1.png' alt='' className='w-15' />
      </div>

      <nav class='sticky top-0 z-50 bg-white border-b'>
        <div class='flex justify-between items-center  font-bold px-8 py-2 mx-20'>
          <div class='flex space-x-6'>
            <a href='#threed' class='hover:underline'>
              3DPic
            </a>
            <a href='#threedvid' class='hover:underline'>
              3DVid
            </a>
            <a href='#' class='hover:underline'>
              Photo (Not Yet)
            </a>
            <a href='#' class='hover:underline text  font-bold'>
              Art (Not Yet)
            </a>
          </div>

          <div class='flex items-center space-x-6'>
            <div class='flex items-center space-x-1'>
              <span>RAFF</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
