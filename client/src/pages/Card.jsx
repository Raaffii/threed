export default function Card({ nama, tahun, gambar, nomer }) {
  return (
    <div class='bg-white p-4 rounded-lg shadow hover:shadow-lg transition'>
      <img src={"hasilthreed/" + gambar} alt='3D Model' className='rounded-md mb-2' />
      <h4 class='text-center text-sm font-medium'>{nomer + 1}</h4>
      <h3 class='text-center text-sm font-medium'>{nama}</h3>

      <div class='flex justify-center space-x-4 mt-2 text-gray-600'>
        <button title='Preview'>
          <svg class='w-5 h-5' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
            <path d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
            <path d='M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z' />
          </svg>
        </button>
        <button title='Download'>
          <svg class='w-5 h-5' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
            <path d='M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2' />
            <path d='M7 10l5 5 5-5' />
            <path d='M12 15V3' />
          </svg>
        </button>

        <button title='Delete'>
          <svg class='w-5 h-5' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
            <path d='M19 7L5 7' />
            <path d='M6 7l1 12a2 2 0 002 2h6a2 2 0 002-2l1-12' />
            <path d='M10 11v6' />
            <path d='M14 11v6' />
            <path d='M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3' />
          </svg>
        </button>
      </div>
    </div>
  );
}
