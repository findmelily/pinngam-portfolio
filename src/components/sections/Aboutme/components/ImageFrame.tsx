import pinngamImage from "@/assets/Pinngam.jpg";
import Resume from "@/assets/Resume.pdf";
import { Button } from "@/components/animate-ui/components/buttons/button";




const Aboutme = () => {
  return (
    <div className="bg-slate-50 justify-center justify-items-center rounded-md ">
      <div className="grid grid-cols-4 md:grid-cols-2 gap-4 items-center">
        <img
          src={pinngamImage}
          alt="Pinngam"
          className="rounded-full size-80"
        />
       
        <div className="grid grid-cols-1 gap-4 my-5 mx-10">
          <h1 className="text-3xl font-bold">Hi, I'm Pinngam Sombutsri👋</h1>
          <h3 className="text-xl font-semibold my-2">
            A passionate web developer.
          </h3>
          <p className="overflow-ellipsis">
            I specialize in building exceptional digital experiences with modern
            web technologies. Focus on writing clean and accessible code, and I
            am always eager to learn new technologies and improve my skills.
          </p>
        </div>
        <div className="flex mt-5">
          <a href="https://github.com/findmelily">
            <Button
              className="bg-slate-700 hover:bg-slate-900 focus:bg-slate-900 text-white font-bold py-2 px-4 rounded transition-colors duration-300 flex items-center gap-2"
              aria-label="View on GitHub"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-current"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub
            </Button>
          </a>
          <a href={Resume} download="Pinngam_Resume.pdf">
            <Button
              variant="default"
              className="ml-2 bg-slate-700 hover:bg-slate-900 focus:bg-slate-900 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
              aria-label="Download Resume"
            >
              Resume
            </Button>
          </a>
        </div>
        </div>
      </div>
  );
};

export default Aboutme;
