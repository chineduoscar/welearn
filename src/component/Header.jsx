import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-red-500 py-4 px-5">
      <h1>This header page</h1>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
      <div>
        <button>login</button>
      </div>
    </header>
  );
};

export default Header;
