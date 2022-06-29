import airbnblogo from "../images/airbnb-logo.png";

function NavBar() {
  return (
    <nav className="flex h-28 px-5 py-9 shadow-md">
      <img src={airbnblogo} alt="logo" className="max-w-10" />
    </nav>
  );
}

export default NavBar;
