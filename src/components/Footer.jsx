import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      {" "}
      <p>Copyright© {currentYear} Umba</p>
    </footer>
  );
}

export default Footer;

new Date().getFullYear();
