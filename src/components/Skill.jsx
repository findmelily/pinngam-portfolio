const Skill = () => {
  return (
    <div className="p-4 relative shadow-xl rounded-2xl  cursor-pointer transition ease-in duration-500 transform hover:scale-105 w-1/2">
      <div class=" p-4 text-sm font-semibold backdrop-blur-sm">
        <p>SKILLS</p>
        <ul class="flex mt-4 flex-wrap items-center justify-start gap-2 gap-y-3 [&>li]:border-2 [&>li]:border-[#2f2a47] [&>li]:px-3 [&>li]:py-1 [&>li]:rounded-[4px] [&>li]:transition-all [&>li]:duration-150 [&>li]:ease-in [&>li:hover]:scale-105 [&>li:hover]:cursor-pointer">
          <li>UI/UX</li>
          <li>Front End Development</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Back End Development</li>
          <li>TailwindCSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>PHP</li>
          <li>MySQL</li>
          <li>SEO</li>
        </ul>
      </div>
    </div>
  );
};

export default Skill;
