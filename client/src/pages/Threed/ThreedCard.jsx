export default function ThreedCard({ nama, gambar, tanggal }) {
  return (
    <div>
      <img src={"hasilthreed/" + gambar} class='w-50 object-cover' />
      <p class='mt-2 font-bold'>{nama}</p>
      <p class='italic'>{tanggal}</p>
    </div>
  );
}
