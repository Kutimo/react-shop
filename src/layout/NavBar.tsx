import { Link } from "react-router-dom";
import logoImage from "../assets/icons/logo.svg";
export default function NavBar() {
  return (
    <header className="flex justify-between items-center p-2 bg-gray-400">
      <Link to="/">
        <img
          src={logoImage}
          alt="logo"
        />
      </Link>
      <nav className="">
        <ul className="flex flex-row">
          <li className="mx-5 hover:text-blue-600">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-5 hover:text-blue-600">
            <Link to="/Products">Products</Link>
          </li>
          <li className="mx-5 hover:text-blue-600">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
