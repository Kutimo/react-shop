import { Link } from "react-router-dom";
import KutimoLogo from "../assets/icons/KutimoLogo.svg";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-800 flex flex-col items-center p-5 ">
      <Link to="https://kutimo.dev/">
        <img
          className="mt-2"
          src={KutimoLogo}
          alt="logo"
          width={120}
          height={120}
        />
      </Link>
      <ul>
        <li className="my-2 text-white hover:text-blue-600">
          <Link to="https://github.com/Kutimo">Github</Link>
        </li>
        <li className="my-2 text-white hover:text-blue-600">
          <Link to="https://www.linkedin.com/in/marius-kristiansen-280b3b128/">LinkedIn</Link>
        </li>
      </ul>
    </footer>
  );
}
