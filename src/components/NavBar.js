import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkEl = links.map((data) => {
    return (
      <a key={data} href={"#" + data}>
        {data}
      </a>
    );
  });
  return <nav>{linkEl}</nav>;
}

export default NavBar;
