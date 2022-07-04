export default function Hero() {
  return (
    <section className="flex flex-col p-10 gap-4">
      <img
        src="./images/photo-grid.png"
        alt="photogrid"
        className="self-center max-w-md"
      />
      <h1 className="text-4xl font-bold">Online Experiences</h1>
      <p className="text-xl">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
