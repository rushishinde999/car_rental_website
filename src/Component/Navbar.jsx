import React, { useState } from "react";

const NavLinks = [
  {
    id: "1",
    name: "HOME",
    link: "/#",
  },
  {
    id: "2",
    name: "CARS",
    link: "/#",
  },
  {
    id: "3",
    name: "ABOUT",
    link: "/#",
  },
  {
    id: "4",
    name: "BOOKING",
    link: "/#",
  },
];

const Navbar = () => {
  const [theme, setTheme] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btn, setBtn] = useState("Enable dark mode");

  const toggleStyle = () => {
    if (theme.backgroundColor === "white") {
      setTheme({
        color: "white",
        backgroundColor: "black",
      });
      setBtn("Enable light mode");
    } else {
      setTheme({
        color: "black",
        backgroundColor: "white",
      });
      setBtn("Enable dark mode");
    }
  };

  return (
    <nav
      className="shadow-md"
      style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-serif ml-48">Car Rental</h1>
          </div>
          <div>
            <ul className="flex items-center gap-8 mr-24">
              {NavLinks.map((data) => (
                <li key={data.id} className="py-4">
                  <a
                    className="inline-block py-2 hover:border-b-2 hover:text-orange-500 hover:border-orange-500"
                    href={data.link}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
              <div>
                <button onClick={toggleStyle}>{btn}</button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
