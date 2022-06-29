import photogrid from "../images/photo-grid.png";

function Hero() {
  return (
    <div className="flex flex-col p-10 gap-5">
      <div className="">
        <img src={photogrid} alt="photogrid" />
      </div>
      <div className="">
        <h1 className="text-4xl font-bold">Online Experiences</h1>
        <p className="text-xl">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}

export default Hero;
