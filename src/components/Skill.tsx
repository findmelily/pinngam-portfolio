const Skill = () => {
  return (
    <div className="p-4 relative shadow-xl rounded-lg transition ease-in duration-500 w-1/2">
      <div className="p-4  text-lg font-semibold backdrop-blur-sm">
        <p>Skills</p>
        <ul className="text-sm flex mt-4 flex-wrap items-center justify-start gap-2 gap-y-3 [&>li]:border-2 [&>li]:border-[rgb(88,88,88)] [&>li]:px-3 [&>li]:py-1 [&>li]:rounded-[4px] [&>li]:transition-all [&>li]:duration-150 [&>li]:ease-in [&>li:hover]:scale-105 [&>li:hover]:cursor-pointer">
        
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React.js</li>
          <li>Vue.js</li>
          <li>Nuxt.js</li>
          <li>TailwindCSS</li>

          <li>Go</li>
          <li>Gin</li>

          <li>SQL</li>
          <li>MySQL</li>

          <li>Docker</li>
          <li>Linux</li>
          <li>Git</li>
        </ul>
      </div>
    </div>
  );
};

export default Skill;
