import React from "react";
import pinngamImage from "../assets/Pinngam.jpg";
import githubLogo from "../assets/github-logo.png";

const Profile = () => {
  return (
    <div className="md:flex m-5 p-5 shadow-2xl w-3/4 justify-center justify-items-center rounded-md  transition ease-in duration-500 transform hover:scale-105">
      <img
        src={pinngamImage}
        alt="Pinngam"
        className="rounded-full w-56 h-56 m-3"
      />
      <div className="my-5 mx-10">
        <h1 className="text-3xl font-bold">Hi, I'm Pinngam 👋</h1>
        <h3 className="text-xl font-semibold my-2">
          A passionate web developer and a junior at SIT from KMUTT Thailand.
        </h3>
        <p className="overflow-ellipsis">
          I'm seeking an internship opportunity in IT field to improve my skills
          and gain more experience. I'm open to working with a team and I'm
          eager to actively develop and improve myself.
        </p>
        <div>
          <a href="https://github.com/findmelily">
            <button
              className="bg-slate-700 hover:bg-slate-900 focus:bg-slate-900 text-white font-bold py-2 px-4 rounded mt-5 transition-colors duration-300"
              aria-label="View on GitHub"
            >
              <img
                src={githubLogo}
                alt="GitHub Logo"
                className="w-5 h-5 inline mr-2 bg-slate-700 hover:bg-slate-900 focus:bg-slate-900"
              />
              GitHub
            </button>
          </a>
          <button className="bg-blue-500  text-white font-bold py-2 px-4 rounded ml-5 mt-5 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-pink-700 duration-[400ms,700ms] transition-[color,box-shadow]">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
