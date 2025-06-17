export default function Banner() {
  return (
    <section class='px-8 py-16 mx-20 bg-amber-700'>
      <div class='grid grid-cols-2 gap-4'>
        <h2 class='text-4xl font-extrabold leading-tight'>
          Website Made By Me
          <br />
          For My Collection
        </h2>
        <div>
          <p class='text-lg italic'>This website serves as a personal archive, showcasing my passion for web design, 3D visualization, and photography. Each piece reflects a journey through digital form and visual storytelling.</p>{" "}
          <a href='#' class='mt-4 inline-block font-bold hover:underline'>
            Find your favorites &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
