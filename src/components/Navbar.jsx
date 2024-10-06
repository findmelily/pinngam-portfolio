import React from "react";

function Navbar() {
  return (
    <nav class="">
      <div class="container mx-auto flex justify-center items-center p-4">
        <div class="hidden md:flex space-x-4">
          <a href="#home" class="text-gray-700 hover:text-gray-400">
            Home
          </a>
          <a href="#about" class="text-gray-700 hover:text-gray-400">
            About me
          </a>
          <a href="#services" class="text-gray-700 hover:text-gray-400">
            Activties
          </a>
          <a href="#contact" class="text-gray-700 hover:text-gray-400">
            Experience
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
